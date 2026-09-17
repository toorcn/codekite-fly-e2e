import test from 'node:test';
import assert from 'node:assert/strict';
import { formatReceipt } from '../src/receipts.mjs';

test('existing customer responses preserve the name and amount', async () => {
  assert.equal(await formatReceipt({ customer: { id: 'customer_1', full_name: 'Ada Lovelace' }, amount_minor: 4200, currency: 'USD' }), 'Receipt for Ada Lovelace: USD 42.00');
});

test('zero amounts and other currencies retain the existing formatting', async () => {
  assert.equal(await formatReceipt({ customer: { id: 'customer_2', full_name: 'Grace Hopper' }, amount_minor: 0, currency: 'EUR' }), 'Receipt for Grace Hopper: EUR 0.00');
});

test('rendering does not mutate the received customer', async () => {
  const input = { customer: { id: 'customer_3', full_name: 'Katherine Johnson' }, amount_minor: 1050, currency: 'USD' };
  const before = structuredClone(input);
  await formatReceipt(input);
  assert.deepEqual(input, before);
});
