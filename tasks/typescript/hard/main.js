// TypeScript - Hard
let products = [];
async function fetchData() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Map the API response into our Product[] shape
        products = data.products.map((p) => ({
            id: p.id,
            title: p.title,
            price: p.price,
            rating: p.rating,
        }));
        // Display all products initially
        displayProducts(products);
    }
    catch (error) {
        console.error("Error fetching products:", error);
        // Optional: show a simple message in the table if something goes wrong
        const table = document.getElementById("productTable");
        if (table) {
            let tbody = table.tBodies[0] || table.createTBody();
            tbody.innerHTML = "";
            const row = tbody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 3;
            cell.textContent = "Failed to load products.";
        }
    }
}
function displayProducts(products) {
    const table = document.getElementById("productTable");
    if (!table) {
        console.error('Table with id "productTable" not found.');
        return;
    }
    // Use existing <tbody> if present, otherwise create one
    let tbody = table.tBodies[0];
    if (!tbody) {
        tbody = table.createTBody();
    }
    // Clear previous rows
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    // Populate the table
    products.forEach((product) => {
        const row = tbody.insertRow();
        const titleCell = row.insertCell();
        const priceCell = row.insertCell();
        const ratingCell = row.insertCell();
        titleCell.textContent = product.title;
        // Format price as 2 decimal places
        priceCell.textContent = product.price.toFixed(2);
        // Format rating as 1 decimal place
        ratingCell.textContent = product.rating.toFixed(1);
    });
}
function applyFilters() {
    const minPrice = parseFloat(document.getElementById("minPrice").value);
    const maxPrice = parseFloat(document.getElementById("maxPrice").value);
    const minRating = parseFloat(document.getElementById("minRating").value);
    const maxRating = parseFloat(document.getElementById("maxRating").value);
    const filteredProducts = products.filter((product) => {
        const meetsMinPrice = isNaN(minPrice) || product.price >= minPrice;
        const meetsMaxPrice = isNaN(maxPrice) || product.price <= maxPrice;
        const meetsMinRating = isNaN(minRating) || product.rating >= minRating;
        const meetsMaxRating = isNaN(maxRating) || product.rating <= maxRating;
        return meetsMinPrice && meetsMaxPrice && meetsMinRating && meetsMaxRating;
    });
    displayProducts(filteredProducts);
}
// Initial fetch when the script loads
fetchData();
// Expose applyFilters so products.html can call it (e.g., onclick="applyFilters()")
window.applyFilters = applyFilters;
