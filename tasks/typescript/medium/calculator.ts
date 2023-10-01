// TypeScript - Medium
// Takes input of 2 numbers and operates on them
namespace Calculator {
    export function add(number1: number, number2: number) {
        return number1 + number2;
    }
    export function subtract(number1: number, number2: number) {
        // Notice: if subtracted by lower number, will return a negative number
        return number1 - number2;
    }
    export function multiply(number1: number, number2: number) {
        return number1 * number2;
    }
    export function divide(number1: number, number2: number) {
        if (number1 == 0 || number2 == 0) {
            console.error("Attempted to divide by 0")
            return null;
        }
        else{
            return number1 / number2;
        }
    }
}
// Test cases
console.log(Calculator.add(5, 3));       // Expected: 8
console.log(Calculator.subtract(5, 3));  // Expected: 2
console.log(Calculator.multiply(5, 3));  // Expected: 15
console.log(Calculator.divide(5, 3));    // Expected: 1.666...
console.log(Calculator.divide(5, 0));    // Expected: Warning message & null
