import json

# Read data from data.json
with open('data.json', 'r') as file:
    data = json.load(file)

# Apply tax on active products
updated_data = []
for obj in data:
    if obj['status'] == 'active':
        obj['price'] = int(obj['price'] *1.1)  # Applying tax
        updated_data.append(obj)

# Save updated data to updated_data.json
with open('updated_data.json', 'w') as file:
    json.dump(updated_data, file, indent=4)
