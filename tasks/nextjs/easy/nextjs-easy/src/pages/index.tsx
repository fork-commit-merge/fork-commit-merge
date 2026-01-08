export default function Home() {
  const sampleProducts = [
    { name: "Chocolate Croissant", price: "$3.50" },
    { name: "Blueberry Muffin", price: "$2.75" },
    { name: "Sourdough Bread", price: "$4.00" }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to XYZ Bakery!</h1>
      <p className="text-lg mb-8">
        Your one-stop shop for the freshest and most delicious baked goods.
      </p>

      <div className="w-1/2 flex flex-col space-y-4">
        {sampleProducts.map((product, index) => (
          <div key={index} className="flex justify-between p-4 border rounded shadow">
            <span>{product.name}</span>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
