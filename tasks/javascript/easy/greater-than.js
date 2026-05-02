// JavaScript - Easy

// TODO: return a new array with all numbers greater than 10 but less than 20;
function greaterThanTenLessThanTwenty(arr) {
  return arr.filter(num => num > 10 && num < 20);
}

// Example test
const numbers = [5, 12, 25, 15, 8, 19, 30];
console.log(greaterThanTenLessThanTwenty(numbers));
const array = [2, 5, 8, 10, 12, 15, 19, 20, 25];
// output: [12, 15, 19];
