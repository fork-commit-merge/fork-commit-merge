// JavaScript - Easy

// TODO: Write a function that returns the sum of two numbers

function randomNum(maxNum = 100 ) {
  return Math.round(Math.random()*100) + 1
}

const num1 = randomNum()
const num2 = randomNum();

console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`)