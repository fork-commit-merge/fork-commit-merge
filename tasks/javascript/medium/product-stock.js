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
// Filter products in stock
const availableProducts = products.filter(product => product.inStock);

// Print full objects
console.log(availableProducts);

// Extra Challenge: only names
const productNames = availableProducts.map(product => product.name);
console.log(productNames);
