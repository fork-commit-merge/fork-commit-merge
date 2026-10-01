const products = [
    {name:"Book", inStock:true},
    {name:"Pen", inStock:false},
    {name:"Phone", inStock:true},
    {name:"Mug", inStock:false}
];

const inStockProducts = products.filter(product => product.inStock === true);
console.log(inStockProducts);

const inStockNames = products.filter(product => product.inStock === true).map(product => product.name);
console.log(inStockNames);
