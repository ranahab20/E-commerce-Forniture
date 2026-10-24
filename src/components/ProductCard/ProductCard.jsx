function ProductCard({ product }) {
  const handleAddToCart = () => {
    console.log("Add suggested product to cart:", product);
  };

  return (
    <article className="min-w-0">
      {/* Product image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="aspect-[4/3] w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* Product title */}
      <h3 className="mt-3 truncate text-sm font-medium">{product.name}</h3>

      {/* Rating dots */}
      <div className="mt-2 flex items-center gap-1">
        {[1, 2, 3, 4].map((star) => (
          <span key={star} className="h-2 w-2 rounded-full bg-purple-300" />
        ))}
      </div>

      {/* Price and action */}
      <div className="mt-5 flex items-center justify-between gap-2">
        <div>
          <p className="text-sm font-bold">${product.price.toFixed(2)}</p>

          {product.oldPrice && (
            <p className="text-xs text-gray-400 line-through">
              ${product.oldPrice.toFixed(2)}
            </p>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className="shrink-0 rounded-full bg-[#D4DCFB] px-3 py-1 text-xs font-semibold transition hover:bg-primary"
        >
          Add to
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
