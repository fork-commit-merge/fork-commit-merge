// NextJS - Easy

export default function Home() {
  const sampleProducts = [
    // TODO: Create a sample product list with names and prices
    {name: 'Apple', price: '$25'},
    {name: 'Orange', price: '$25'},
    {name: 'Lemon', price: '$25'},
    {name: 'Peach', price: '$25'},
    {name: 'Grapes', price: '$25'},
    {name: 'Strawberry', price: '$25'},
    {name: 'Pineapple', price: '$25'},
    {name: 'Melon', price: '$25'},
    {name: 'Lime', price: '$25'},
    {name: 'Muscat grapes', price: '$25'},
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
