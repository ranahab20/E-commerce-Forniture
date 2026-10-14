import { IoArrowForward } from "react-icons/io5";
import Button from "../Button/Button";

const Trend = () => {
  return (
    <>
      <div className="mx-20 my-28 items-center justify-center">
        <div className="flex justify-between gap-[80px]">
          <div className="flex flex-col gap-[24px]">
            <p>Furniture</p>
            <h3 className="font-bold text-3xl">Discover the Latest Trends</h3>
            <p className="text-[18px] text-[#6A6D70]">
              Stay updated with our information and engaging blog posts about
              modern Furniture and Fashion on the industry
            </p>
          </div>
          <div>
            <Button display="flex" variant="primary" color="secondary">
              Explore
              <IoArrowForward className="mt-1 ml-1" />
            </Button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Trend;
