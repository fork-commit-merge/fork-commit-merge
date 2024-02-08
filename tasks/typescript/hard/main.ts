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
    let response = await fetch("http://localhost:8080/exampleAPI");
    if (response.status === 200) {
      let products = await response.json();
      displayProducts(products);
    } else {
      console.warn("Something went wrong");
    }
  } catch (e) {
    console.error(e);
  }
}

function displayProducts(products: Product[]) {
  // TODO: Implement the display function
  let productList = document.getElementById("displayProducts");
  if (!productList) return;
  productList.innerHTML = "";
  products.forEach((product) => {
    const item = document.createElement("div");
    item.innerHTML = `
 <div key = ${product.id}> 
<h3>${product.title}</h3>
<h4>${product.price}</h4>
<h4>${product.rating}</h4>
            </div>
            `;
    if (productList) {
      productList.appendChild(item);
    }
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
    return (
      product.price >= minPrice &&
      product.price <= maxPrice &&
      product.rating >= minRating &&
      product.rating <= maxRating
    );
  });
  // TODO: Implement the filter function

  displayProducts(filteredProducts);
}

fetchData();

(window as any).applyFilters = applyFilters;
