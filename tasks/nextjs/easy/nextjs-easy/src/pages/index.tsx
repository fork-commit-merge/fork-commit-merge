// NextJS - Easy

export default function Home() {
  const sampleProducts = [
    { name: "Milk", price: 2.99 },
    { name: "Bread", price: 1.99 },
    { name: "Eggs", price: 3.49 },
    { name: "Toothpaste", price: 2.49 },
    { name: "Soap", price: 1.79 },
    { name: "Coffee", price: 4.99 },
    { name: "Toilet Paper", price: 5.99 },
    { name: "Shampoo", price: 3.99 },
    { name: "Chicken Breast", price: 7.99 },
    { name: "Bananas", price: 0.99 },
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
