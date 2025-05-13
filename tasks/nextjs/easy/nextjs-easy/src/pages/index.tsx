// NextJS - Easy

export default function Home() {
  const sampleProducts = [
    // TODO: Create a sample product list with names and prices
    {
      name: "Product 1",
      price: 100,
      description: "This is a description of Product 1",
    },
    {
      name: "Product 2",
      price: 200,
      description: "This is a description of Product 2",
    },
    {
      name: "Product 3",
      price: 300,
      description: "This is a description of Product 3",
    },
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
            <span>{product.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
