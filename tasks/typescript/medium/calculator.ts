// TypeScript - Medium

namespace Calculator {
    export const add = (firstNumber: number, secondNumber: number): number => {
        return firstNumber + secondNumber;
    };

    export const subtract = (firstNumber: number, secondNumber: number): number => {
        return firstNumber - secondNumber;
    };

    export const multiply = (firstNumber: number, secondNumber: number): number => {
        return firstNumber * secondNumber;
    };

    export const divide = (firstNumber: number, secondNumber: number): (number | string) => {
        if (secondNumber === 0) {
            return 'Warning message & null';
        }
        return firstNumber / secondNumber;
    };
}

// Test cases
console.log(Calculator.add(5, 3));       // Expected: 8
console.log(Calculator.subtract(5, 3));  // Expected: 2
console.log(Calculator.multiply(5, 3));  // Expected: 15
console.log(Calculator.divide(5, 3));    // Expected: 1.666...
console.log(Calculator.divide(5, 0));    // Expected: Warning message & null
