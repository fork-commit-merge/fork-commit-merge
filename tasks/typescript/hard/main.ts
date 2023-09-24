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
  try {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    products = data.products;
    displayProducts(products);
  } catch (error) {
    console.error(error);
  }
}

function displayProducts(products: Product[]) {
  // TODO: Implement the display function
  const productBody = document.getElementById('productBody');

  if (productBody) {
    productBody.textContent = '';
  }

  products.forEach((product) => {
    const productEl = document.createElement('tr');

    const titleEl = document.createElement('td');
    titleEl.textContent = product.title;

    const priceEl = document.createElement('td');
    priceEl.textContent = `${product.price}`;

    const ratingEl = document.createElement('td');
    ratingEl.textContent = `${product.rating}`;

    productEl.appendChild(titleEl);
    productEl.appendChild(priceEl);
    productEl.appendChild(ratingEl);

    productBody?.appendChild(productEl);
  });
}

function applyFilters() {
  const minPrice = parseFloat(
    (document.getElementById('minPrice') as HTMLInputElement).value,
  );
  const maxPrice = parseFloat(
    (document.getElementById('maxPrice') as HTMLInputElement).value,
  );
  const minRating = parseFloat(
    (document.getElementById('minRating') as HTMLInputElement).value,
  );
  const maxRating = parseFloat(
    (document.getElementById('maxRating') as HTMLInputElement).value,
  );

  const filteredProducts = products.filter(
    // TODO: Implement the filter function
    (product) => {
      const filteredProductsByPrice =
        (isNaN(minPrice) || product.price >= minPrice) &&
        (isNaN(maxPrice) || product.price <= maxPrice);
      const filteredProductsByRating =
        (isNaN(minRating) || product.rating >= minRating) &&
        (isNaN(maxRating) || product.rating <= maxRating);

      return filteredProductsByPrice && filteredProductsByRating;
    },
  );

  displayProducts(filteredProducts);
}

fetchData();

(window as any).applyFilters = applyFilters;
