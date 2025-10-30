// JavaScript - Easy

// Function that returns the sum of two numbers
function sum(a, b) {
    return a + b;
}

// Example usage and testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = sum;
} else {
    // Browser environment - test the function
    console.log("Testing sum function:");
    console.log("sum(2, 3) =", sum(2, 3)); // Expected: 5
    console.log("sum(-1, 1) =", sum(-1, 1)); // Expected: 0
    console.log("sum(0, 0) =", sum(0, 0)); // Expected: 0
    console.log("sum(10.5, 5.5) =", sum(10.5, 5.5)); // Expected: 16
}
