#!/usr/bin/env node
// JavaScript - Easy

// TODO: Write a function that returns the sum of two numbers
// sum.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sum(a, b) {
    return a + b;
}

rl.question("Enter the first number: ", (first) => {
    rl.question("Enter the second number: ", (second) => {
        const num1 = parseFloat(first.trim());
        const num2 = parseFloat(second.trim());

        if (isNaN(num1) || isNaN(num2)) {
            console.log("❌ Please enter valid numbers.");
        } else {
            const result = sum(num1, num2);
            console.log(`✅ The sum of ${num1} and ${num2} is ${result}.`);
        }

        rl.close();
    });
});
