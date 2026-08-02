<!-- SPDX-License-Identifier: ISC -->

<p align="center">
  <img src="./playwright-config.svg" alt="playwright-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/playwright-config</h1>

<p align="center">
  Shareable Playwright configuration rules for cross-browser E2E testing and parallel execution.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/playwright-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/playwright-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/playwright-config"><img src="https://img.shields.io/npm/v/@sebastienrousseau%2Fplaywright-config?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/playwright-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/playwright-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://github.com/sebastienrousseau/playwright-config/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-blue?style=for-the-badge" alt="License" /></a>
</p>

---

## Contents

**Getting Started**
- [Installation](#installation) — Package manager commands
- [Quick Start](#quick-start) — Configure in under a minute

**Features & Rule Showcase**
- [Cross-Browser E2E Testing Settings](#cross-browser-e2e-testing-settings) — Code comparison
- [Module Compatibility](#module-compatibility) — Dual CJS/ESM & TypeScript declarations

**Governance & Quality**
- [Development & Testing](#development--testing) — Local validation
- [Security & Compliance](#security--compliance) — SLSA attestation & vulnerability policy
- [Author & License](#author--license) — Open source license

---

## Installation

Install using your preferred package manager:

```bash
# npm
npm install --save-dev @sebastienrousseau/playwright-config

# pnpm
pnpm add -D @sebastienrousseau/playwright-config

# yarn
yarn add -D @sebastienrousseau/playwright-config

# bun
bun add -d @sebastienrousseau/playwright-config
```

---

## Quick Start

### In `package.json`

```json
{
  "playwright": "@sebastienrousseau/playwright-config"
}
```

### In CommonJS Configuration

```js
module.exports = require("@sebastienrousseau/playwright-config");
```

### In ES Module Configuration

```js
import config from "@sebastienrousseau/playwright-config";
export default config;
```

---

## Cross-Browser E2E Testing Settings

Pre-configured for Chromium, Firefox, and WebKit browsers, HTML reporters, trace retention, and parallel runs.

### Before (Unstandardized)

```javascript
// Default playwright config
import { defineConfig } from '@playwright/test';
export default defineConfig({});
```

### After (@sebastienrousseau/playwright-config Enforced)

```javascript
import config from "@sebastienrousseau/playwright-config";
export default config;
```

---

## Module Compatibility

This package exports dual module entrypoints via `package.json` `exports`:

```json
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.mjs",
    "require": "./index.cjs"
  }
}
```

Full TypeScript definitions (`index.d.ts`) are included for rich IDE autocomplete and inline JSDoc tooltips.

---

## Development & Testing

```bash
# Clone repository
git clone https://github.com/sebastienrousseau/playwright-config.git
cd playwright-config

# Run validation tests
npm test
```

---

## Security & Compliance

- **SLSA Level 3 Provenance**: Builds are cryptographically signed with keyless provenance via GitHub Actions.
- **Automated Security Audit**: Monitored continuously with CodeQL and Dependabot.
- **Commit Signatures**: All commits are SSH/GPG signed.
- See [SECURITY.md](SECURITY.md) for vulnerability reporting procedures.

---

## Author & License

Developed and maintained by **[Sebastien Rousseau](https://github.com/sebastienrousseau)**.

Released under the [ISC License](LICENSE).
