// NextJS - Easy

export default function Home() {
  const sampleProducts = [
    { name: "Laptop", price: "$1200" },
    { name: "Smartphone", price: "$799" },
    { name: "Wireless Headphones", price: "$149.99" },
    { name: "Bluetooth Speaker", price: "$59.99" },
    { name: "Tablet", price: "$299.99" },
    { name: "Smartwatch", price: "$199.99" },
    { name: "Gaming Mouse", price: "$49.99" },
    { name: "Mechanical Keyboard", price: "$89.99" }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to XYZ Store!</h1>
      <p className="text-lg mb-8">
        Your one-stop shop for the best products in town.
      </p>

      <div className="w-1/2 flex flex-col space-y-4">
        {sampleProducts.map((product, index) => (
          <div
            key={index}
            className="flex justify-between p-4 border rounded shadow"
          >
            <span>{product.name}</span>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
