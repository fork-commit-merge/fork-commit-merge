// TypeScript - Hard

interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
}

let products: Product[] = [];

async function fetchData() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data;
    displayProducts(products);
}

function displayProducts(products: Product[]) {
    // Clear previous rows in the table
    const tableBody = document.getElementById('productBody')! as HTMLTableSectionElement;
    tableBody.innerHTML = '';
  
    // Populate the table with products
    products.forEach((product) => {
      const row = tableBody.insertRow();
      const titleCell = row.insertCell(0);
      const priceCell = row.insertCell(1);
      const ratingCell = row.insertCell(2);
  
      titleCell.textContent = product.title;
      priceCell.textContent = product.price.toString();
      ratingCell.textContent = product.rating.toString();
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

    const filteredProducts = products.filter((product) => {
        const priceInRange =
          (isNaN(minPrice) || product.price >= minPrice) &&
          (isNaN(maxPrice) || product.price <= maxPrice);
    
        const ratingInRange =
          (isNaN(minRating) || product.rating >= minRating) &&
          (isNaN(maxRating) || product.rating <= maxRating);
    
        return priceInRange && ratingInRange;
      });
    
      displayProducts(filteredProducts);
}

fetchData();

(window as any).applyFilters = applyFilters;
