function ProductCard({ product }) {
  if (!product) {
    return null;
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-52 items-center justify-center bg-gray-50 p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h2 className="text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500">
          Brand: {product.brand || "Not specified"}
        </p>

        <p className="w-fit rounded-full bg-blue-100 px-3 py-1 text-sm capitalize text-blue-700">
          {product.category}
        </p>

        <p className="text-2xl font-bold text-green-700">
          ${Number(product.price).toFixed(2)}
        </p>

        <p className="text-amber-600">
          ⭐ {product.rating} / 5
        </p>

        <p
          className={
            product.stock > 0
              ? "font-semibold text-green-600"
              : "font-semibold text-red-600"
          }
        >
          {product.stock > 0
            ? `In Stock: ${product.stock}`
            : "Out of Stock"}
        </p>

        <p className="flex-1 text-sm leading-6 text-gray-600">
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;