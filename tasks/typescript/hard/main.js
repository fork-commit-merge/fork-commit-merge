// TypeScript - Hard
let products = [];
async function fetchData() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    products = data.products;
    displayProducts(products);
}
function displayProducts(products) {
    const tableBody = document.getElementById("productBody");
    tableBody.innerHTML = "";
    products.forEach(product => {
        const row = document.createElement("tr");
        const titleCell = document.createElement("td");
        titleCell.textContent = product.title;
        row.appendChild(titleCell);
        const priceCell = document.createElement("td");
        priceCell.textContent = product.price.toString();
        row.appendChild(priceCell);
        const ratingCell = document.createElement("td");
        ratingCell.textContent = product.rating.toString();
        row.appendChild(ratingCell);
        tableBody.appendChild(row);
    });
}
function applyFilters() {
    const minPrice = parseFloat(document.getElementById("minPrice").value);
    const maxPrice = parseFloat(document.getElementById("maxPrice").value);
    const minRating = parseFloat(document.getElementById("minRating").value);
    const maxRating = parseFloat(document.getElementById("maxRating").value);
    const filteredProducts = products.filter(product => {
        return (minPrice ? product.price >= minPrice : true) &&
            (maxPrice ? product.price <= maxPrice : true) &&
            (minRating ? product.rating >= minRating : true) &&
            (maxRating ? product.rating <= maxRating : true);
    });
    displayProducts(filteredProducts);
}
fetchData();
window.applyFilters = applyFilters;
