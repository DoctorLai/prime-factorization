# Contributing

Thanks for considering a contribution to Prime Factorization.

## Development Setup

1. Use Node.js 20, or run `nvm use` from the repository root.
2. Install dependencies with `npm ci`.
3. Start the app with `npm run dev`.
4. Run `npm run check` before opening a pull request.

## Useful Commands

| Command                    | Purpose                                       |
| -------------------------- | --------------------------------------------- |
| `npm run dev`              | Start the Vite development server.            |
| `npm run format`           | Check Prettier formatting.                    |
| `npm run format:fix`       | Format files with Prettier.                   |
| `npm run lint`             | Run ESLint.                                   |
| `npm run coverage`         | Run tests with coverage thresholds.           |
| `npm run build`            | Build the production app.                     |
| `npm run test`             | Run the Vitest suite once.                    |
| `npm run check`            | Run formatting, lint, coverage, build, test.  |
| `npm run badges:languages` | Refresh the JavaScript percentage badge data. |

## Pull Requests

- Keep changes focused and easy to review.
- Add or update tests for changed behavior.
- Update README or docs when commands, setup, security posture, or user-facing behavior changes.
- Prefer clear commit messages that describe the user-visible or maintainer-visible change.

## Code Style

This repo uses Prettier and ESLint. Run `npm run format:fix` for mechanical formatting and `npm run lint` for lint feedback.
