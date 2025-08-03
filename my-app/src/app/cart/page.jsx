"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow mt-8">
      <h1 className="text-2xl font-bold mb-6">🛒 سبد خرید</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">سبد خرید شما خالی است.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.price.toLocaleString()} تومان</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-600 text-sm hover:underline"
              >
                حذف
              </button>
            </div>
          ))}

          <div className="pt-4 border-t font-bold text-lg text-right">
            مجموع: {total.toLocaleString()} تومان
          </div>
        </div>
      )}
    </div>
  );
}