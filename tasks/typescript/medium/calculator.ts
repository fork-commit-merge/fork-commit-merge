// TypeScript - Medium

namespace Calculator {
  // TODO: Implement a Simple TypeScript Calculator
  export function add(x: number, y: number): number { return (x + y) }
  export function subtract(x: number, y: number): number { return (x - y) }
  export function multiply(x: number, y: number): number { return (x * y) }

  export function divide(x: number, y: number): number | null {
    if (y === 0) {
      console.warn("Cannot divide by zero");
      return null;
    }

    return x / y;
  }

}

// Test cases
console.log(Calculator.add(5, 3));       // Expected: 8
console.log(Calculator.subtract(5, 3));  // Expected: 2
console.log(Calculator.multiply(5, 3));  // Expected: 15
console.log(Calculator.divide(5, 3));    // Expected: 1.666...
console.log(Calculator.divide(5, 0));    // Expected: Warning message & null
