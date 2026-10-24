import CartItems from "./component/CartItems";
import Suggestion from "./component/Suggestion";

const cartProducts = [
  {
    id: 1,
    name: "Modern Soft Chair",
    description: "The Modern Soft Chair boasts a harmonious look.",
    imageUrl: "https://placehold.co/300x200?text=Modern+Chair",
    price: 30.99,
    oldPrice: 50.99,
    quantity: 1,
  },
  {
    id: 2,
    name: "Modern Soft Chair",
    description: "A comfortable chair for modern living.",
    imageUrl: "https://placehold.co/300x200?text=Blue+Chair",
    price: 30.99,
    oldPrice: 50.99,
    quantity: 1,
  },
  {
    id: 3,
    name: "Modern Soft Chair",
    description: "Elegant furniture for your home.",
    imageUrl: "https://placehold.co/300x200?text=Living+Room",
    price: 30.99,
    oldPrice: 50.99,
    quantity: 1,
  },
];

const suggestedProducts = [
  {
    id: 1,
    name: "Comfortable Soft Chair",
    imageUrl: "https://placehold.co/300x200?text=Yellow+Chair",
    price: 40,
    oldPrice: 50,
  },
  {
    id: 2,
    name: "Comfortable Soft Chair",
    imageUrl: "https://placehold.co/300x200?text=Modern+Sofa",
    price: 40,
    oldPrice: 50,
  },
  {
    id: 3,
    name: "New Soft Chair",
    imageUrl: "https://placehold.co/300x200?text=Blue+Sofa",
    price: 20,
    oldPrice: 30,
  },
  {
    id: 4,
    name: "Modern Soft Chair",
    imageUrl: "https://placehold.co/300x200?text=Modern+Chair",
    price: 40,
    oldPrice: 50,
  },
];

function Cart() {
  return (
    <main className="min-h-screen bg-background px-5 py-10 text-black sm:px-8 lg:px-20">
      <h1 className="mb-10 text-2xl font-bold">Your Shopping</h1>

      <p className="mb-8 text-sm text-gray-400">
        Home / <span className="text-black">My Cart</span>
      </p>

      <CartItems items={cartProducts} />

      <Suggestion products={suggestedProducts} />
    </main>
  );
}

export default Cart;
