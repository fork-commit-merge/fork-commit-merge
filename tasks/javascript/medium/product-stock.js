

const products = [
  { name: "Book", inStock: true },
  { name: "Pen", inStock: false },
  { name: "Phone", inStock: true },
  { name: "Mug", inStock: false }
];


const productsFilter = (products) => {
  return (
    products.filter(product => product.inStock === true)
  )
};

console.log(productsFilter(products));
