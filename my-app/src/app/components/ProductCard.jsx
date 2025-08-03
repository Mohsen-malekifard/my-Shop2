import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{product.name}</h3>
        <p className="text-gray-600 mb-2 text-sm">{product.price.toLocaleString()} تومان</p>
        <Link
          href={`/products/${product.id}`}
          className="inline-block mt-2 text-blue-600 hover:text-blue-800 text-sm"
        >
          مشاهده محصول
        </Link>
      </div>
    </div>
  );
}