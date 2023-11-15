// Vitest - Easy

import sum from "./sum.ts";
import { describe, expect, it } from "vitest";

// TODO: Create the test required in the task
describe('Testing sum function', () => {
  it('Should be able to sum numbers correctly', () => {
    let numbers = [1, 2, 3, 4, 5];
    let answer = sum(...numbers);
    expect(answer).toBe(15)
  })

  it ('Should add negative numbers', () => {
    let numbers = [-1, -2, -3, -4, -5];
    let answer = sum(...numbers);
    expect(answer).toBe(-15)
  })
})