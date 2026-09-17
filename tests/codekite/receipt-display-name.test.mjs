import test from 'node:test';
import assert from 'node:assert/strict';
import { formatReceipt } from '../../src/receipts.mjs';

test('receipts preserve customer names and amounts across provider response shapes', async () => {
  const current = { customer: { id: 'customer_1', display_name: 'Ada Lovelace' }, amount_minor: 4200, currency: 'USD' };
  const cached = { customer: { id: 'customer_1', full_name: 'Ada Lovelace' }, amount_minor: 4200, currency: 'USD' };
  const zero = { customer: { id: 'customer_2', display_name: 'Grace Hopper' }, amount_minor: 0, currency: 'EUR' };
  const currentReceipt = await formatReceipt(current);
  const cachedReceipt = await formatReceipt(cached);
  const zeroReceipt = await formatReceipt(zero);
  assert.equal(currentReceipt, 'Receipt for Ada Lovelace: USD 42.00', 'Receipt rollout must preserve customer names and unchanged amount formatting');
  assert.equal(cachedReceipt, 'Receipt for Ada Lovelace: USD 42.00', 'Receipt rollout must preserve customer names and unchanged amount formatting');
  assert.equal(zeroReceipt, 'Receipt for Grace Hopper: EUR 0.00', 'Receipt rollout must preserve customer names and unchanged amount formatting');
});
