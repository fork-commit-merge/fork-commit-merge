// JavaScript - Easy

// TODO:return a new array containing all even numbers using a .filter() method:

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter the array to get only even numbers
// A number is even if it's divisible by 2 (remainder is 0)
const evenNumbers = array.filter(num => num % 2 === 0);

// Output the result
console.log(evenNumbers);
// output: [2, 4, 6, 8, 10]
