// Vitest - Easy

//! Don't modify this file

export default function sum(...numbers: number[]) {
    return numbers.reduce((total, number) => total + number, 0);
}

let result = sum(1, 2, 3, 4, 5);  // result will be 15
console.log(result)