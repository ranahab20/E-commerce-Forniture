import logo from "../../assets/Group 10.png";
import Button from "../Button/Button";
import { FaChevronDown } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import useCard from "../../store/use-card";
import { NavLink } from "react-router-dom";
function Header() {
  const cart = useCard((state) => state.cart);
  return (
    <>
      <div className="flex sticky top-0 justify-between pb-1 pt-4 px-3 bg-background z-10  ">
        <img src={logo} className=" h-[64px] w-[55px]" />
        <div className="relative">
          <IoCartOutline size={30} />
          <span className="absolute bg-red-600 rounded-full text-white flex justify-center items-center text-[11px] top-[-10px] right-[-5px] w-5 h-5">
            {cart.length}
          </span>
        </div>

        <nav className="flex gap-7 ">
          <div className="flex gap-0.5  py-4 px-2">
            <NavLink
              to="/pro"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-b-primary font-bold text-base flex gap-2"
                  : "font-bold text-base flex gap-2 text-black border-none"
              }
            >
              shop Now
              <FaChevronDown />
            </NavLink>
          </div>
          <div className="flex gap-0.5 py-4 px-2 ">
            <NavLink
              to="/Forniture"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-b-primary font-bold text-base flex gap-2"
                  : "font-bold text-base flex gap-2 text-black border-none"
              }
            >
              Home Furniture
              <FaChevronDown />
            </NavLink>
          </div>
          <div className="flex  py-4 px-2">
            <NavLink
              to="/living"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-b-primary font-bold text-base flex gap-2"
                  : "font-bold text-base flex gap-2 text-black border-none"
              }
            >
              Living Room
              <FaChevronDown />
            </NavLink>
          </div>
          <div className="flex  py-4 px-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-b-primary font-bold text-base flex gap-2"
                  : "font-bold text-base flex gap-2 text-black border-none"
              }
            >
              About Us
              <FaChevronDown />
            </NavLink>
          </div>
          <div className="flex  py-4 px-2">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-b-primary font-bold text-base flex gap-2"
                  : "font-bold text-base flex gap-2 text-black border-none"
              }
            >
              Contact Us
              <FaChevronDown />
            </NavLink>
          </div>
        </nav>
        <div className="flex gap-2.5">
          <Button color="outline" variant="primary" raduis="rounded-full">
            Log in
          </Button>
          <Button color="primary" variant="outline" raduis="rounded-full">
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
