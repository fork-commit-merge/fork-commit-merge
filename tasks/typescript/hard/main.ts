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
    const response = await fetch("https://dummyjson.com/products").then((res) =>
        res.json(),
    );
    response.products.forEach((val: any) => {
        products.push({
            id: val.id,
            title: val.title,
            price: val.price,
            rating: val.rating,
        } as Product);
    });
    console.log(products);
    displayProducts(products);
}

function displayProducts(products: Product[]) {
    // TODO: Implement the display function
    //console.log(products);
    const table = document.getElementById("productTable") as HTMLTableElement;
    const body = document.getElementById("productBody") as HTMLTableElement;

    console.log(products);

    while (body.rows.length > 0) {
        body.deleteRow(0);
    }

    for (let i = 0; i < products.length; i++) {
        const row = body!.insertRow(0);
        const titleCell = row!.insertCell(0);
        const priceCell = row!.insertCell(1);
        const ratingCell = row!.insertCell(2);
        titleCell.innerHTML = products[i].title;
        priceCell.innerHTML = products[i].price.toString();
        ratingCell.innerHTML = products[i].rating.toString();
    }
}

function applyFilters() {
    const minPrice = parseFloat(
        (document.getElementById("minPrice") as HTMLInputElement).value,
    );
    const maxPrice = parseFloat(
        (document.getElementById("maxPrice") as HTMLInputElement).value,
    );
    const minRating = parseFloat(
        (document.getElementById("minRating") as HTMLInputElement).value,
    );
    const maxRating = parseFloat(
        (document.getElementById("maxRating") as HTMLInputElement).value,
    );
    console.log(minPrice, maxPrice, minRating, maxRating);
    const filteredProducts = products.filter(
        // TODO: Implement the filter function
        (element: Product) => {
            return (
                (element.price >= minPrice || isNaN(minPrice)) &&
                (element.price <= maxPrice || isNaN(maxPrice)) &&
                (element.rating >= minRating || isNaN(minRating)) &&
                (element.rating <= maxRating || isNaN(maxRating))
            );
        },
    );

    console.log("filteredProducts:", filteredProducts);

    displayProducts(filteredProducts);
}

fetchData();

(window as any).applyFilters = applyFilters;
