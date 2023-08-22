// TypeScript - Medium

namespace Calculator {
  // Returns the sum of a and b
  export const add = (a: number, b: number): number => a + b;

  // Returns the result of a minus b
  export const subtract = (a: number, b: number): number => a - b;

  // Returns the product of a and b
  export const multiply = (a: number, b: number): number => a * b;

  // Returns the quotient of a divided by b.
  // If b is 0, it should return null and log a warning
  export const divide = (a: number, b: number): number | null => {
    if (b === 0) {
      console.warn("Warning: Cannot divide by zero");
      return null;
    }
    return a / b;
  };
}

// Test cases
console.log(Calculator.add(5, 3));       // Expected: 8
console.log(Calculator.subtract(5, 3));  // Expected: 2
console.log(Calculator.multiply(5, 3));  // Expected: 15
console.log(Calculator.divide(5, 3));    // Expected: 1.666...
console.log(Calculator.divide(5, 0));    // Expected: Warning message & null
