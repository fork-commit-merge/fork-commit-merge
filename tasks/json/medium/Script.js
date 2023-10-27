const fs = require('fs');

// Read the JSON data from data.json
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading data.json:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    // Filter out objects where the status is inactive
    const filteredData = jsonData.filter(product => product.status === 'active');

    // Update the price field by applying a 10% tax
    const updatedData = filteredData.map(product => {
      product.price = product.price + (product.price * 0.10); // Applying a 10% tax
      return product;
    });

    // Write the resulting array of objects to updated_data.json
    fs.writeFile('updated_data.json', JSON.stringify(updatedData, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing updated_data.json:', err);
      } else {
        console.log('updated_data.json created successfully.');
      }
    });
  } catch (error) {
    console.error('Error parsing data.json:', error);
  }
});
