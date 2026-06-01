// JavaScript - Medium

const products = [
    { name: "Book", inStock: true },
    { name: "Pen", inStock: false },
    { name: "Phone", inStock: true },
    { name: "Mug", inStock: false }
  ];

const output = products.filter((product) => product.inStock);
const challengeOutput = output.map((product) => product.name);

console.log(output);
console.log(challengeOutput);
