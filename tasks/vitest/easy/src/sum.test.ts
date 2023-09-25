// Vitest - Easy

import sum from "./sum";
import { describe, expect, it } from "vitest";

// TODO: Create the test required in the task
describe('sum function test', () => {
    it('should return 0 when no numbers are provided', () => {
      expect(sum()).toBe(0);
    });
  });