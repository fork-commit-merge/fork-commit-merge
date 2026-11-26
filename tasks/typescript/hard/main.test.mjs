import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import { after, before, test } from "node:test";

const directory = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(directory, "main.ts");
let buildDirectory;
let compiledSource;

before(() => {
    buildDirectory = mkdtempSync(join(tmpdir(), "fcm-8476-"));
    execFileSync("tsc", [
        sourcePath,
        "--target", "ES2020",
        "--lib", "ES2020,DOM",
        "--strict",
        "--skipLibCheck",
        "--outDir", buildDirectory,
    ], { stdio: "pipe" });
    compiledSource = readFileSync(join(buildDirectory, "main.js"), "utf8");
});

after(() => {
    if (buildDirectory) {
        rmSync(buildDirectory, { recursive: true, force: true });
    }
});

class FakeElement {
    constructor(tagName) {
        this.tagName = tagName;
        this.children = [];
        this.value = "";
        this.textContent = "";
        this.colSpan = 1;
    }

    appendChild(child) {
        this.children.push(child);
        return child;
    }

    replaceChildren(...children) {
        this.children = [...children];
    }
}

function createEnvironment(fetchImplementation) {
    const tableBody = new FakeElement("tbody");
    const inputs = Object.fromEntries(
        ["minPrice", "maxPrice", "minRating", "maxRating"].map((id) => [id, new FakeElement("input")]),
    );
    const errors = [];
    const elements = { productBody: tableBody, ...inputs };
    const document = {
        getElementById(id) {
            return elements[id] ?? null;
        },
        createElement(tagName) {
            return new FakeElement(tagName);
        },
    };
    const window = {};
    const context = vm.createContext({
        document,
        window,
        fetch: fetchImplementation,
        console: { error: (...args) => errors.push(args) },
    });

    vm.runInContext(compiledSource, context, { filename: "main.js" });
    return { context, window, tableBody, inputs, errors };
}

function successfulResponse(items) {
    return {
        ok: true,
        status: 200,
        json: async () => ({ products: items }),
    };
}

function rowValues(tableBody) {
    return tableBody.children.map((row) => row.children.map((cell) => cell.textContent));
}

const sampleProducts = [
    { id: 1, title: "Budget item", price: 0, rating: 2.5 },
    { id: 2, title: "Mid-range item", price: 25, rating: 4.2 },
    { id: 3, title: "Premium item", price: 100, rating: 4.9 },
];

async function flushStartup() {
    await new Promise((resolve) => setTimeout(resolve, 0));
}

test("fetchData requests DummyJSON and renders valid product rows", async () => {
    let requestedUrl;
    const environment = createEnvironment(async (url) => {
        requestedUrl = url;
        return successfulResponse(sampleProducts);
    });
    await flushStartup();

    assert.equal(requestedUrl, "https://dummyjson.com/products");
    assert.deepEqual(rowValues(environment.tableBody), [
        ["Budget item", "0", "2.5"],
        ["Mid-range item", "25", "4.2"],
        ["Premium item", "100", "4.9"],
    ]);
});

test("fetchData skips malformed product records", async () => {
    const environment = createEnvironment(async () => successfulResponse([
        ...sampleProducts,
        { id: 4, title: "Missing rating", price: 50 },
        { id: "5", title: "Invalid id", price: 50, rating: 4 },
    ]));
    await flushStartup();

    assert.equal(environment.tableBody.children.length, 3);
});

test("fetchData renders a useful message and logs an HTTP failure", async () => {
    const environment = createEnvironment(async () => ({ ok: false, status: 503 }));
    await flushStartup();

    assert.deepEqual(rowValues(environment.tableBody), [
        ["Unable to load products. Please refresh the page."],
    ]);
    assert.equal(environment.errors.length, 1);
});

test("fetchData handles invalid response shapes and network errors", async (t) => {
    await t.test("invalid response shape", async () => {
        const environment = createEnvironment(async () => ({
            ok: true,
            status: 200,
            json: async () => ({ items: [] }),
        }));
        await flushStartup();
        assert.equal(rowValues(environment.tableBody)[0][0], "Unable to load products. Please refresh the page.");
        assert.equal(environment.errors.length, 1);
    });

    await t.test("network failure", async () => {
        const environment = createEnvironment(async () => {
            throw new Error("Network unavailable");
        });
        await flushStartup();
        assert.equal(rowValues(environment.tableBody)[0][0], "Unable to load products. Please refresh the page.");
        assert.equal(environment.errors.length, 1);
    });
});

test("applyFilters applies inclusive price and rating bounds together", async () => {
    const environment = createEnvironment(async () => successfulResponse(sampleProducts));
    await flushStartup();

    environment.inputs.minPrice.value = "0";
    environment.inputs.maxPrice.value = "25";
    environment.inputs.minRating.value = "2.5";
    environment.inputs.maxRating.value = "4.2";
    environment.window.applyFilters();

    assert.deepEqual(rowValues(environment.tableBody), [
        ["Budget item", "0", "2.5"],
        ["Mid-range item", "25", "4.2"],
    ]);
});

test("applyFilters ignores blank and invalid numeric inputs", async () => {
    const environment = createEnvironment(async () => successfulResponse(sampleProducts));
    await flushStartup();

    environment.inputs.minPrice.value = " ";
    environment.inputs.maxPrice.value = "not-a-number";
    environment.inputs.minRating.value = "";
    environment.inputs.maxRating.value = "Infinity";
    environment.window.applyFilters();

    assert.equal(environment.tableBody.children.length, 3);
});

test("applyFilters shows an empty-state row when no products match", async () => {
    const environment = createEnvironment(async () => successfulResponse(sampleProducts));
    await flushStartup();

    environment.inputs.minPrice.value = "1000";
    environment.window.applyFilters();

    assert.deepEqual(rowValues(environment.tableBody), [["No products found."]]);
    assert.equal(environment.tableBody.children[0].children[0].colSpan, 3);
});

test("displayProducts clears previous rows and renders API text safely", async () => {
    const environment = createEnvironment(async () => successfulResponse(sampleProducts));
    await flushStartup();
    environment.context.displayProducts([
        { id: 10, title: "<img src=x onerror=alert(1)>", price: 12, rating: 4 },
    ]);

    assert.deepEqual(rowValues(environment.tableBody), [["<img src=x onerror=alert(1)>", "12", "4"]]);
    assert.equal(environment.tableBody.children.length, 1);
});
