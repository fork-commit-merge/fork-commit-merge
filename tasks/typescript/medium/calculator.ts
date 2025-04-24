// TypeScript - Medium

namespace Calculator {
    export function add(...nums: number[]) : number {
        return nums.reduce((sum, n) => sum + n, 0);
    }

    export function subtract(...nums: number[]) : number {
        if (nums.length === 0) return 0;
        return nums.slice(1).reduce((diff, n) => diff - n, nums[0]);
    }

    export function multiply(...nums: number[]) : number {
        if (nums.length === 0) return 1;
        return nums.reduce((product, n) => product * n, 1);
    }

    export function divide(...nums: number[]) : number | null {
        if (nums.length === 0) return null;
        return nums.slice(1).reduce((quotient, n) => {
            if (n === 0) {
                console.warn("Division by zero is not allowed.");
            }
            return quotient / n;
        }, nums[0]);
    }
}

// Test cases
console.log(Calculator.add(5, 3));       // Expected: 8
console.log(Calculator.subtract(5, 3));  // Expected: 2
console.log(Calculator.multiply());  // Expected: 15
console.log(Calculator.divide(5, 3));    // Expected: 1.666...
console.log(Calculator.divide(5, 0));    // Expected: Warning message & null
