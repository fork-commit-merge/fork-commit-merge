// TypeScript - Hard

interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
}

let products: Product[] = [];

async function fetchData() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        products = data.products.map((p: any) => ({
            id: p.id,
            title: p.title,
            price: p.price,
            rating: p.rating
        }));

        displayProducts(products);
    } catch (error) {
        console.error(error);
    }
}

function displayProducts(products: Product[]) {
    const table = document.getElementById("productTable") as HTMLTableElement;

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    products.forEach(product => {
        const row = table.insertRow();
        row.insertCell().textContent = product.id.toString();
        row.insertCell().textContent = product.title;
        row.insertCell().textContent = product.price.toString();
        row.insertCell().textContent = product.rating.toString();
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

    const filteredProducts = products.filter(product =>
        (isNaN(minPrice) || product.price >= minPrice) &&
        (isNaN(maxPrice) || product.price <= maxPrice) &&
        (isNaN(minRating) || product.rating >= minRating) &&
        (isNaN(maxRating) || product.rating <= maxRating)
    );

    displayProducts(filteredProducts);
}

fetchData();

(window as any).applyFilters = applyFilters;
