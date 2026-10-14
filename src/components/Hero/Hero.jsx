import home1 from "../../assets/Rectangle 1.png";
import home2 from "../../assets/Rectangle 3.png";
import home3 from "../../assets/Rectangle 4.png";
import Button from "../Button/Button";
import { IoArrowForward } from "react-icons/io5";

function Hero() {
  return (
    <>
      <div className="flex px-20 py-28 items-center justify-center relative  ">
        <div className="flex flex-col gap-[60px] mb-40">
          <h1 className="font-bold text-6xl leading-[80px]">
            Discover the Latest Furniture Trends
          </h1>
          <p className="font-normal text-2xl">
            Shop the Latest Fashion Items and <br /> Stay ahead of the style
            game
          </p>
          <div>
            <Button display="flex" margin="mt-[160px]">
              Explore More
              <IoArrowForward className="mt-1 ml-1" />
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-end">
          <img src={home1} alt="home" />
          <img src={home2} alt="home" />
          <img className="z-2" src={home3} alt="home" />
        </div>
        <div className=" bg-gradient-to-r from-background to-primary blur-[45px] opacity-70 w-[230px] h-[600px] absolute top-[369px] left-[1280px] rounded-full"></div>
      </div>
    </>
  );
}

export default Hero;
