// Vitest - Easy

import sum from "./sum";
import { describe, expect, it } from "vitest";

describe("sum", () => {
    it("sums two numbers", () => {
        expect(sum(1, 2)).toBe(3);
    });

    it("sums all provided numbers", () => {
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it("returns 0 when called without arguments", () => {
        expect(sum()).toBe(0);
    });
});
