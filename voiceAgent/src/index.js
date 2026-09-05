import { readFile } from 'node:fs/promises';
import OpenAI from 'openai';
import { loadConfig, requireConfig } from './config.js';
import { createAudioStore } from './audio-store.js';
import { createSpeechService } from './speech.js';
import { createController } from './controller.js';
import { createAgent } from './agent.js';
import { createApp, PROMPTS } from './app.js';
import { withPrismTracing } from './prismtrace.js';

async function main() {
  const config = loadConfig();
  requireConfig(config, ['openaiApiKey', 'twilioAuthToken', 'publicBaseUrl']);
  const client = withPrismTracing(new OpenAI({ apiKey: config.openaiApiKey, maxRetries: 0, timeout: 15000 }));
  const financials = JSON.parse(await readFile(new URL('../data/sample-financials.json', import.meta.url), 'utf8'));
  const controller = createController({ client, model: config.controllerModel, financials });
  const agent = createAgent({ client, model: config.openaiModel, controller });
  const audioStore = createAudioStore();
  const speech = createSpeechService({
    apiKey: config.elevenlabsApiKey, voiceId: config.elevenlabsVoiceId,
    modelId: config.elevenlabsModelId, audioStore,
  });
  const app = createApp({ config, agent, speech, audioStore });
  const server = app.listen(config.port, '0.0.0.0', () => {
    console.log(`CFO Voice Agent listening at http://localhost:${config.port}`);
    console.log(`Twilio voice webhook: ${config.publicBaseUrl}/voice/incoming`);
    console.log('Controller source: synthetic sample company data.');
    if (!config.elevenlabsApiKey || !config.elevenlabsVoiceId) console.log('ElevenLabs is not configured; using Twilio speech fallback.');
  });
  server.on('error', (error) => { console.error('Server could not start:', error.message); app.locals.close(); process.exitCode = 1; });
  await Promise.all([PROMPTS.greeting, PROMPTS.hold].map((text) => speech.synthesize(text)));
  const shutdown = () => { app.locals.close(); server.close(); };
  process.once('SIGINT', shutdown);
  process.once('SIGTERM', shutdown);
}

main().catch((error) => { console.error(error.message); process.exitCode = 1; });
