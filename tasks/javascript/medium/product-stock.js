// JavaScript - Medium

// TODO: return only products that are in stock using .filter() method;
// Extra Challenge: return only the names of products in stock;

const products = [
  { name: "Book", inStock: true },
  { name: "Pen", inStock: false },
  { name: "Phone", inStock: true },
  { name: "Mug", inStock: false },
];

// Return the products that are in stock.
const inStockProducts = products.filter((product) => product.inStock);
console.log(inStockProducts);
// output = [ { name: 'Book', inStock: true }, { name: 'Phone', inStock: true } ];

// Extra Challenge: return only the names of the products that are in stock.
const inStockNames = inStockProducts.map((product) => product.name);
console.log(inStockNames);
// Challenge output = ['Book', 'Phone'];
