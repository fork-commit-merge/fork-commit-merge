// JavaScript - Medium

  // TODO: return only products that are in stock using .filter() method;
  // Extra Challenge: return only the names of products in stock;

const products = [
    { name: "Book", inStock: true },
    { name: "Pen", inStock: false },
    { name: "Phone", inStock: true },
    { name: "Mug", inStock: false }
  ];

const productsInStock = products.filter(product => product.inStock);
const productNamesInStock = productsInStock.map(product => product.name);

console.log(productsInStock);
console.log(productNamesInStock);
