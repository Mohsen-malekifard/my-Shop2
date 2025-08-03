"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center mb-6 rounded-b-2xl">
      <Link href="/" className="text-xl font-bold text-blue-600">
        فروشگاه من
      </Link>
      <div className="text-sm text-gray-700">
        🛒 سبد خرید ({cart.length})
      </div>
    </nav>
  );
}