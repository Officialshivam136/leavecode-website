import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { createApp } from './app.js';

test('GET /api/v1/health returns 200 OK and status JSON', async () => {
  const app = createApp();
  const response = await request(app).get('/api/v1/health');

  assert.equal(response.status, 200);
  assert.equal(response.body.status, 'ok');
  assert.equal(response.body.service, 'LeaveCode API Server');
  assert.ok(response.body.timestamp);
});

test('POST /api/v1/inquiries validates body with Zod and catches invalid payload', async () => {
  const app = createApp();
  const response = await request(app)
    .post('/api/v1/inquiries')
    .send({
      fullName: 'John',
      email: 'bad-email'
    });

  assert.equal(response.status, 400);
  assert.equal(response.body.success, false);
  assert.equal(response.body.error, 'Validation failed');
});
