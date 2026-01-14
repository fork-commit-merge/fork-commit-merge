// TypeScript - Medium

namespace Calculator {
    // TODO: Implement a Simple TypeScript Calculator
    export function add(num1: number = 0, num2: number = 0){
        return num1 + num2
    }

    export function subtract(num1: number = 0, num2: number = 0){
        return num1 - num2
    }

    export function multiply(num1: number = 0, num2: number = 0){
        return num1 * num2
    }

    export function divide(num1: number = 0, num2: number = 0){
        if(!num2) return "Infinity! Can't divide by zero!"
        return num1 / num2
    }
}

// Test cases
console.log(Calculator.add(5, 3));       // Expected: 8
console.log(Calculator.subtract(5, 3));  // Expected: 2
console.log(Calculator.multiply(5, 3));  // Expected: 15
console.log(Calculator.divide(5, 3));    // Expected: 1.666...
console.log(Calculator.divide(5, 0));    // Expected: Warning message & null
