import { IoArrowForward } from "react-icons/io5";
import Ellipse from "../../assets/Ellipse 8.png";
import img from "../../assets/Rectangle 13.png";
import vector from "../../assets/Vector.png";
import Button from "../Button/Button";
function DetailsSec() {
  return (
    <>
      <div className="mx-20 my-28 items-center justify-center flex gap-10">
        <div className="w-[600px]">
          <div className="relative">
            <div className="absolute bottom-[200px] left-[-15px]">
              <div
                className="w-0 h-0 border-l-[35px] border-l-transparent border-l-solid
                border-r-transparent border-r-[35px] border-r-solid rounded-t-full border-t-[35px] border-t-primary border-t-solid m-1 -rotate-45 "
              ></div>
            </div>
            <h1 className="font-bold text-[32px] mb-10 ">
              Enjoy Our Latest Fashion Trends and Style
            </h1>
            <img src={vector} className="absolute top-0 left-[520px]" />
            <p className="text-2xl">
              Ship our curated collection of fashion items and stay ahead of the
              fashion game
            </p>
          </div>
          <div className="flex gap-[20px] ">
            <div className="relative mt-[100px]">
              <h3 className="font-bold text-2xl mb-[30px]">Quality</h3>
              <p>
                Our fashion items are crafted with the highest materials and
                attention to details
              </p>
              <img src={Ellipse} className="absolute top-0 " />
            </div>
            <div className="mt-[100px]">
              <h3 className="font-bold text-2xl mb-[30px]">Style</h3>
              <p>
                Express you unique style with our wide range of trendy items.
              </p>
            </div>
          </div>
          <div className="mt-[120px] ml-[480px]">
            <Button variant="primary" color="secondary" display="flex">
              Explore
              <IoArrowForward className="mt-1 ml-1" />
            </Button>
          </div>
        </div>
        <div>
          <img src={img} />
        </div>
      </div>
    </>
  );
}

export default DetailsSec;
