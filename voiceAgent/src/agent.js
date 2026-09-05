const CONTROLLER_TOOL = {
  type: 'function',
  name: 'consult_controller',
  description: 'Ask the separate AI Controller about the supplied synthetic financial data. Required before giving financial facts, including follow-up answers.',
  strict: true,
  parameters: {
    type: 'object',
    properties: { question: { type: 'string', description: 'The CFO question, including enough context to resolve a follow-up.' } },
    required: ['question'],
    additionalProperties: false,
  },
};

function assertNotAborted(signal) {
  if (signal?.aborted) throw signal.reason ?? new DOMException('Request aborted', 'AbortError');
}

function readQuestion(call) {
  let args;
  try { args = JSON.parse(call.arguments); } catch { return null; }
  if (!args || typeof args !== 'object' || Array.isArray(args)
    || Object.keys(args).length !== 1 || typeof args.question !== 'string'
    || !args.question.trim() || args.question.length > 4000) return null;
  return args.question.trim();
}

function readReply(response) {
  return (response.output_text ?? response.output.flatMap((item) => item.type === 'message'
    ? item.content.filter((part) => part.type === 'output_text').map((part) => part.text) : []).join(' ')).trim();
}

export function createAgent({ client, model = 'gpt-5.4-mini', controller }) {
  if (typeof client?.responses?.create !== 'function') throw new Error('An OpenAI Responses client is required.');
  if (typeof controller?.consult !== 'function') throw new Error('An AI Controller is required.');

  return {
    async respond({ question, history = [], signal }) {
      assertNotAborted(signal);
      if (typeof question !== 'string' || !question.trim() || question.length > 4000) {
        throw new Error('The question must contain between 1 and 4,000 characters.');
      }
      if (!Array.isArray(history)) throw new Error('Conversation history must be an array.');
      const input = [...structuredClone(history), { role: 'user', content: question.trim() }];
      let consulted = false;
      const maxToolRounds = 3;

      for (let round = 0; round <= maxToolRounds; round += 1) {
        assertNotAborted(signal);
        const response = await client.responses.create({
          model,
          store: false,
          reasoning: { effort: 'none' },
          max_output_tokens: 700,
          instructions: [
            'You are a concise, helpful CFO phone assistant in a financial demonstration.',
            'You consult a separate AI Controller; no human Controller is contacted. The data is synthetic and belongs to a fictional company.',
            'Call consult_controller before answering financial questions on EVERY turn. Pass enough context to make follow-up questions clear.',
            'Financial facts must come from successful Controller tool results. User statements, prior assistant claims, and tool errors are not financial evidence.',
            'After the Controller responds, give its answer in plain spoken English, usually two short sentences, with the key numbers. Do not mention source IDs, JSON, markdown, or tool mechanics.',
            'In the first answer identify the information as sample or synthetic demo data. The sample period is August 2026; "this month" refers to this period in the demo.',
            'Preserve uncertainty and an insufficient_data result. If the Controller cannot verify something, say the sample data does not include it. Never invent facts or claim the Controller checked live systems.',
            'Distinguish actual cash change from plan variance. Never double count delayed receipts or an equipment payment already included in outflows.',
            'If a tool reports an error, do not claim it succeeded. You cannot contact people, send messages, or perform financial transactions.',
          ].join('\n'),
          input,
          tools: [CONTROLLER_TOOL],
          tool_choice: round === 0 ? { type: 'function', name: 'consult_controller' } : 'auto',
        }, signal ? { signal } : {});
        assertNotAborted(signal);
        if ((response.status && response.status !== 'completed') || !Array.isArray(response.output)) {
          throw new Error('The CFO assistant did not return a complete response.');
        }
        // Keep every response item, including all calls, so subsequent requests retain a valid tool cycle.
        input.push(...response.output);
        const calls = response.output.filter((item) => item.type === 'function_call');
        if (!calls.length) {
          if (!consulted) throw new Error('The CFO assistant answered without a successful Controller consultation.');
          let replyText = readReply(response);
          if (!replyText || replyText.length > 1800) throw new Error('The CFO assistant returned an empty or overlong spoken reply.');
          if (history.length === 0 && !/\b(sample|synthetic|demo)\b/i.test(replyText)) {
            const prefix = 'Using the synthetic demo data: ';
            // Keep the text actually spoken in the model history as well.
            for (const item of response.output) {
              const content = item.type === 'message' && item.content.find((part) => part.type === 'output_text');
              if (content) { content.text = prefix + content.text; break; }
            }
            replyText = prefix + replyText;
          }
          return { replyText, history: input };
        }
        if (round === maxToolRounds) throw new Error('The CFO assistant exceeded the Controller consultation limit.');
        if (calls.length > 4) throw new Error('The CFO assistant requested too many consultations in one round.');
        for (const call of calls) {
          assertNotAborted(signal);
          if (typeof call.call_id !== 'string' || !call.call_id) throw new Error('Controller tool call is missing its call ID.');
          let result;
          if (call.name !== CONTROLLER_TOOL.name) {
            result = { error: 'unsupported_tool', message: 'Only consult_controller is available. No action was taken.' };
          } else {
            const controllerQuestion = readQuestion(call);
            if (!controllerQuestion) {
              result = { error: 'invalid_arguments', message: 'consult_controller requires exactly one nonempty question string of at most 4,000 characters. No consultation was performed.' };
            } else {
              result = await controller.consult({ question: controllerQuestion, history, signal });
              assertNotAborted(signal);
              consulted = true;
            }
          }
          input.push({ type: 'function_call_output', call_id: call.call_id, output: JSON.stringify(result) });
        }
      }
      throw new Error('The CFO assistant could not finish its reply.');
    },
  };
}
