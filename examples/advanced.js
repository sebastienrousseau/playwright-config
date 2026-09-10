// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced Playwright custom reporter example
 */
const base = require("../index.cjs");
const custom = { ...base, retries: 2, workers: 4 };
console.log("Configured retry count:", custom.retries);
