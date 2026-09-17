# CodeKite end-to-end consumer

A private, disposable billing integration for validating the actual Fly pipeline.
It depends on the bundled v1 SDK from CodeKite Test Provider. That package reads
customer envelopes without renaming fields. The application's `formatReceipt`
function owns customer-name rendering and currency/amount formatting.

`npm ci && npm test` runs the unchanged-code baseline. The repository-owned
CodeKite workflow runs each generated compatibility probe explicitly, followed by
this existing test suite. A repair must preserve old response compatibility;
there is no prewritten fix in this repository.

The provider and this consumer live in separate private GitHub repositories.
Only an agent-created draft PR may propose the new source behavior. No auto-merge
or production provider traffic is enabled.
