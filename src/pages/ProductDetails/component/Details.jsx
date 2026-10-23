import { useState } from "react";
import { FiStar, FiMinus, FiPlus, FiTruck, FiShield } from "react-icons/fi";
import { MdOutlineLocalShipping } from "react-icons/md";
import Button from '../../../components/Button/Button'

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("#E8C1A7");

  const colors = ["#E8C1A7", "#A9D9E8", "#C6A8E8", "#B4A0E8"];

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      product: "Modern Soft Chair",
      quantity,
      color: selectedColor,
    });
  };

  const handleBuyNow = () => {
    console.log("Buy now:", {
      product: "Modern Soft Chair",
      quantity,
      color: selectedColor,
    });
  };

  return (
    <div className="w-full pt-2">
      {/* Product title and description */}
      <h1 className="mb-3 text-2xl font-bold text-black sm:text-3xl">
        Modern Soft Chair
      </h1>

      <p className="max-w-lg text-sm leading-6 text-gray-500">
        The Modern Soft Chair boasts a harmonious blend of modern design and
        plush comfort. With its sleek lines, premium upholstery, and timeless
        silhouette, it brings elegance and comfort to any living space.
      </p>

      {/* Price */}
      <div className="my-6 flex items-center gap-5">
        <span className="text-3xl font-bold text-black">$30.99</span>

        <span className="text-sm text-gray-400 line-through">$39.99</span>
      </div>

      {/* Rating and availability */}
      <div className="mb-5 flex flex-wrap items-center gap-3 text-xs">
        <div className="flex items-center gap-0.5 text-orange-400">
          {[1, 2, 3, 4].map((star) => (
            <FiStar key={star} fill="currentColor" size={15} />
          ))}
          <FiStar className="text-gray-400" fill="currentColor" size={15} />
        </div>

        <span className="text-gray-500">(150 Reviews)</span>

        <span className="rounded-full bg-gray-200 px-3 py-2 text-gray-800">
          Sold 100
        </span>

        <span className="rounded-full bg-green-100 px-3 py-2 font-medium text-green-600">
          In Stock
        </span>
      </div>

      {/* Color selection */}
      <div className="mb-6 flex items-center gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            aria-label={`Select color ${color}`}
            className={`h-3.5 w-3.5 rounded-full border-2 transition ${
              selectedColor === color
                ? "border-gray-700 ring-2 ring-gray-300"
                : "border-transparent"
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Services */}
      <div className="mb-8 grid max-w-sm grid-cols-3 gap-3">
        <div className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl bg-white p-3 text-center shadow-sm">
          <MdOutlineLocalShipping className="text-2xl text-blue-500" />
          <span className="text-xs text-gray-600">
            Free
            <br />
            Delivery
          </span>
        </div>

        <div className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl bg-white p-3 text-center shadow-sm">
          <FiTruck className="text-2xl text-green-500" />
          <span className="text-xs text-gray-600">
            Fast
            <br />
            Shipping
          </span>
        </div>

        <div className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl bg-white p-3 text-center shadow-sm">
          <FiShield className="text-2xl text-orange-400" />
          <span className="text-xs text-gray-600">
            Secure
            <br />
            Transaction
          </span>
        </div>
      </div>

      {/* Quantity selector */}
      <div className="mb-3 flex w-fit items-center border border-gray-200">
        <button
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          disabled={quantity === 1}
          aria-label="Decrease quantity"
          className="p-2 text-gray-500 hover:bg-gray-100 disabled:opacity-30"
        >
          <FiMinus size={16} />
        </button>

        <span className="min-w-10 text-center">{quantity}</span>

        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          aria-label="Increase quantity"
          className="p-2 text-gray-500 hover:bg-gray-100"
        >
          <FiPlus size={16} />
        </button>
      </div>

      {/* Purchase buttons */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          color="secondary"
          variant="primary"
          onClick={handleAddToCart}
          className="min-h-10 w-full sm:w-1/2"
        >
          Add To Cart
        </Button>

        <Button
          color="secondary"
          variant="outline"
          onClick={handleBuyNow}
          className="min-h-10 w-full sm:w-1/2"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default ProductDetails;
