const fs = require("fs");
const path = require("path");

// Read the contents of `data.json`
const dataFilePath = path.join(__dirname, "data.json");
const rawData = fs.readFileSync(dataFilePath, "utf-8");
const data = JSON.parse(rawData);

// Filter out objects with status "inactive"
const filteredActiveData = data.filter((item) => item.status === "active");

// Update the price field by applying a 10% tax
const updatedData = filteredActiveData.map((item) => ({
  name: item.name,
  price: parseFloat((item.price * 1.1).toFixed(2)), // Applying a 10% tax
  status: item.status,
}));

// Write the resulting array of objects to updated_data.json
const updatedDataFilePath = path.join(__dirname, "updated_data.json");
fs.writeFileSync(
  updatedDataFilePath,
  JSON.stringify(updatedData, null, 4),
  "utf-8"
);

// Test
console.log("Updated data has been written to updated_data.json");
