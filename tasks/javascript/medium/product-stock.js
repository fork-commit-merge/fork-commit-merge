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
const arr1 = products.filter(item=> item.inStock == true)
const arr2 = products.filter(item => item.inStock == true).map(t=>t.name)
console.log(arr1)
console.log(arr2)