// TypeScript - Hard

interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
}


let products: Product[] = [
    {
        "id": 1,
        "title": "Phone",
        "price": 200,
        "rating": 5
    },
    {
        "id": 2,
        "title": "Shoe",
        "price": 10,
        "rating": 4
    },
    {
        "id": 3,
        "title": "Shorts",
        "price": 25,
        "rating": 3
    },
    {
        "id": 4,
        "title": "Laptop",
        "price": 1500,
        "rating": 5
    },
    {
        "id": 5,
        "title": "Crocs",
        "price": 5,
        "rating": 2
    },
    {
        "id": 6,
        "title": "Belt",
        "price": 2.99,
        "rating": 1
    }
];


async function fetchData() {
    // TODO: Implement the fetch function

    // Addressing the compile error.
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            displayProducts(products);
            resolve();
        }, 500);
    });
}

function displayProducts(products: Product[]) {
    // TODO: Implement the display function
    const tBody: HTMLElement = document.getElementById("productBody") as HTMLElement;
    tBody.innerHTML = "";
    
    // Product for each row.
    products.forEach(product => {
        const row = document.createElement('tr');
        
        const titleCell = document.createElement('td');
        titleCell.textContent = product.title;
        
        const priceCell = document.createElement('td');
        priceCell.textContent = `$${product.price.toFixed(2)}`;
        
        const ratingCell = document.createElement('td');
        ratingCell.textContent = product.rating.toString();
        
        row.appendChild(titleCell);
        row.appendChild(priceCell);
        row.appendChild(ratingCell);
        
        tBody.appendChild(row);
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
        // TODO: Implement the filter function
        
        // Price filter
        const priceValid = 
            (isNaN(minPrice) || product.price >= minPrice) &&
            (isNaN(maxPrice) || product.price <= maxPrice);
        
        // Rating filter
        const ratingValid = 
            (isNaN(minRating) || product.rating >= minRating) &&
            (isNaN(maxRating) || product.rating <= maxRating);
        
        return priceValid && ratingValid;
    });

    displayProducts(filteredProducts);
}

fetchData();

(window as any).applyFilters = applyFilters;
