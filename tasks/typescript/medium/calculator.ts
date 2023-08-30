// TypeScript - Medium

namespace Calculator {
    // TODO: Implement a Simple TypeScript Calculator
    export const add = (n1: number, n2: number): number =>{
        return n1+n2;
    }

    export const subtract = (n1: number,n2: number): number =>{
        return n1-n2;
    }

    export const multiply = (n1: number,n2: number): number => {
        return n1 * n2;
    }

    export const divide = (n1: number, n2: number) => {
        if (n2 !== 0) {
            return n1 / n2;
        } else {
            return null;
        }
    }
}

// Test cases
console.log(Calculator.add(5, 3));       // Expected: 8
console.log(Calculator.subtract(5, 3));  // Expected: 2
console.log(Calculator.multiply(5, 3));  // Expected: 15
console.log(Calculator.divide(5, 3));    // Expected: 1.666...
console.log(Calculator.divide(5, 0));    // Expected: Warning message & null
