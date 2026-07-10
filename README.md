# Prime Factorization App

[![CI](https://github.com/doctorlai/prime-factorization/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/doctorlai/prime-factorization/actions/workflows/ci.yaml)
[![Last Commit](https://img.shields.io/github/last-commit/doctorlai/prime-factorization)](https://github.com/doctorlai/prime-factorization/commits/main)
[![License](https://img.shields.io/github/license/doctorlai/prime-factorization)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/doctorlai/prime-factorization?style=social)](https://github.com/doctorlai/prime-factorization/stargazers)
[![Code Style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![Commits Activity](https://img.shields.io/github/commit-activity/m/doctorlai/prime-factorization)](https://github.com/doctorlai/prime-factorization/pulse)
[![GitHub Commit Activity](https://img.shields.io/github/commit-activity/y/doctorlai/prime-factorization?label=commits%2Fyear)](https://github.com/doctorlai/prime-factorization/graphs/commit-activity)
[![Watchers](https://img.shields.io/github/watchers/doctorlai/prime-factorization?style=social)](https://github.com/doctorlai/prime-factorization/watchers)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![JavaScript](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fdoctorlai%2Fprime-factorization%2Fmain%2Fbadges%2Flanguages.json)](badges/languages.json)
[![Repo Size](https://img.shields.io/github/repo-size/doctorlai/prime-factorization)](https://github.com/doctorlai/prime-factorization)
[![Top Language](https://img.shields.io/github/languages/top/doctorlai/prime-factorization)](https://github.com/doctorlai/prime-factorization)
[![GitHub Open PRs](https://img.shields.io/github/issues-pr/doctorlai/prime-factorization)](https://github.com/doctorlai/prime-factorization/pulls)
[![GitHub Open Issues](https://img.shields.io/github/issues/doctorlai/prime-factorization)](https://github.com/doctorlai/prime-factorization/issues)
[![GitHub Forks](https://img.shields.io/github/forks/doctorlai/prime-factorization?style=social)](https://github.com/doctorlai/prime-factorization/forks)
[![Node.js Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fdoctorlai%2Fprime-factorization%2Fmain%2Fpackage.json&query=%24.engines.node&label=Node.js&logo=node.js&color=339933)](package.json)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/doctorlai/prime-factorization)

A small React web app that computes the prime factorization of a positive integer and displays all primes up to 2000 for quick reference. The app runs entirely in the browser, supports a persisted dark mode preference, and is tested with Vitest.

## Live Demo

- [GitHub Pages: Prime Factorization Tool](https://doctorlai.github.io/prime-factorization/)
- [Alternative Tool: Integer Factorization to Prime Factors with API](https://helloacm.com/tools/factor/)

<img alt="Prime Factorization app screenshot" src="https://github.com/user-attachments/assets/153265a2-7331-4098-a527-f2b58bcbcbe9" />

## Features

- Prime factorization in exponent form, such as `24 => 2^3 * 3`.
- Browser-only computation with no application server request for entered numbers.
- Prime reference list up to 2000.
- Light and dark mode toggle persisted in `localStorage`.
- CI checks for formatting, linting, coverage thresholds, build, and tests.
- Pull request coverage comments generated from Vitest coverage output.

## Requirements

- Node.js 20, matching [.nvmrc](.nvmrc).
- npm 10 or newer.

## Quick Start

```bash
git clone https://github.com/doctorlai/prime-factorization.git
cd prime-factorization
nvm use
npm ci
npm run dev
```

Open [http://localhost:5173/prime-factorization/](http://localhost:5173/prime-factorization/) in your browser.

## Commands

| Command                    | Purpose                                    |
| -------------------------- | ------------------------------------------ |
| `npm run dev`              | Start the Vite development server.         |
| `npm run format`           | Check Prettier formatting.                 |
| `npm run format:fix`       | Format files with Prettier.                |
| `npm run lint`             | Run ESLint.                                |
| `npm run coverage`         | Run tests with coverage thresholds.        |
| `npm run build`            | Build the production app.                  |
| `npm run test`             | Run the Vitest suite once.                 |
| `npm run check`            | Run formatting, lint, coverage, and build. |
| `npm run ci`               | Alias for `npm run check`.                 |
| `npm run clean`            | Remove generated `dist` and `coverage`.    |
| `npm run badges:languages` | Refresh `badges/languages.json`.           |
| `npm run deploy`           | Build and publish `dist` with `gh-pages`.  |

## Coverage

Coverage is enforced by `npm run coverage` with 80% minimum thresholds for lines, statements, functions, and branches. Pull requests receive a GitHub bot coverage comment through `davelosert/vitest-coverage-report-action`, using Vitest's `coverage/coverage-summary.json` and `coverage/coverage-final.json` output.

## Project Structure

```text
src/                  React app and factorization functions
tests/                Vitest and Testing Library tests
.github/workflows/   CI and badge refresh automation
badges/               Shields endpoint JSON generated by GitHub Actions
scripts/              Maintenance scripts
```

## Documentation

- [Contributing](CONTRIBUTING.md)
- [Changelog](CHANGELOG.md)
- [Security Policy](SECURITY.md)
- [Support](SUPPORT.md)
- [Privacy](PRIVACY.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Roadmap](ROADMAP.md)
- [AI generated wiki](https://deepwiki.com/doctorlai/prime-factorization)

## Internationalization

This is not a browser extension and does not currently ship translated UI strings, so `_locales` and `lang` directories are intentionally not included. The roadmap leaves room for localization if the app grows beyond its current English-only interface.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Acknowledgments

- Built by [@justyy](https://github.com/doctorlai).
- If you found this tool useful, consider buying the maintainer a [coffee](https://buymeacoffee.com/y0btg5r).
