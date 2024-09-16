// TypeScript - Medium

namespace Calculator {
	export function add(n1: number, n2: number): number {
		return n1 + n2;
	}

	export function subtract(n1: number, n2: number): number {
		return n1 - n2;
	}

	export function multiply(n1: number, n2: number): number {
		return n1 * n2;
	}

	export function divide(n1: number, n2: number): number | null {
		if (n2 === 0) {
			console.warn("n2 parameter cannot be 0");
			return null;
		}
		return n1 / n2;
	}
}

// Test cases
console.log(Calculator.add(5, 3));       // Expected: 8
console.log(Calculator.subtract(5, 3));  // Expected: 2
console.log(Calculator.multiply(5, 3));  // Expected: 15
console.log(Calculator.divide(5, 3));    // Expected: 1.666...
console.log(Calculator.divide(5, 0));    // Expected: Warning message & null
