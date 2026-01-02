// NextJS - Easy

export default function Home() {
  const sampleProducts = [
    // TODO: Create a sample product list with names and prices
      { id: 1, name: "Xiaomi Redmi 15C (8GB RAM/256GB)", price: 125.00 },
  { id: 2, name: "Eco Notebook", price: 12.5 },
  { id: 3, name: "Reusable Water Bottle", price: 18.00 },
  {id: 4, name: "43-inch LG Smart TV",price: 250.00},
  {id:5,name:"Jordan 5 off white sail", price: 300.00},


    
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
