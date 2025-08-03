"use client";

import data from "@/lib/data";
import { useCart } from "@/context/CartContext";

export async function generateStaticParams() {
  return data.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }) {
  const product = data.find((item) => item.id === params.id);
  const { addToCart } = useCart();

  if (!product) return <p>محصول پیدا نشد</p>;

  return (
    <div className="bg-white rounded-2xl shadow p-6 max-w-2xl mx-auto mt-8">
      <img src={product.image} alt={product.name} className="rounded-xl mb-4 w-full h-64 object-cover" />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl text-green-600 font-semibold mb-4">
        {product.price.toLocaleString()} تومان
      </p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
}