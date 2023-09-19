// JavaScript - Easy

// TODO: Write a function that returns the sum of two numbers

function sumOfNumbers(...numbers)
{
    return numbers.reduce((acc, e) => acc + e);
}

console.log(sumOfNumbers(1, 1))