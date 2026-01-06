import json

with open('data.json', 'r') as file:
    data = json.load(file)

filtered_data = [product for product in data if product['status'] == 'active']

for product in filtered_data:
    product['price'] = round(product['price'] * 1.10, 2)

with open('updated_data.json', 'w') as file:
    json.dump(filtered_data, file, indent=4)

print("updated data has been written to new file")
