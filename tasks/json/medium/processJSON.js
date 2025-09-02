import fs from "fs";

const data = JSON.parse(fs.readFileSync("data.json", "utf8"));

const products = data.filter((product) => product.status !== "inactive");

products.forEach((product) => {
  product.price = Math.round(product.price * 1.1);
});

fs.writeFileSync("updated_data.json", JSON.stringify(products, null, 4));
