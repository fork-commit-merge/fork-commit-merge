// NextJS - Easy

export default function Home() {
  const sampleProducts = [
    { name: 'Iphone 6 32gb', price: 750 },
    { name: 'Nokia lumia 1520', price: 820 },
    { name: 'Nexus 6', price: 650 },
    { name: 'Samsung galaxy S7', price: 800 },
    { name: 'Sony xperia z5', price: 320 },
  ];

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-4xl font-bold mb-4'>
        Welcome to <span className='text-orange-500'>Phone Store!</span>{' '}
      </h1>
      <p className='text-lg mb-8 text-slate-500'>
        We offer a wide range of mobile phones at competitive prices.
      </p>

      <div className='w-1/2 flex flex-col space-y-4'>
        {sampleProducts.map((product, index) => (
          <div
            key={index}
            className='flex justify-between p-4 border rounded shadow'
          >
            <span className='font-semibold'>{product.name}</span>
            <span className='bg-slate-300 rounded px-2 py-1'>
              ${product.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
