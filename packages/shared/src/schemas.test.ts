import test from 'node:test';
import assert from 'node:assert/strict';
import { InquirySchema } from './schemas.js';

test('InquirySchema validates valid submission', () => {
  const sample = {
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+1 555 123 4567',
    service: 'web-development',
    budgetRange: '15k-30k',
    message: 'We want to build a modern SaaS website in Next.js.',
    timeline: '1-month'
  };

  const result = InquirySchema.safeParse(sample);
  assert.equal(result.success, true);
});

test('InquirySchema rejects invalid email', () => {
  const sample = {
    fullName: 'Jane Doe',
    email: 'invalid-email',
    phone: '+1 555 123 4567',
    service: 'web-development',
    budgetRange: '15k-30k',
    message: 'Short message but valid length.',
    timeline: 'flexible'
  };

  const result = InquirySchema.safeParse(sample);
  assert.equal(result.success, false);
});
