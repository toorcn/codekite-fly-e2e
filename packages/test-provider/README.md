# CodeKite Test Provider

This is a deliberately controlled provider, not Stripe, Notion, or Meta. Its
GitHub releases announce contract changes used to test the real CodeKite
subscription, assessment, CI, repair, and draft-PR workflow.

The `@codekite/test-provider` package contains `readCustomer(response)`. It
returns the customer object exactly as received; it does not normalize fields.
An installed SDK version can therefore receive a changed provider response.

The initial response is:

```json
{"customer":{"id":"customer_1","full_name":"Ada Lovelace"},"amount_minor":4200,"currency":"USD"}
```

The consumer needs to preserve the customer name in receipts. Existing responses
remain possible during migration, so a repair must accept both the old and new
shape. SDK source must remain unchanged for the consumer compatibility test.

Package tarballs are attached to private GitHub releases. This package is not
published to the public npm registry and contains no production customer data.
