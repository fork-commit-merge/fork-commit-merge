// JavaScript - Easy

// TODO: return a new array with all numbers greater than 10 but less than 20;

const array = [2, 5, 8, 10, 12, 15, 19, 20, 25];
// output: [12, 15, 19];

// Return a new array with the numbers greater than 10 but less than 20.
const between10And20 = array.filter((n) => n > 10 && n < 20);
console.log(between10And20);
// output: [ 12, 15, 19 ];
