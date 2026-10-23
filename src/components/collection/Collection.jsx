import Button from "../Button/Button";

import useCard from "../../store/use-card";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
// const products = [
//   {
//     id: 1,
//     description: "Stylish Soft Chair",
//     image: img1,
//     price: 20,
//   },
//   {
//     id: 1,
//     description: "New Soft Chair",
//     image: img8,
//     price: 20,
//   },
//   {
//     id: 1,
//     description: "Comfortable Soft Chair",
//     image: img2,
//     price: 20,
//   },
//   {
//     id: 1,
//     description: "Modern Soft Chair",
//     image: img3,
//     price: 20,
//   },
//   {
//     id: 1,
//     description: "Stylish Soft Chair",
//     image: img4,
//     price: 20,
//   },
//   {
//     id: 1,
//     description: "OLd Modern Soft Chair",
//     image: img5,
//     price: 20,
//   },
//   {
//     id: 1,
//     description: "New Light Soft Chair",
//     image: img6,
//     price: 20,
//   },
//   {
//     id: 1,
//     description: "Stylish Soft Chair",
//     image: img7,
//     price: 20,
//   },
// ];
const Collection = () => {
  const addCart = useCard((state) => state.addCart);
  const [activeCategory, setActiveCategory] = useState(null);

  const getCategory = async () => {
    const res = await axios.get(
      "https://test-backend.abdulrahman-hares.com/api/categories",
    );
    return res;
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategory(),
  });

  const getProducts = async () => {
    const res = await axios.get(
      "https://test-backend.abdulrahman-hares.com/api/products",
    );
    return res;
  };
  const {
    data: productData,
    isLoading: load,
    isError: error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
  console.log(productData);

  return (
    <>
      <div className="flex flex-col gap-[80px] px-20 py-28 justify-center relative">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-5xl relative inline-block">
            Stylish Collection of Furniture
            <span className="absolute w-[138px] h-[65px] border-t-4  border-r-2  border-t-solid border-r-dashed border-primary top-[-40px] right-[630px] rotate-[20px] rounded-[50%]"></span>
          </h1>
          <p className="font-normal text-2xl">
            Stay updated with our information and engaging blog posts about
            modern Furniture and Fashion on the industry
          </p>
        </div>
        <div className="flex gap-4">
          {data?.data.map((category) => {
            return (
              <Button
                raduis="rounded-full"
                font_size="text-[24px]"
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={
                  activeCategory === category.id
                    ? "bg-black text-white"
                    : "bg-primary text-black"
                }
              >
                {category.name}
              </Button>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-[32px]">
          {productData?.data.map((product) => (
            <div key={product.id}>
              <img src={product.imageUrl} className="w-full h-full object-cover" />
              <h3 className="shimmer-color-gray-400 my-[32px]">
                {product.description}
              </h3>
              <div className="flex gap-[142px]">
                <p className="mt-8 font-bold text-[20px]">${product.price}</p>
                <button
                  className="bg-[#D4DCFB] py-0 px-4 rounded-[33px] font-bold text-[16px] h-[34px] mt-7"
                  onClick={() => addCart(product)}
                >
                  Add to
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className=" bg-gradient-to-r from-background to-primary blur-[45px] opacity-70 w-[200px] h-[600px] absolute top-[700px] right-[1460px] rounded-full"></div>
      </div>
    </>
  );
};

export default Collection;
