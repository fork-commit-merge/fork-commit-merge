import json


def main():
    with open("data.json", "r") as f:
        data = json.loads(f.read())

    products = [product for product in data if product["status"] != "inactive"]

    for product in products:
        product["price"] = int(product["price"] * 1.1)

    with open("updated_data.json", "w") as f:
        f.write(json.dumps(products, indent=4))


if __name__ == "__main__":
    main()
