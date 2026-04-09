// TypeScript - Hard

interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
}

let products: Product[] = [];

async function fetchData(): Promise<void> {
    // TODO: Implement the fetch function
    try{
    const response = await fetch('https://dummyjson.com/products')
        if (!response.ok) {
           throw new Error('response error');
        } 

        const data = await response.json();
        products = data.products;

        displayProducts(products);

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function displayProducts(products: Product[]) {
    // TODO: Implement the display function
    const productBody = document.getElementById('productBody') as HTMLTableSectionElement;

    productBody.innerHTML='';
     products.forEach(product => {
        // create a row
        const row = document.createElement('tr');
        
        // input data 
        row.innerHTML = `
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.rating}</td>
        `;
        
        // add a row
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
        // TODO: Implement the filter function
        product => {
        const matchPrice =
            (isNaN(minPrice) || product.price >= minPrice) &&
            (isNaN(maxPrice) || product.price <= maxPrice);

        const matchRating =
            (isNaN(minRating) || product.rating >= minRating) &&
            (isNaN(maxRating) || product.rating <= maxRating);

        return matchPrice && matchRating;
    });

    displayProducts(filteredProducts);
}

fetchData();

(window as any).applyFilters = applyFilters;
