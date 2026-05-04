// JavaScript - Easy

// TODO: Create a function called `getEvenNumber` that filters even numbers from an array

function getEvenNumber(array) {
  return array.filter(number => number % 2 === 0);
}
console.log(getEvenNumber([1, 2, 3, 4, 5, 6])); // Expected output: [2, 4, 6]
