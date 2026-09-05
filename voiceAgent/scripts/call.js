import twilio from 'twilio';
import { loadConfig, requireConfig } from '../src/config.js';

async function main() {
  const config = loadConfig();
  requireConfig(config, ['twilioAccountSid', 'twilioAuthToken', 'twilioPhoneNumber', 'publicBaseUrl']);
  const to = process.argv[2] || config.cfoPhoneNumber;
  if (!/^\+[1-9]\d{7,14}$/.test(to)) throw new Error('Provide a destination in E.164 format: npm run call -- +15551234567');
  const client = twilio(config.twilioAccountSid, config.twilioAuthToken);
  const call = await client.calls.create({
    to, from: config.twilioPhoneNumber,
    url: `${config.publicBaseUrl}/voice/incoming`, method: 'POST',
    statusCallback: `${config.publicBaseUrl}/voice/status`, statusCallbackMethod: 'POST',
    statusCallbackEvent: ['completed'],
    machineDetection: 'DetectMessageEnd',
  });
  console.log(`Call started: ${call.sid}`);
}

main().catch((error) => { console.error('Could not place call:', error.message); process.exitCode = 1; });
