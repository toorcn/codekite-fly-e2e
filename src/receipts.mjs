import { readCustomer } from '@codekite/test-provider';

/** Customer-facing receipts must keep their name and amount during API rollout. */
export async function formatReceipt(response) {
  const customer = readCustomer(response);
  const amount = (response.amount_minor / 100).toFixed(2);
  return `Receipt for ${customer.full_name}: ${response.currency_code ?? response.currency} ${amount}`;
}

