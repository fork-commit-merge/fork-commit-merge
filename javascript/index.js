/**
 * Filters an array of numbers, returning only those greater than 10 and less than 20.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number[]} A new array with numbers between 10 and 20 (exclusive).
 */
function filterNumbers(arr) {
  return arr.filter(num => num > 10 && num < 20);
}

// Example usage:
const numbers = [5, 12, 18, 22, 9, 15, 20, 10];
const filtered = filterNumbers(numbers);
console.log(filtered); // Output: [12, 18, 15]

// Export for testing
module.exports = filterNumbers;