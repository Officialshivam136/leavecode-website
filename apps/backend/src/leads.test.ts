import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { createApp } from './app.js';

test('Lead Management & Inquiry Suite', async (t) => {
  const app = createApp();

  // 1. Valid Inquiry submission
  await t.test('POST /api/v1/inquiries creates a valid lead and returns 201 Created', async () => {
    const validPayload = {
      fullName: 'Sarah Connor',
      businessEmail: 'sarah.connor@cyberdyne.com',
      phoneNumber: '+1 386 555 0192',
      companyOrWebsite: 'Cyberdyne Systems Corp',
      serviceOfInterest: 'web-development',
      budgetRange: '30k-50k',
      projectDescription: 'We require a decoupled Next.js web application with high security controls.',
      consentGiven: true,
    };

    const res = await request(app).post('/api/v1/inquiries').send(validPayload);

    assert.equal(res.status, 201);
    assert.equal(res.body.success, true);
    assert.ok(res.body.data.referenceId);
    assert.equal(res.body.data.fullName, 'Sarah Connor');
    assert.equal(res.body.data.serviceOfInterest, 'web-development');
  });

  // 2. Invalid inputs (Bad email, missing consent, short description)
  await t.test('POST /api/v1/inquiries rejects invalid input with 400 Bad Request', async () => {
    const invalidPayload = {
      fullName: 'S', // too short (<2)
      businessEmail: 'not-an-email',
      serviceOfInterest: 'invalid-service',
      projectDescription: 'short', // <15 chars
      consentGiven: false, // consent required
    };

    const res = await request(app).post('/api/v1/inquiries').send(invalidPayload);

    assert.equal(res.status, 400);
    assert.equal(res.body.success, false);
    assert.equal(res.body.error, 'Validation failed');
    assert.ok(res.body.details.length >= 4);
  });

  // 3. Honeypot spam trap silently handles bot submissions
  await t.test('POST /api/v1/inquiries intercepts honeypot spam bot silently', async () => {
    const botPayload = {
      fullName: 'Bot Spammer',
      businessEmail: 'bot@spamnetwork.com',
      serviceOfInterest: 'web-development',
      projectDescription: 'Buy cheap services here immediately!',
      consentGiven: true,
      honeypot: 'filled_by_bot_crawler',
    };

    const res = await request(app).post('/api/v1/inquiries').send(botPayload);

    // Returns 200 OK so bot does not retry, but does NOT create lead in real queue
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
  });

  // 4. Admin leads retrieval requires authentication
  await t.test('GET /api/v1/inquiries/admin/leads requires Bearer token (401)', async () => {
    const res = await request(app).get('/api/v1/inquiries/admin/leads');
    assert.equal(res.status, 401);
  });

  // 5. Admin can list inquiries when authenticated
  await t.test('GET /api/v1/inquiries/admin/leads succeeds with admin JWT', async () => {
    // Acquire token
    const loginRes = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'admin@leavecode.com', password: 'LeaveCode@Admin2026!' });

    const token = loginRes.body.token;

    const res = await request(app)
      .get('/api/v1/inquiries/admin/leads')
      .set('Authorization', `Bearer ${token}`);

    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.ok(res.body.count >= 1);
  });
});
