import dotenv from 'dotenv';

dotenv.config({ path: new URL('../.env', import.meta.url), quiet: true });

function integer(env, key, fallback, min, max) {
  const value = env[key] === undefined || env[key] === '' ? fallback : Number(env[key]);
  if (!Number.isInteger(value) || value < min || value > max) {
    throw new Error(`${key} must be an integer between ${min} and ${max}.`);
  }
  return value;
}

export function loadConfig(env = process.env) {
  const rawBaseUrl = ((env.PUBLIC_BASE_URL || '').trim() || env.RENDER_EXTERNAL_URL || '').trim().replace(/\/+$/, '');
  if (rawBaseUrl) {
    const url = new URL(rawBaseUrl);
    if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash || url.username || url.password) {
      throw new Error('The public URL must be an HTTPS origin, for example https://voiceagent.onrender.com.');
    }
  }
  return {
    port: integer(env, 'PORT', 3001, 1, 65535),
    publicBaseUrl: rawBaseUrl,
    openaiApiKey: env.OPENAI_API_KEY || '',
    openaiModel: env.OPENAI_MODEL || 'gpt-5.4-mini',
    controllerModel: env.CONTROLLER_MODEL || env.OPENAI_MODEL || 'gpt-5.4-mini',
    twilioAccountSid: env.TWILIO_ACCOUNT_SID || '',
    twilioAuthToken: env.TWILIO_AUTH_TOKEN || '',
    twilioPhoneNumber: env.TWILIO_PHONE_NUMBER || '',
    cfoPhoneNumber: env.CFO_PHONE_NUMBER || '',
    elevenlabsApiKey: env.ELEVENLABS_API_KEY || '',
    elevenlabsVoiceId: env.ELEVENLABS_VOICE_ID || '',
    elevenlabsModelId: env.ELEVENLABS_MODEL_ID || 'eleven_flash_v2_5',
    turnTimeoutMs: integer(env, 'TURN_TIMEOUT_MS', 35000, 1000, 60000),
    sessionTtlMs: integer(env, 'SESSION_TTL_MS', 1800000, 60000, 7200000),
    maxCalls: integer(env, 'MAX_CONCURRENT_CALLS', 100, 1, 1000),
  };
}

export function requireConfig(config, keys) {
  const missing = keys.filter((key) => !config[key]);
  if (missing.length) throw new Error(`Missing configuration: ${missing.join(', ')}. Fill in voiceAgent/.env using .env.example.`);
}
