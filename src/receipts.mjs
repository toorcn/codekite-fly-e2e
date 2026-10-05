import { readCustomer } from '@codekite/test-provider';

/** Customer-facing receipts must keep their name and amount during API rollout. */
export async function formatReceipt(response) {
  const customer = readCustomer(response);
  const amount = ((response.total_minor ?? response.amount_minor) / 100).toFixed(2);
  const name = customer.display_name ?? customer.full_name ??
    (customer.given_name != null && customer.family_name != null
      ? `${customer.given_name} ${customer.family_name}`
      : undefined);
  const currency = (response.currency_code ?? response.currency)?.toUpperCase();
  return `Receipt for ${name}: ${currency} ${amount}`;
}
