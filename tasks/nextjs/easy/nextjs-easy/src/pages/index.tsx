// NextJS - Easy

export default function Home() {
  const sampleProducts = [
    { name: "Wireless Noise-Cancelling Headphones", price: "$299.99", category: "Electronics", badge: "Best Seller" },
    { name: "Leather Minimalist Wallet", price: "$49.99", category: "Accessories", badge: "New" },
    { name: "Stainless Steel Water Bottle", price: "$34.99", category: "Lifestyle", badge: null },
    { name: "Mechanical Keyboard", price: "$149.99", category: "Electronics", badge: "Popular" },
    { name: "Running Shoes", price: "$119.99", category: "Footwear", badge: "Sale" },
    { name: "Scented Soy Candle Set", price: "$24.99", category: "Home", badge: null },
  ];

  const badgeColors: Record<string, string> = {
    "Best Seller": "bg-amber-100 text-amber-700",
    "New": "bg-emerald-100 text-emerald-700",
    "Popular": "bg-blue-100 text-blue-700",
    "Sale": "bg-rose-100 text-rose-700",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <span className="text-2xl font-extrabold tracking-tight text-gray-900">XYZ</span>
            <span className="text-2xl font-light text-indigo-500"> Store</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-indigo-600 transition-colors">Shop</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500 text-white text-xs rounded-full flex items-center justify-center">
              {sampleProducts.length}
            </span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
          <p className="text-indigo-200 text-sm font-semibold uppercase tracking-widest mb-3">Spring Collection 2025</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Your One-Stop Shop
          </h1>
          <p className="text-indigo-100 text-lg sm:text-xl max-w-xl mx-auto mb-8">
            Discover handpicked products crafted for everyday living — quality you can trust.
          </p>
          <a
            href="#products"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Products */}
      <main id="products" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <span className="text-sm text-gray-500">{sampleProducts.length} items</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col"
            >
              {/* Product image placeholder */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 h-44 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/70 flex items-center justify-center shadow-inner">
                  <svg className="w-10 h-10 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                  </svg>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-gray-800 leading-snug">{product.name}</h3>
                  {product.badge && (
                    <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${badgeColors[product.badge]}`}>
                      {product.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">{product.category}</p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xl font-bold text-indigo-600">{product.price}</span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-sm font-medium px-4 py-2 rounded-xl transition-all duration-150">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-400">
          © 2025 XYZ Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
