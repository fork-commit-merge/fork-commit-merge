"use strict";
// TypeScript - Medium
var Calculator;
(function (Calculator) {
    Calculator.add = function (firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    };
    Calculator.subtract = function (firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    };
    Calculator.multiply = function (firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    };
    Calculator.divide = function (firstNumber, secondNumber) {
        if (secondNumber === 0) {
            return 'Warning message & null';
        }
        return firstNumber / secondNumber;
    };
})(Calculator || (Calculator = {}));
// Test cases
console.log(Calculator.add(5, 3)); // Expected: 8
console.log(Calculator.subtract(5, 3)); // Expected: 2
console.log(Calculator.multiply(5, 3)); // Expected: 15
console.log(Calculator.divide(5, 3)); // Expected: 1.666...
console.log(Calculator.divide(5, 0)); // Expected: Warning message & null
