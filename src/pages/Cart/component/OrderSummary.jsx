
function OrderSummary({ items = [] }) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = subtotal * 0.2;
  const deliveryFee = items.length > 0 ? 0 : 0;
  const total = subtotal - discount + deliveryFee;

  return (
    <aside className="w-full">
      <h2 className="mb-6 text-lg font-bold">Order Summary</h2>

      <div className="flex flex-col gap-4 text-sm text-gray-500">
        <div className="flex justify-between gap-3">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between gap-3">
          <span>Discount (-20%)</span>
          <span>-${discount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between gap-3">
          <span>Delivery Fee</span>
          <span>
            {deliveryFee === 0 ? "Free" : `$${deliveryFee.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between border-t border-gray-300 pt-4 text-base font-bold text-black">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={() => console.log("Proceed to checkout")}
        className="mt-6 w-full rounded-full bg-black py-3 text-sm text-white transition hover:bg-gray-800"
      >
        Go to Checkout
      </button>

      <button
        onClick={() => window.history.back()}
        className="mt-3 w-full rounded-full border border-gray-400 py-3 text-sm text-gray-500 transition hover:bg-gray-100"
      >
        Continue Shopping
      </button>
    </aside>
  );
}

export default OrderSummary;
