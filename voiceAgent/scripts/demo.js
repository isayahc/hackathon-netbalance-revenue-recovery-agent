import { readFile } from 'node:fs/promises';
import { createAgent } from '../src/agent.js';
import { createController, reconcileFinancials } from '../src/controller.js';
import { PROMPTS } from '../src/app.js';

// A deterministic, explicitly offline walkthrough of the real orchestration code.
// This fake SDK never contacts OpenAI, ElevenLabs, Twilio, or any other service.
const financials = JSON.parse(await readFile(new URL('../data/sample-financials.json', import.meta.url), 'utf8'));
reconcileFinancials(financials);
const answer = financials.contextFacts.find((entry) => entry.sourceId === 'cash-down-explanation').note;
const controllerResult = {
  status: 'answered', answer,
  sourceIds: ['cash-down-explanation', 'receipt-delay', 'planned-receipts', 'planned-closing-cash'],
};
let requests = 0;
const client = {
  responses: {
    async create(params) {
      requests += 1;
      if (params.text?.format?.name === 'controller_answer') {
        console.log('AI Controller: checked the sample data and reconciled the cash movements.');
        return { status: 'completed', output_text: JSON.stringify(controllerResult) };
      }
      if (params.tool_choice?.name === 'consult_controller') {
        return { status: 'completed', output: [{
          type: 'function_call', call_id: 'offline-consultation', name: 'consult_controller',
          arguments: JSON.stringify({ question: 'Why is cash down this month?' }),
        }] };
      }
      const output = params.input.findLast((item) => item.type === 'function_call_output');
      if (!output) throw new Error('The demo did not receive a Controller result.');
      const text = JSON.parse(output.output).answer;
      return { status: 'completed', output_text: text, output: [{ type: 'message', role: 'assistant', content: [{ type: 'output_text', text }] }] };
    },
  },
};

console.log('OFFLINE SIMULATION: scripted model responses; no audio, API requests, or phone calls.\n');
console.log('CFO: Why is cash down this month?');
console.log(`Assistant: ${PROMPTS.hold}`);
const controller = createController({ client, financials });
const agent = createAgent({ client, controller });
const result = await agent.respond({ question: 'Why is cash down this month?' });
console.log(`Assistant: ${result.replyText}`);
console.log(`\nCompleted ${requests} simulated model requests: assistant tool call, Controller answer, assistant reply.`);
