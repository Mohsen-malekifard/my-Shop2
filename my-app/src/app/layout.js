import { CartProvider } from "../context/CartContext";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "فروشگاه من",
  description: "فروشگاه ساده با Next.js و TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <CartProvider>
          <Navbar />
          <main className="max-w-6xl mx-auto p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}