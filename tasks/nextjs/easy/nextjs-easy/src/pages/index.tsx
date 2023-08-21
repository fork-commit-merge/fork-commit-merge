// NextJS - Easy

export default function Home() {
  const sampleProducts = [
    // TODO: Create a sample product list with names and prices
    {
      name: "Iphone 14 pro max",
      price: "$1,099",
    },
    {
      name: "Galaxy Z Flip5",
      price: "$$1,119",
    },
    {
      name: "Galaxy S23 Plus",
      price: "$$1,000",
    },
    {
      name: "Galaxy S23 Ultra",
      price: "$$1,200",
    },
    {
      name: "Galaxy Z Fold 5",
      price: "$$1,800",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to PhonTopia Store!</h1>
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
