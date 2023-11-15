// Vitest - Easy

import sum from "./sum";
import { describe, expect, it } from "vitest";

// TODO: Create the test required in the task
describe('Sum Function', () => {
  it('Should add an array of numbers correctly', () => {
    const numbers: number[] = [3, 4, 2];
    const result = sum(...numbers);
    expect(result).toBe(9);
  });

  it('Should handle negative numbers correctly', () => {
    const numbers: number[] = [-2, 5, -1];
    const result = sum(...numbers);
    expect(result).toBe(2);
  });

  it('Should return 0 for an empty array', () => {
    const numbers: number[] = [];
    const result = sum(...numbers);
    expect(result).toBe(0);
  });

  it('Should return 0 when no numbers are provided', () => {
    const result = sum();
    expect(result).toBe(0);
  });
});
