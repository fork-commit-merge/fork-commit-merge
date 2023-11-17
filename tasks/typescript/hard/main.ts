// TypeScript - Hard

interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
}

let products: Product[] = [];
let filteredProducts: Product[] = [];

async function fetchData() {
    const response = await fetch('https://dummyjson.com/products', {
        method: 'GET',
    });

    await response.json().then((data) => {
        products = data.products;
    });
    displayProducts(products);
}

function displayProducts(productArray: Product[]) {
    const productBody = document.getElementById('productBody') as HTMLElement;
    productBody.innerHTML = '';
    productArray.forEach((product) => {
        productBody.innerHTML += `
    <tr>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>${product.rating}</td>
    </tr>
    `;
    });
}

async function applyFilters() {
    await fetchData();

    const minPrice = parseFloat(
        (document.getElementById('minPrice') as HTMLInputElement).value,
    );
    const maxPrice = parseFloat(
        (document.getElementById('maxPrice') as HTMLInputElement).value,
    );
    const minRating = parseFloat(
        (document.getElementById('minRating') as HTMLInputElement).value,
    );
    const maxRating = parseFloat(
        (document.getElementById('maxRating') as HTMLInputElement).value,
    );

    filteredProducts = products.filter((product) => {
        return !(
            (minPrice && product.price < minPrice) ||
            (maxPrice && product.price > maxPrice) ||
            (minRating && product.rating < minRating) ||
            (maxRating && product.rating > maxRating)
        );
    });

    displayProducts(filteredProducts);
}

fetchData();

(window as Window & typeof globalThis).applyFilters = applyFilters;
