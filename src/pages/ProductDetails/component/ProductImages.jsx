import { useState } from "react";
import { FiBookmark, FiShare2 } from "react-icons/fi";

const productImages = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
];

function ProductImages() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-full">
      <div className="mb-6 text-sm text-gray-500">
        Home / List of Products /
        <span className="text-black"> Modern Soft Chair</span>
      </div>
      <div className="mb-8 flex items-center gap-5">
        <button className="flex items-center gap-2 text-sm text-gray-600">
          <span className="rounded-full bg-gray-200 p-2">
            <FiBookmark size={17} />
          </span>
          Save
        </button>

        <button className="flex items-center gap-2 text-sm text-gray-600">
          <span className="rounded-full bg-gray-200 p-2">
            <FiShare2 size={17} />
          </span>
          Share
        </button>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex gap-3 overflow-x-auto sm:w-1/4 sm:flex-col sm:overflow-visible">
          {productImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition sm:h-[90px] sm:w-full ${
                activeImage === index
                  ? "border-fuchsia-500"
                  : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`Product view ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Main image */}
        <div className="h-[300px] w-full overflow-hidden rounded-[28px] bg-gray-100 sm:h-[410px] sm:flex-1">
          <img
            src={productImages[activeImage]}
            alt="Modern Soft Chair"
            className="h-full w-full object-cover transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductImages;
