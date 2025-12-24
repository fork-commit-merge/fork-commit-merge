// JavaScript - Easy

// TODO: return a new array with all numbers greater than 10 but less than 20;

const array = [2, 5, 8, 10, 12, 15, 19, 20, 25];

// Filter the array to get numbers greater than 10 but less than 20
// A number must satisfy both conditions: num > 10 AND num < 20
const filteredArray = array.filter(num => num > 10 && num < 20);

// Output the result
console.log(filteredArray);
// output: [12, 15, 19];
