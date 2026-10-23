import { useState } from "react";
import ProductPictures from "../ProductDetails/component/ProductImages";
import Details from "../ProductDetails/component/Details";

function ProductPage() {
  const [activeTab, setActiveTab] = useState("Product Info");

  const tabs = ["Product Info", "Product Description", "Feedback"];

  return (
    <main className="min-h-screen bg-[#eef2fc] px-5 py-6 sm:px-10 lg:px-16">
      {/* Main product section */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.7fr_1fr] lg:gap-12">
        <ProductPictures />
        <Details/>
      </section>

      {/* Product tabs */}
      <section className="mt-12">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-md px-4 py-3 font-semibold transition ${
                activeTab === tab
                  ? "bg-[#d0d9e8] text-black"
                  : "bg-[#d0d9e8]/50 text-gray-600 hover:bg-[#d0d9e8]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Active tab content */}
        <div className="mt-6 rounded-lg bg-white/50 p-5">
          {activeTab === "Product Info" && (
            <p className="text-sm leading-7 text-gray-600">
              Product: Modern Soft Chair
              <br />
              Category: Living Room Furniture
              <br />
              Availability: In Stock
            </p>
          )}

          {activeTab === "Product Description" && (
            <p className="max-w-3xl text-sm leading-7 text-gray-600">
              This modern soft chair combines a comfortable upholstered seat
              with a timeless design. It is suitable for contemporary living
              rooms and cozy relaxation spaces.
            </p>
          )}

          {activeTab === "Feedback" && (
            <p className="text-sm text-gray-600">
              Customer reviews and ratings will appear here.
            </p>
          )}
        </div>
      </section>

      {/* Frequently bought together */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Frequently Bought Together</h2>

        {/* Add your related product cards here */}
      </section>
    </main>
  );
}

export default ProductPage;
