import json

with open('data.json', 'r') as file:
    data = json.load(file)

filtered_data = [item for item in data if item['status'] == 'active']

for item in filtered_data:
    item['price'] *= 1.1

with open('updated_data.json', 'w') as output_file:
    json.dump(filtered_data, output_file, indent=2)

print("Task completed successfully.")
