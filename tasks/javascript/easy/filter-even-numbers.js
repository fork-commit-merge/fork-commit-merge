// JavaScript - Easy

// TODO: Create a function called `getEvenNumber` that filters even numbers from an array

function getEvenNumber(inputArray) {
    return inputArray.filter((num) => !(num % 2))
}

console.log(getEvenNumber([1, 2, 3, 4, 5, 6])); // Expected output: [2, 4, 6]
