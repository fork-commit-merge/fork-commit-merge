// TypeScript - Hard

interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
}

let products: Product[] = [];

async function fetchData() {
    // TODO: Implement the fetch function
    displayProducts(products);
}

function displayProducts(products: Product[]) {
    // TODO: Implement the display function
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
        // TODO: Implement the filter function
    );

    displayProducts(filteredProducts);
}

fetchData();

(window as any).applyFilters = applyFilters;
