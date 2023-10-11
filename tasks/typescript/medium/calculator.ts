// TypeScript - Medium

namespace Calculator {
    // TODO: Implement a Simple TypeScript Calculator
    export function add(a: number, b: number): number {
        return a + b
    }
    export function subtract(a: number, b: number): number {
        return a - b
    }
    export function multiply(a: number, b: number): number {
        return a * b
    }
    export function divide(a: number, b: number): number | string {
        if (b == 0) {
            return "Warning: division by zero"
        }
        return a / b
    }
}

// Test cases
console.log(Calculator.add(5, 3));       // Expected: 8
console.log(Calculator.subtract(5, 3));  // Expected: 2
console.log(Calculator.multiply(5, 3));  // Expected: 15
console.log(Calculator.divide(5, 3));    // Expected: 1.666...
console.log(Calculator.divide(5, 0));    // Expected: Warning message & null
