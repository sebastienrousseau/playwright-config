// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

"use strict";

const assert = require("node:assert/strict");
const path = require("node:path");
const { describe, it } = require("node:test");

const CONFIG = path.join(__dirname, "..", "playwright.config.js");

// playwright.config.js reads process.env.CI at require time and branches on it
// three ways. A CI runner only ever sees the truthy side, so without this the
// local behaviour ships untested — and the coverage gate reports it honestly
// as a third of the branches taken.
const loadWith = (ci) => {
  const previous = process.env.CI;
  if (ci === undefined) {
    delete process.env.CI;
  } else {
    process.env.CI = ci;
  }
  delete require.cache[require.resolve(CONFIG)];
  try {
    return require(CONFIG);
  } finally {
    if (previous === undefined) {
      delete process.env.CI;
    } else {
      process.env.CI = previous;
    }
    delete require.cache[require.resolve(CONFIG)];
  }
};

describe("@sebastienrousseau/playwright-config environment behaviour", () => {
  it("forbids .only, retries, and serialises workers under CI", () => {
    const config = loadWith("1");
    assert.equal(config.forbidOnly, true, "a stray .only must fail the CI run");
    assert.equal(config.retries, 2, "flaky specs get two retries in CI");
    assert.equal(
      config.workers,
      1,
      "CI runners serialise to stay within their core budget",
    );
  });

  it("stays permissive and parallel off CI", () => {
    const config = loadWith(undefined);
    assert.equal(
      config.forbidOnly,
      false,
      "focusing a spec locally is how you debug one",
    );
    assert.equal(
      config.retries,
      0,
      "a local failure should be seen, not retried away",
    );
    assert.equal(
      config.workers,
      undefined,
      "let Playwright pick the worker count locally",
    );
  });

  it("treats an empty CI variable as not being CI", () => {
    const config = loadWith("");
    assert.equal(
      config.forbidOnly,
      false,
      "CI= is not the same as being on CI",
    );
    assert.equal(config.retries, 0);
  });
});
