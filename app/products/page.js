import Link from 'next/link';
import React from 'react'

async function Products() {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {data.map((product) => (
        <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Link href="#">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-64 object-contain p-4"
            />
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
            </Link>
            {/* <p className="mb-3 text-gray-700 dark:text-gray-400 line-clamp-3">
              {product.description}
            </p> */}
            <Link 
              href={`/products/${product.id}`} 
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Show Details
              <svg 
                className="w-3.5 h-3.5 ml-2" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 14 10"
              >
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
