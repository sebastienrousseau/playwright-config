# `@sebastienrousseau/playwright-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/playwright-config`.

---

## Description

Shareable Playwright configuration preset for cross-browser end-to-end integration testing.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/playwright-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. Full Parallelism

- **Description**: Executes test scenarios in parallel across all worker processes
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. Diagnostic Artifacts

- **Description**: Captures screenshots, videos, and execution traces on failure
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Multi-Format Reporting

- **Description**: Emits HTML and list reports for CI and developer inspection
- **Scope**: Production & Development
- **Status**: Stable & Active

### 4. Configurable Timeouts

- **Description**: 30-second navigation and action timeout baseline
- **Scope**: Production & Development
- **Status**: Stable & Active

