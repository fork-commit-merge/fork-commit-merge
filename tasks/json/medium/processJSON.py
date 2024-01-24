import json

# Read data from data.json
with open('data.json', 'r') as file:
    data = json.load(file)

# Filter out objects with status "inactive" and apply a 10% tax to the price
updated_data = []
for item in data:
    if item.get('status') == 'active':
        # Update the price by applying a 10% tax
        item['price'] = round(item.get('price', 0) * 1.10, 2)
        updated_data.append(item)

# Write the updated data to updated_data.json
with open('updated_data.json', 'w') as file:
    json.dump(updated_data, file, indent=2)

print("Updated data has been written to updated_data.json.")
