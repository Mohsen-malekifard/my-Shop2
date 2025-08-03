import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="rounded-xl mb-4 w-full h-48 object-cover" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500">{product.price.toLocaleString()} تومان</p>
      <Link href={`/products/${product.id}`} className="text-blue-600 hover:underline text-sm mt-2 inline-block">
        مشاهده محصول
      </Link>
    </div>
  );
}