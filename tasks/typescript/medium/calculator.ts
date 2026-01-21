// TypeScript - Medium

namespace Calculator {
    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }

    export function divide(a: number, b: number): number | null {
        if (b === 0) {
            console.warn("Division by zero is not allowed.");
            return null;
        }
        return a / b;
    }
}

console.log(Calculator.add(5, 3));
console.log(Calculator.subtract(5, 3));
console.log(Calculator.multiply(5, 3));
console.log(Calculator.divide(5, 3));
console.log(Calculator.divide(5, 0));
