const fs = require('fs');

const processJSON = () => {
    const data = fs.readFileSync('./data.json', 'utf8');
    const json = JSON.parse(data);
    const filtered = json.filter(item => item.status !== 'inactive');

    const result = filtered.map(item => {
        return {
            ...item,
            price: (item.price * 1.1)
        }
    });
    fs.writeFile('updated_data.json', JSON.stringify(result, null, 4), 'utf8', (writeErr) => {
        if (writeErr) {
            console.error('Error writing updated_data.json:', writeErr);
            return;
        }
        console.log('updated_data.json has been created successfully.');
    });
}

processJSON();