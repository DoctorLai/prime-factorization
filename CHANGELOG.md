# Changelog

All notable changes to this project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project uses date-based versions while it does not publish package releases.

## [2026.7.10] - 2026-07-10

### Added

- Added ESLint, Vitest coverage thresholds, and a full `npm run check` command.
- Added GitHub pull request coverage reporting with Vitest coverage output.
- Added repository governance docs, Dependabot configuration, PR template, `.gitattributes`, and `.nvmrc`.
- Added a GitHub Action-backed JavaScript percentage badge data generator.
- Added focused app interaction tests for prime/composite input, invalid input, and dark mode persistence.

### Changed

- Updated package metadata from the old converter project name to Prime Factorization.
- Updated the project version to `2026.7.10`.
- Expanded README badges, setup instructions, and command documentation.

### Removed

- Removed stale YAML, crypto, Jest, and Babel dependencies/configuration that were not used by the current Vite/Vitest app.
