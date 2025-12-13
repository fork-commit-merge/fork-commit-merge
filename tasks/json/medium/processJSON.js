const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const updatedData = data
  .filter(item => item.status === "active")
  .map(item => ({
    ...item,
    price: item.price * 1.1
  }));

fs.writeFileSync("updated_data.json",
  JSON.stringify(updatedData, null, 2)
);
console.log("Updated_data.json create successfully");
