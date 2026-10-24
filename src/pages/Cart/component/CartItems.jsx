import { useState } from "react";
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
import OrderSummary from "./OrderSummary";

function CartItems({ items = [] }) {
  const [cart, setCart] = useState(items);

  const updateQuantity = (id, change) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCart((previousCart) => previousCart.filter((item) => item.id !== id));
  };

  return (
    <section className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(250px,0.8fr)] lg:gap-12">
      {/* Left: cart products */}
      <div className="min-w-0">
        {/* Column headings */}
        <div className="mb-5 hidden grid-cols-[minmax(0,1fr)_100px_100px] gap-4 md:grid">
          <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs">
            Items
          </span>

          <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs">
            Quantity
          </span>

          <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs">
            Price
          </span>
        </div>

        {/* Cart product rows */}
        <div className="flex flex-col gap-5">
          {cart.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-[100px_minmax(0,1fr)] gap-4 border-b border-gray-200 pb-5 sm:grid-cols-[120px_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_100px_100px]"
            >
              {/* Product information */}
              <div className="flex min-w-0 gap-3 md:col-span-1">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-20 w-full rounded-lg object-cover sm:h-24"
                />
              </div>

              <div className="min-w-0 md:hidden">
                <h3 className="font-semibold">{product.name}</h3>

                <p className="mt-1 line-clamp-2 text-xs text-gray-400">
                  {product.description}
                </p>

                <p className="mt-2 font-bold">${product.price.toFixed(2)}</p>

                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(product.id, -1)}
                    disabled={product.quantity <= 1}
                    aria-label="Decrease quantity"
                    className="text-gray-500 disabled:opacity-30"
                  >
                    <FiMinus size={14} />
                  </button>

                  <span>{product.quantity}</span>

                  <button
                    onClick={() => updateQuantity(product.id, 1)}
                    aria-label="Increase quantity"
                    className="text-gray-500"
                  >
                    <FiPlus size={14} />
                  </button>

                  <button
                    onClick={() => removeItem(product.id)}
                    aria-label={`Remove ${product.name}`}
                    className="ml-auto text-gray-500 hover:text-red-500"
                  >
                    <FiTrash2 size={14} />
                  </button>
                </div>
              </div>

              {/* Desktop: product name and remove button */}
              <div className="hidden min-w-0 md:block">
                <h3 className="font-semibold">{product.name}</h3>

                <p className="mt-2 line-clamp-2 text-xs text-gray-400">
                  {product.description}
                </p>

                <button
                  onClick={() => removeItem(product.id)}
                  aria-label={`Remove ${product.name}`}
                  className="mt-2 text-gray-500 hover:text-red-500"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>

              {/* Desktop: quantity selector */}
              <div className="hidden items-center gap-2 md:flex">
                <button
                  onClick={() => updateQuantity(product.id, -1)}
                  disabled={product.quantity <= 1}
                  aria-label="Decrease quantity"
                  className="text-gray-400 disabled:opacity-30"
                >
                  <FiMinus size={13} />
                </button>

                <span>{product.quantity}</span>

                <button
                  onClick={() => updateQuantity(product.id, 1)}
                  aria-label="Increase quantity"
                  className="text-gray-400"
                >
                  <FiPlus size={13} />
                </button>
              </div>

              {/* Desktop: price */}
              <div className="hidden md:block">
                <p className="font-bold">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>

                <p className="mt-2 text-xs text-gray-400 line-through">
                  ${(product.oldPrice * product.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          {cart.length === 0 && (
            <p className="py-8 text-center text-gray-500">
              Your cart is empty.
            </p>
          )}
        </div>
      </div>

      {/* Right: order summary */}
      <OrderSummary items={cart} />
    </section>
  );
}

export default CartItems;
