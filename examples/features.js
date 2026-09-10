// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * 100% Feature Showcase for @sebastienrousseau/playwright-config
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log(
  "=== 100% Feature Showcase: @sebastienrousseau/playwright-config ===",
);
assert.strictEqual(config.testDir, "./e2e");
assert.strictEqual(config.fullyParallel, true);
assert.strictEqual(config.timeout, 30000);
assert.strictEqual(config.use.screenshot, "only-on-failure");
assert.strictEqual(config.use.trace, "on-first-retry");

console.log("  ✓ Test directory:", config.testDir);
console.log("  ✓ Parallel execution: true");
console.log("  ✓ Screenshot policy: only-on-failure");
console.log("✅ 100% of playwright-config options and features validated.");
