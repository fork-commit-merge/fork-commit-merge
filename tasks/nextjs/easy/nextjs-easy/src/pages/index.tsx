// src/pages/index.tsx

export default function Home() {
  const sampleProducts = [
    { name: "Laptop", price: "$1200" },
    { name: "Headphones", price: "$200" },
    { name: "Smartphone", price: "$800" },
    { name: "Smartwatch", price: "$250" }, // new product
    { name: "Camera", price: "$600" },     // new product
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to XYZ Store!</h1>
      <p className="text-lg mb-8 text-gray-700">
        Your one-stop shop for the best products in town.
      </p>

      <div className="w-full cursor-pointer max-w-xl flex flex-col space-y-4">
        {sampleProducts.map((product, index) => (
          <div
            key={index}
            className="flex justify-between p-5 border rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <span className="font-medium text-gray-800">{product.name}</span>
            <span className="font-semibold text-blue-600">{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}