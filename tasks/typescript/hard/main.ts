// TypeScript - Hard

interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
}

let products: Product[] = [];

async function fetchData() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    products = data.products;
    displayProducts(products);
}

function displayProducts(products: Product[]) {
    const productBody = document.getElementById(
        "productBody"
    ) as HTMLTableSectionElement;

    productBody.innerHTML = "";

    products.forEach((product) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.rating}</td>
        `;

        productBody.appendChild(row);
    });
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

    const filteredProducts = products.filter(
        (product) =>
            (isNaN(minPrice) || product.price >= minPrice) &&
            (isNaN(maxPrice) || product.price <= maxPrice) &&
            (isNaN(minRating) || product.rating >= minRating) &&
            (isNaN(maxRating) || product.rating <= maxRating)
    );

    displayProducts(filteredProducts);
}

fetchData();

(window as any).applyFilters = applyFilters;