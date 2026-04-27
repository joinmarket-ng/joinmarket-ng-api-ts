# joinmarket-ng-api-ts

OpenAPI TypeScript types and client for [JoinMarket-NG](https://github.com/joinmarket-ng/joinmarket-ng)'s
`jmwalletd` HTTP/WebSocket API.

This package is a fork of
[`@joinmarket-webui/joinmarket-api-ts`](https://github.com/joinmarket-webui/joinmarket-api-ts).
It tracks the JoinMarket-NG OpenAPI spec instead of the joinmarket-clientserver
reference implementation - in particular, it ships the
`/api/v1/wallet/{walletname}/tumbler/*` endpoints and FastAPI-shaped error
types.

## Install

```shell
# from npm (after the maintainer has published a release)
npm install @joinmarket-ng/joinmarket-ng-api-ts

# or pin to a specific commit on GitHub
npm install joinmarket-ng/joinmarket-ng-api-ts#<commit-or-tag>
```

## Getting Started

```shell
npm install
# fetch the spec from a running jmwalletd
JM_NG_OPENAPI_URL=https://127.0.0.1:28183/openapi.json npm run openapi-ts:fetch-schema
npm run openapi-ts
npm run example
```

## OpenAPI spec

The compiled spec is shipped with the package and also published to GitHub
Pages on every push to `main`:

- JSON: <https://joinmarket-ng.github.io/joinmarket-ng-api-ts/openapi.json>
- YAML: <https://joinmarket-ng.github.io/joinmarket-ng-api-ts/openapi.yaml>
- Swagger UI: <https://joinmarket-ng.github.io/joinmarket-ng-api-ts/>

Inside the package, the spec is available via subpath exports:

```ts
import spec from '@joinmarket-ng/joinmarket-ng-api-ts/openapi.json' with { type: 'json' }
```

## License

MIT - see [LICENSE](LICENSE).

## Resources

- JoinMarket-NG: <https://github.com/joinmarket-ng/joinmarket-ng>
- Jam: <https://github.com/joinmarket-webui/jam>
- Hey API: <https://heyapi.dev/openapi-ts>
- @tanstack/react-query: <https://github.com/TanStack/query>
