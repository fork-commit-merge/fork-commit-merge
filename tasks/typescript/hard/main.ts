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
  const fProducts = await fetch(
    `https://dummyjson.com/products`
  )

  products = (await fProducts.json()).products;

  console.log(products)
  displayProducts(products);
}

function displayProducts(products: Product[]) {
  const productBody = document.getElementById("productBody");

  if (!productBody) return;

  productBody.innerHTML = "";

  products.forEach((product) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${product.title}</td>
      <td>${product.price}</td>
      <td>${product.rating}</td>
    `;

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


  const filteredProducts = products.filter(product => {
    return (
      (Number.isNaN(minPrice) || product.price >= minPrice) &&
      (Number.isNaN(maxPrice) || product.price <= maxPrice) &&
      (Number.isNaN(minRating) || product.rating >= minRating) &&
      (Number.isNaN(maxRating) || product.rating <= maxRating)
    )
  })

  displayProducts(filteredProducts);
}

fetchData();

(window as any).applyFilters = applyFilters;
