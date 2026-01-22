// Vitest - Easy

import sum from "./sum";
import { describe, expect, it } from "vitest";

describe("sum", () => {
  it("returns 0 when called with no numbers", () => {
    expect(sum()).toBe(0);
  });
});
