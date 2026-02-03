// JavaScript - Medium

// TODO: return only products that are in stock using .filter() method;
// Extra Challenge: return only the names of products in stock;

const products = [
    {name: "Book", inStock: true},
    {name: "Pen", inStock: false},
    {name: "Phone", inStock: true},
    {name: "Mug", inStock: false}
];
// TODO output = [ { name: 'Book', inStock: true }, { name: 'Phone', inStock: true } ];
// Challenge output = ['Book', 'Phone'];


function productsNameWithStock() {

   return products
        .filter(product => product.inStock)
        .map(product => product.name);


}

console.log(productsNameWithStock());

// inStockProducts = products.filter(product => product.inStock)
// console.log(inStockProducts)
//
// nombre = []
// inStockProducts.forEach(product => {
//     nombre.push(product.name)
// })
//
// console.log(nombre)
