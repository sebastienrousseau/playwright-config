/**
 * Advanced Playwright custom reporter example
 */
const base = require("../index.cjs");
const custom = { ...base, retries: 2, workers: 4 };
console.log("Configured retry count:", custom.retries);
