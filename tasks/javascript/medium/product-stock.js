// JavaScript - Medium

  // TODO: return only products that are in stock using .filter() method;
  // Extra Challenge: return only the names of products in stock;

const products = [
    { name: "Book", inStock: true },
    { name: "Pen", inStock: false },
    { name: "Phone", inStock: true },
    { name: "Mug", inStock: false }
  ];
  // TODO output = [ { name: 'Book', inStock: true }, { name: 'Phone', inStock: true } ];
  // Challenge output = ['Book', 'Phone'];

// Return only the products that are in stock
const results = products.filter((product) => product.inStock);
console.log(results);

// Extra challenge: return only the names of the products in stock
const names = products.filter((product) => product.inStock).map((product) => product.name);
console.log(names);

