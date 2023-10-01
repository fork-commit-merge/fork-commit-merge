interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
}

let products: Product[] = [];

async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        products = data.products; 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    displayProducts(products); 
}

function displayProducts(products: Product[]) {

    // Clear previous rows in the table
    const tableBody = document.getElementById("productBody");
    if (tableBody) {
        tableBody.innerHTML = "";
    }

    // show the data in row
    products.forEach(product => {
        const row = `<tr>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.rating}</td>
        </tr>`;
        if (tableBody) {
            tableBody.innerHTML += row;
        }
    });
}

function applyFilters() {
    const minPrice = parseFloat((document.getElementById("minPrice") as HTMLInputElement).value) || 0;
    const maxPrice = parseFloat((document.getElementById("maxPrice") as HTMLInputElement).value) || Number.MAX_VALUE;
    const minRating = parseFloat((document.getElementById("minRating") as HTMLInputElement).value) || 0;
    const maxRating = parseFloat((document.getElementById("maxRating") as HTMLInputElement).value) || 5;

    const filteredProducts = products.filter(product =>
        product.price >= minPrice &&
        product.price <= maxPrice &&
        product.rating >= minRating &&
        product.rating <= maxRating
    );
    displayProducts(filteredProducts);
}

fetchData();
(window as any).applyFilters = applyFilters;
