"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <div className="p-10 flex flex-col md:flex-row items-center justify-center gap-10">
      
      <div className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-80 h-80 object-contain rounded-lg shadow-md"
        />
      </div>

      
      <div className="max-w-lg">
        <h1 className="text-3xl font-bold mb-4 text-white-800">
          {product.title}
        </h1>
        <p className="text-white-600 mb-6">{product.description}</p>
        <p className="text-xl font-semibold text-blue-600 mb-4">
          ${product.price}
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
