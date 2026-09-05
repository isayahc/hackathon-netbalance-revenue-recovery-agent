import express from 'express';
import twilio from 'twilio';
import { createCallStore } from './call-store.js';

export const PROMPTS = {
  greeting: "Hello, I'm your AI finance assistant. This demo uses sample company data. What would you like to ask our AI Controller?",
  hold: 'Stay on the line. I will check with our Controller.',
  silence: "I didn't catch that. Please ask your question, or say goodbye to end the call.",
  problem: "I couldn't get a confirmed answer from the Controller just now. Please try your question again, or say goodbye.",
  goodbye: 'Thank you for calling. Goodbye.',
};

const CALL_SID = /^CA[a-f\d]{32}$/i;
const TERMINAL_STATUSES = new Set(['completed', 'busy', 'failed', 'no-answer', 'canceled']);
const isGoodbye = (text) => /^(?:goodbye|bye|bye bye|no thanks|no thank you|that(?:'s| is) (?:all|everything)|nothing else|thank you[,.]? (?:goodbye|bye|that(?:'s| is) all))[.! ]*$/i.test(text);

export function createApp({ config, agent, speech, audioStore, callStore, logger = console, validateRequest = twilio.validateRequest }) {
  const app = express();
  const calls = callStore || createCallStore({ ttlMs: config.sessionTtlMs, maxCalls: config.maxCalls });
  const { VoiceResponse } = twilio.twiml;
  app.disable('x-powered-by');
  app.use(express.urlencoded({ extended: false, limit: '16kb' }));

  function say(node, text, audioPath = null) {
    if (audioPath) node.play(`${config.publicBaseUrl}${audioPath}`);
    else node.say({ voice: 'Polly.Joanna', language: 'en-US' }, text);
  }

  function hangup(text) {
    const xml = new VoiceResponse();
    say(xml, text);
    xml.hangup();
    return xml.toString();
  }

  function gather(text, audioPath, turnId) {
    const xml = new VoiceResponse();
    const listen = xml.gather({
      input: 'speech', action: `/voice/gather?turn=${turnId}`, method: 'POST',
      language: 'en-US', speechTimeout: 'auto', timeout: 7, actionOnEmptyResult: true,
    });
    say(listen, text, audioPath);
    return xml.toString();
  }

  function waiting(turnId, text, audioPath) {
    const xml = new VoiceResponse();
    if (text) say(xml, text, audioPath);
    else xml.pause({ length: 2 });
    xml.redirect({ method: 'POST' }, `/voice/wait?turn=${turnId}`);
    return xml.toString();
  }

  function safe(handler) {
    return async (req, res) => {
      res.set('Cache-Control', 'no-store');
      try { await handler(req, res); }
      catch (error) {
        logger.warn('Voice handler failed.', { type: error.name });
        if (!res.headersSent) res.type('text/xml').send(hangup("I'm sorry, the voice assistant is unavailable right now. Please call back shortly."));
      }
    };
  }

  function send(res, xml) { res.type('text/xml').send(xml); }

  function sessionEnded(res) {
    send(res, hangup('This conversation has expired. Please call again to start a new conversation.'));
  }

  function startJob(call, turn, question) {
    turn.state = 'working';
    const abortController = new AbortController();
    turn.abortController = abortController;
    const { signal } = abortController;
    let onAbort;
    const aborted = new Promise((_, reject) => {
      onAbort = () => reject(signal.reason || new Error('Call ended.'));
      signal.addEventListener('abort', onAbort, { once: true });
    });
    const timer = setTimeout(() => abortController.abort(new Error('Controller deadline exceeded.')), config.turnTimeoutMs);

    // No provider request is awaited by /voice/gather or /voice/wait.
    turn.work = (async () => {
      try {
        const result = await Promise.race([agent.respond({ question, history: call.history, signal }), aborted]);
        if (!result?.replyText?.trim() || !Array.isArray(result.history)) throw new Error('Invalid agent response.');
        const audioPath = await Promise.race([speech.synthesize(result.replyText, { signal }), aborted]);
        if (signal.aborted || call.closed) return;
        call.history = result.history;
        const next = calls.nextTurn(call);
        turn.resultXml = gather(result.replyText, audioPath, next.id);
        turn.state = 'ready';
      } catch (error) {
        if (call.closed) return;
        logger.warn('Controller turn unavailable.', { type: error.name });
        // A failed turn does not commit incomplete tool calls to conversation history.
        const next = calls.nextTurn(call);
        turn.resultXml = gather(PROMPTS.problem, null, next.id);
        turn.state = 'failed';
      } finally {
        clearTimeout(timer);
        signal.removeEventListener('abort', onAbort);
      }
    })();
  }

  app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'cfo-voice-agent', data: 'sample' }));
  app.get('/', (_req, res) => res.type('text').send('CFO Voice Agent is running. Connect your Twilio number to POST /voice/incoming. Health: /health'));

  app.get('/audio/:id', (req, res) => {
    const audio = audioStore.get(req.params.id);
    if (!audio) return res.sendStatus(404);
    res.set('Cache-Control', 'private, no-store');
    res.type(audio.mimeType).send(audio.buffer);
  });

  app.use('/voice', (req, res, next) => {
    if (req.method !== 'POST') return res.sendStatus(405);
    if (!config.twilioAuthToken || !config.publicBaseUrl) return res.sendStatus(503);
    // Use the configured public origin; forwarded Host headers must not change signature validation.
    const signature = req.get('X-Twilio-Signature');
    if (!signature || !validateRequest(config.twilioAuthToken, signature, `${config.publicBaseUrl}${req.originalUrl}`, req.body || {})) {
      return res.sendStatus(403);
    }
    if (!CALL_SID.test(req.body?.CallSid || '')) return res.status(400).send('Invalid CallSid.');
    next();
  });

  app.post('/voice/incoming', safe(async (req, res) => {
    if (req.body.AnsweredBy?.startsWith('machine')) {
      return send(res, hangup('This is your AI finance assistant. Please call this number back when you are available.'));
    }
    const call = calls.create(req.body.CallSid);
    // Repeated Twilio delivery reuses the same greeting and listening token.
    if (!call.greeting) {
      const turn = calls.nextTurn(call);
      call.greeting = speech.synthesize(PROMPTS.greeting).then((audioPath) => gather(PROMPTS.greeting, audioPath, turn.id));
    }
    send(res, await call.greeting);
  }));

  app.post('/voice/gather', safe(async (req, res) => {
    const call = calls.get(req.body.CallSid);
    if (!call) return sessionEnded(res);
    const turn = call.turns.get(req.query.turn);
    if (!turn) return sessionEnded(res);

    if (turn.state !== 'listening') {
      return send(res, turn.immediateXml || turn.resultXml || waiting(turn.id));
    }
    if (call.currentTurn !== turn.id) return sessionEnded(res);
    const question = typeof req.body.SpeechResult === 'string' ? req.body.SpeechResult.trim() : '';
    if (question.length > 2000) throw new Error('Question is too long.');

    if (!question) {
      turn.state = 'ready';
      if (turn.silenceCount >= 1) {
        turn.resultXml = hangup("I'm having trouble hearing you. Please call back when you're ready. Goodbye.");
      } else {
        const next = calls.nextTurn(call);
        next.silenceCount = turn.silenceCount + 1;
        turn.resultXml = gather(PROMPTS.silence, null, next.id);
      }
      return send(res, turn.resultXml);
    }
    if (isGoodbye(question) || call.questionCount >= 30) {
      turn.state = 'ready';
      turn.resultXml = hangup(PROMPTS.goodbye);
      return send(res, turn.resultXml);
    }

    call.questionCount += 1;
    startJob(call, turn, question);
    // This phrase is normally already cached by startup warmup; TTS has its own short timeout.
    const audioPath = await speech.synthesize(PROMPTS.hold);
    turn.immediateXml = waiting(turn.id, PROMPTS.hold, audioPath);
    send(res, turn.immediateXml);
  }));

  app.post('/voice/wait', safe(async (req, res) => {
    const call = calls.get(req.body.CallSid);
    const turn = call?.turns.get(req.query.turn);
    if (!call || !turn) return sessionEnded(res);
    send(res, turn.resultXml || waiting(turn.id));
  }));

  app.post('/voice/status', (req, res) => {
    if (TERMINAL_STATUSES.has(req.body.CallStatus)) calls.remove(req.body.CallSid);
    res.sendStatus(204);
  });

  const sweeper = setInterval(() => calls.sweep(), 60000);
  sweeper.unref();
  app.locals.calls = calls;
  app.locals.close = () => { clearInterval(sweeper); calls.clear(); audioStore.clear(); };
  return app;
}
