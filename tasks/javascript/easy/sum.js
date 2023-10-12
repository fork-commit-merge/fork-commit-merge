// JavaScript - Easy

// TODO: Write a function that returns the sum of two numbers

function sum(a, b) {
    console.log(`The sum of ${a} and ${b} is ${a + b}.`);
    return a + b;
}

sum(parseInt(process.argv[2]), parseInt(process.argv[3]));
