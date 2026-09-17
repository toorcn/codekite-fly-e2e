/** Decode the provider envelope without renaming customer fields. */
export function readCustomer(response) {
  if (!response || !response.customer || typeof response.customer !== 'object') {
    throw new TypeError('A customer response is required');
  }
  return response.customer;
}
