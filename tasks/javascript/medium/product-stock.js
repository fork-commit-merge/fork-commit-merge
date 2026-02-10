// JavaScript - Medium

// TODO: return only products that are in stock using .filter() method;
// Extra Challenge: return only the names of products in stock;

const products = [
  { name: "Book", inStock: true },
  { name: "Pen", inStock: false },
  { name: "Phone", inStock: true },
  { name: "Mug", inStock: false },
];

const newProducts = products.filter((item) => item.inStock == true);
const challengeOutput = [];

products.map((item) => {
  if (item.inStock) {
    challengeOutput.push(item.name);
  }
});

console.log(newProducts);
console.log(challengeOutput);
// TODO output = [ { name: 'Book', inStock: true }, { name: 'Phone', inStock: true } ];
// Challenge output = ['Book', 'Phone'];
