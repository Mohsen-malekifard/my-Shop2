"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center rounded-b-2xl sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-blue-600">
        🛍️ فروشگاه من
      </Link>
      <Link href="/cart" className="text-sm text-blue-700 hover:text-blue-900">
        🛒 سبد خرید ({cart.length})
      </Link>
    </nav>
  );
}