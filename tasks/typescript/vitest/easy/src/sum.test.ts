// Vitest - Easy

import sum from "./sum";
import { describe, expect, it } from "vitest";

// Test to ensure sum() returns 0 with no numbers
describe("sum", () => {
  it("should return 0 when called with no arguments", () => {
    expect(sum()).toBe(0);
  });
});
