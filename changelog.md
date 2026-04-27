# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v0.4.0] - 2026-04-27

### Changed
- Forked from `@joinmarket-webui/joinmarket-api-ts` and renamed to
  `@joinmarket-ng/joinmarket-api-ts`.
- Spec input regenerated from the JoinMarket-NG `jmwalletd` `/openapi.json`
  endpoint (FastAPI). Adds the new `tumblerplan` / `tumblerstart` /
  `tumblerstatus` / `tumblerstop` / `tumblerplandelete` operations and the
  `HTTPValidationError` error shape; drops the legacy `/taker/schedule`
  operations.
- `contrib/jm-ng-openapi.json` and `contrib/jm-ng-openapi.yaml` are shipped
  in the published package and re-exported via subpath exports
  (`@joinmarket-ng/joinmarket-api-ts/openapi.json`).
- New `publish-spec` workflow deploys the spec + a Swagger UI viewer to
  GitHub Pages on every push to `main`.

## [v0.3.0] - 2025-11-15 (upstream)

### Changed
- @tanstack/react-query is an optional peer dependency

## [v0.3.0] - 2025-11-15

### Changed
- @tanstack/react-query is an optional dependency

## [v0.2.0] - 2025-11-15

### Changed
- Update @hey-api/openapi-ts from v0.82.5 to v0.87.5
- Update @tanstack/react-query from v5.89.0 to v5.90.9

## [v0.1.0] - 2025-11-14

### Added
- Initial release

[Unreleased]: https://github.com/joinmarket-ng/joinmarket-api-ts/compare/v0.4.0...HEAD
[v0.4.0]: https://github.com/joinmarket-ng/joinmarket-api-ts/releases/tag/v0.4.0
[v0.3.0]: https://github.com/joinmarket-webui/joinmarket-api-ts/compare/v0.2.0...v0.3.0
[v0.2.0]: https://github.com/joinmarket-webui/joinmarket-api-ts/compare/v0.1.0...v0.2.0
[v0.1.0]: https://github.com/joinmarket-webui/joinmarket-api-ts/releases/tag/v0.1.0
