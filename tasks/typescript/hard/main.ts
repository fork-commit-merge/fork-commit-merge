// TypeScript - Hard

interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
}

let products: Product[] = [];
const productBody = document.getElementById('productBody') as HTMLElement


async function fetchData() {

    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(productsList => { 
        products = productsList.products
        displayProducts(products);
    });

}

function displayProducts(products: Product[]) {
    
    // Reset current value first
    productBody.innerHTML = ''

    // Fill HTML Element
    products.forEach(product => {
        productBody.innerHTML += `
        <thead>
            <tr>
                <th>${product.title}</th>
                <th>${product.price}</th>
                <th>${product.rating}</th>
            </tr>
        </thead>`
    })
}

function applyFilters() {
    const minPrice = parseFloat(
        (document.getElementById("minPrice") as HTMLInputElement).value
    );
    const maxPrice = parseFloat(
        (document.getElementById("maxPrice") as HTMLInputElement).value
    );
    const minRating = parseFloat(
        (document.getElementById("minRating") as HTMLInputElement).value
    );
    const maxRating = parseFloat(
        (document.getElementById("maxRating") as HTMLInputElement).value
    );
    
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(productsList => {
    products = productsList.products

    const filteredProducts = products.filter(product => {
        if ((minPrice && product.price < minPrice) ||
            (maxPrice && product.price > maxPrice) ||
            (minRating && product.rating < minRating) ||
            (maxRating && product.rating > maxRating)
            ) return false
        else return true

    });
    displayProducts(filteredProducts);
});

}

fetchData();

(window as any).applyFilters = applyFilters;
