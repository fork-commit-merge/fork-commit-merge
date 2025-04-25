// TypeScript - Hard

interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
}

let products: Product[] = [];

async function fetchData() {
    await fetch('https://dummyjson.com/products')
          .then(res => res.json())
          .then(data => products = data.products);

    displayProducts(products);
}

function displayProducts(products: Product[]) {
    const tbody = document.getElementById("productBody");

    if(!tbody) return;

    tbody.innerHTML = '';
    products.forEach(product => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${product.title}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.rating}</td>
        `;
        tbody.appendChild(tr);
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

    const filteredProducts = products.filter(product => {
        const priceFilter = (isNaN(minPrice) || product.price >= minPrice) &&
                        (isNaN(maxPrice) || product.price <= maxPrice);

        const ratingFilter = (isNaN(minRating) || product.rating >= minRating) &&
                         (isNaN(maxRating) || product.rating <= maxRating);

        return priceFilter && ratingFilter;
    });

    displayProducts(filteredProducts);
}

fetchData();

(window as any).applyFilters = applyFilters;
