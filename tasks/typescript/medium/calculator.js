// TypeScript - Medium
var Calculator;
(function (Calculator) {
    function add(a, b) {
        return a + b;
    }
    Calculator.add = add;
    function subtract(a, b) {
        return a - b;
    }
    Calculator.subtract = subtract;
    function multiply(a, b) {
        return a * b;
    }
    Calculator.multiply = multiply;
    function divide(a, b) {
        if (b === 0) {
            console.warn("Warning: Division by zero is not allowed!");
            return null;
        }
        return a / b;
    }
    Calculator.divide = divide;
})(Calculator || (Calculator = {}));
// Test cases
console.log(Calculator.add(5, 3)); // Expected: 8
console.log(Calculator.subtract(5, 3)); // Expected: 2
console.log(Calculator.multiply(5, 3)); // Expected: 15
console.log(Calculator.divide(5, 3)); // Expected: 1.666...
console.log(Calculator.divide(5, 0)); // Expected: Warning message & null
