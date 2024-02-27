// TypeScript - Medium

namespace Calculator {
    export const add = (a: number, b: number): number => {
        return  a + b
    }

    export const subtract = (a: number, b: number): number => {
        return a - b
    }

    export const multiply = (a: number, b: number): number => {
        return a * b
    }

    export const divide = (a: number, b: number): number | null => {
        if (!a || !b) {
            console.warn('Warning: Dividing by 0 will always equal to 0.')
            return null
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
