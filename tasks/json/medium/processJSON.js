const fs = require('fs');

// Read the data from data.json
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading data.json:', err);
        return;
    }

    // Parse the JSON data
    const products = JSON.parse(data);

    // Filter out inactive products and apply a 10% tax
    const updatedProducts = products.filter(product => product.status === 'active');
    updatedProducts.forEach(product => {
        product.price *= 1.1; // Apply a 10% tax
    });

    // Write the updated data to updated_data.json
    fs.writeFile('updated_data.json', JSON.stringify(updatedProducts, null, 4), 'utf8', (err) => {
        if (err) {
            console.error('Error writing updated_data.json:', err);
        } else {
            console.log('Data has been updated and saved to updated_data.json.');
        }
    });
});
