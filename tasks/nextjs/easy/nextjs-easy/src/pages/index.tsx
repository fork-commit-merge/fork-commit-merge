// pages/index.tsx

// Default export for the Home page in Next.js
export default function Home() {
  // Step 1: Define sample product list with names and prices
  const sampleProducts = [
    { name: "Wireless Mouse", price: 25.99 },
    { name: "Mechanical Keyboard", price: 79.49 },
    { name: "HD Monitor", price: 149.99 },
  ];

  return (
    // Step 2: Main container with vertical centering using Tailwind
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      
      {/* Step 3: Store Heading */}
      <h1 className="text-4xl font-bold mb-4">Welcome to XYZ Store!</h1>

      {/* Step 4: Store subheading/description */}
      <p className="text-lg mb-8">
        Your one-stop shop for the best products in town.
      </p>

      {/* Step 5: Product List Container */}
      <div className="w-1/2 flex flex-col space-y-4">
        {sampleProducts.map((product, index) => (
          // Step 6: Render each product inside a styled box
          <div
            key={index}
            className="flex justify-between p-4 border rounded shadow"
          >
            {/* Product name */}
            <span>{product.name}</span>
            {/* Product price formatted to 2 decimal places */}
            <span>${product.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}