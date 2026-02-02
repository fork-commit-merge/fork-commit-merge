// JavaScript - Easy

// TODO: return a new array with all numbers greater than 10 but less than 20;

const array = [2, 5, 8, 10, 12, 15, 19, 20, 25];
// output: [12, 15, 19];
const newArray = array.filter(number => number > 10 && number < 20);
console.log(newArray);