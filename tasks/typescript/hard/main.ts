// TypeScript - Hard

interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
}

interface ProductApiResponse {
    products: unknown[];
}

const PRODUCTS_API_URL = "https://dummyjson.com/products";

let products: Product[] = [];

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null;
}

function isProduct(value: unknown): value is Product {
    if (!isRecord(value)) {
        return false;
    }

    return (
        typeof value.id === "number" && Number.isFinite(value.id) &&
        typeof value.title === "string" &&
        typeof value.price === "number" && Number.isFinite(value.price) &&
        typeof value.rating === "number" && Number.isFinite(value.rating)
    );
}

async function fetchData(): Promise<void> {
    try {
        const response = await fetch(PRODUCTS_API_URL);

        if (!response.ok) {
            throw new Error("Product request failed with status " + response.status + ".");
        }

        const data: unknown = await response.json();

        if (!isRecord(data) || !Array.isArray(data.products)) {
            throw new Error("The product response has an unexpected format.");
        }

        const payload = data as unknown as ProductApiResponse;
        products = payload.products.filter(isProduct);
        displayProducts(products);
    } catch (error: unknown) {
        products = [];
        console.error("Failed to load products:", error);
        displayMessage("Unable to load products. Please refresh the page.");
    }
}

function displayMessage(message: string): void {
    const tableBody = document.getElementById("productBody") as HTMLTableSectionElement | null;

    if (!tableBody) {
        console.error('Unable to render products: element "productBody" was not found.');
        return;
    }

    tableBody.replaceChildren();

    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 3;
    cell.textContent = message;
    row.appendChild(cell);
    tableBody.appendChild(row);
}

function displayProducts(productsToDisplay: Product[]): void {
    const tableBody = document.getElementById("productBody") as HTMLTableSectionElement | null;

    if (!tableBody) {
        console.error('Unable to render products: element "productBody" was not found.');
        return;
    }

    tableBody.replaceChildren();

    const validProducts = Array.isArray(productsToDisplay)
        ? productsToDisplay.filter(isProduct)
        : [];

    if (validProducts.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 3;
        cell.textContent = "No products found.";
        row.appendChild(cell);
        tableBody.appendChild(row);
        return;
    }

    validProducts.forEach((product) => {
        const row = document.createElement("tr");
        const titleCell = document.createElement("td");
        const priceCell = document.createElement("td");
        const ratingCell = document.createElement("td");

        // textContent keeps API-provided titles from being interpreted as HTML.
        titleCell.textContent = product.title;
        priceCell.textContent = String(product.price);
        ratingCell.textContent = String(product.rating);

        row.appendChild(titleCell);
        row.appendChild(priceCell);
        row.appendChild(ratingCell);
        tableBody.appendChild(row);
    });
}

function getOptionalNumberInput(id: string): number | undefined {
    const input = document.getElementById(id) as HTMLInputElement | null;
    const rawValue = input?.value.trim();

    if (!rawValue) {
        return undefined;
    }

    const value = Number(rawValue);
    return Number.isFinite(value) ? value : undefined;
}

function applyFilters(): void {
    const minPrice = getOptionalNumberInput("minPrice");
    const maxPrice = getOptionalNumberInput("maxPrice");
    const minRating = getOptionalNumberInput("minRating");
    const maxRating = getOptionalNumberInput("maxRating");

    const filteredProducts = products.filter((product) => {
        const matchesMinPrice = minPrice === undefined || product.price >= minPrice;
        const matchesMaxPrice = maxPrice === undefined || product.price <= maxPrice;
        const matchesMinRating = minRating === undefined || product.rating >= minRating;
        const matchesMaxRating = maxRating === undefined || product.rating <= maxRating;

        return matchesMinPrice && matchesMaxPrice && matchesMinRating && matchesMaxRating;
    });

    displayProducts(filteredProducts);
}

if (typeof window !== "undefined") {
    (window as Window & { applyFilters: () => void }).applyFilters = applyFilters;
}

void fetchData();
