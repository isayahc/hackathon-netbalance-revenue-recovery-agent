import test from 'node:test';
import assert from 'node:assert/strict';
import { loadConfig } from '../src/config.js';

test('Render supplies the public webhook origin and assigned port without a local env file', () => {
  const config = loadConfig({ RENDER_EXTERNAL_URL: 'https://cfo-voice-agent.onrender.com', PORT: '10000' });
  assert.equal(config.publicBaseUrl, 'https://cfo-voice-agent.onrender.com');
  assert.equal(config.port, 10000);
});

test('an explicit custom domain takes precedence over the Render default', () => {
  const config = loadConfig({ PUBLIC_BASE_URL: ' https://voice.example.com/ ', RENDER_EXTERNAL_URL: 'https://service.onrender.com' });
  assert.equal(config.publicBaseUrl, 'https://voice.example.com');
});

test('a blank public URL still falls back to Render and local defaults remain available', () => {
  assert.equal(loadConfig({ PUBLIC_BASE_URL: ' ', RENDER_EXTERNAL_URL: 'https://service.onrender.com/' }).publicBaseUrl, 'https://service.onrender.com');
  assert.equal(loadConfig({}).publicBaseUrl, '');
  assert.equal(loadConfig({}).port, 3001);
});

test('webhook origins reject HTTP, paths, query strings, fragments and embedded credentials', () => {
  for (const url of ['http://service.onrender.com', 'https://service.onrender.com/path', 'https://service.onrender.com?x=1', 'https://service.onrender.com#x', 'https://user:password@service.onrender.com']) {
    assert.throws(() => loadConfig({ RENDER_EXTERNAL_URL: url }));
  }
});
