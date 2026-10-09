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

  const output = products.filter((p) => p.inStock).map((p) => p.name);
  console.log(output);
