import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { createApp } from './app.js';

test('Article Lifecycle & Draft Isolation Suite', async (t) => {
  const app = createApp();

  // 1. Verify Public Listing only returns published articles (post-1 & post-2)
  await t.test('GET /api/v1/posts returns ONLY published articles', async () => {
    const res = await request(app).get('/api/v1/posts');
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.equal(res.body.count, 2);

    const hasDraft = res.body.data.some((p: any) => p.status === 'draft');
    assert.equal(hasDraft, false, 'Draft articles must NEVER appear in public listing');
  });

  // 2. Verify Draft single post returns 404 to public requests
  await t.test('GET /api/v1/posts/:slug returns 404 for draft post', async () => {
    const res = await request(app).get('/api/v1/posts/draft-securing-microservices-automated-patching');
    assert.equal(res.status, 404);
    assert.equal(res.body.success, false);
    assert.ok(res.body.error.includes('private') || res.body.error.includes('not found'));
  });

  // 3. Verify Admin login and JWT acquisition
  let adminToken = '';
  await t.test('POST /api/v1/auth/login succeeds with valid admin credentials', async () => {
    const res = await request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'admin@leavecode.com',
        password: 'LeaveCode@Admin2026!',
      });

    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.ok(res.body.token);
    adminToken = res.body.token;
  });

  // 4. Verify Unauthenticated request to Admin endpoints is blocked (401)
  await t.test('GET /api/v1/admin/posts fails without Bearer token', async () => {
    const res = await request(app).get('/api/v1/admin/posts');
    assert.equal(res.status, 401);
  });

  // 5. Verify Authenticated Admin can view all posts including drafts
  await t.test('GET /api/v1/admin/posts returns drafts when authenticated', async () => {
    const res = await request(app)
      .get('/api/v1/admin/posts')
      .set('Authorization', `Bearer ${adminToken}`);

    assert.equal(res.status, 200);
    assert.ok(res.body.count >= 3);
    const draftFound = res.body.data.some((p: any) => p.status === 'draft');
    assert.equal(draftFound, true);
  });

  // 6. Verify Admin can preview draft post
  await t.test('GET /api/v1/admin/posts/:id/preview allows viewing draft', async () => {
    const res = await request(app)
      .get('/api/v1/admin/posts/post-3/preview')
      .set('Authorization', `Bearer ${adminToken}`);

    assert.equal(res.status, 200);
    assert.equal(res.body.data.title, 'Draft Blueprint: Securing Microservices with Automated Dependency Patching');
  });

  // 7. Verify Admin publishing lifecycle (Publish draft -> Verify public access)
  await t.test('PATCH /api/v1/admin/posts/:id/publish updates status and unlocks public access', async () => {
    // Publish post-3
    const patchRes = await request(app)
      .patch('/api/v1/admin/posts/post-3/publish')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({ status: 'published' });

    assert.equal(patchRes.status, 200);
    assert.equal(patchRes.body.data.status, 'published');

    // Verify post-3 is now publicly accessible
    const publicRes = await request(app).get('/api/v1/posts/draft-securing-microservices-automated-patching');
    assert.equal(publicRes.status, 200);
    assert.equal(publicRes.body.data.status, 'published');

    // Unpublish back to draft
    const unpublishRes = await request(app)
      .patch('/api/v1/admin/posts/post-3/publish')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({ status: 'draft' });

    assert.equal(unpublishRes.status, 200);

    // Verify it is once again hidden from public (404)
    const hiddenRes = await request(app).get('/api/v1/posts/draft-securing-microservices-automated-patching');
    assert.equal(hiddenRes.status, 404);
  });
});
