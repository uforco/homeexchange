import { AiOutlineFieldTime } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
import { BsBookmarkHeart } from "react-icons/bs";
const Fastest_City_right = () => {
  return (
    <div>
      <div className=" flex flex-col gap-7 sm:gap-4 lg:gap-8 px-0 lg:px-5 ">
        <h2 className=" font-playfairDisplay text-4xl lg:text-6xl font-semibold ">
          Fastest home exchange in City
        </h2>
        <p className=" font-playfairDisplay lg:text-lg font-semibold ">
          Experience the fastest home exchange in the city. Swiftly find, trade,
          and upgrade your living space hassle-free.
        </p>
        <ul className=" flex gap-4 sm:gap-3  lg:gap-4 flex-col ">
          <li className=" flex justify-start gap-3 font-DMSans text-base lg:text-lg font-semibold items-center ">
            {" "}
            <span className=" text-xl lg:text-2xl font-semibold text-white p-2 rounded-full bg-red-700 ">
              <AiOutlineFieldTime></AiOutlineFieldTime>
            </span>{" "}
            Fast Home Swap / Response{" "}
          </li>
          <li className=" flex justify-start gap-3 font-DMSans text-base lg:text-lg font-semibold items-center ">
            {" "}
            <span className=" text-xl lg:text-2xl font-semibold text-white p-2 rounded-full bg-red-700 ">
              <TbDiscount2></TbDiscount2>
            </span>{" "}
            Best Offer & Prices{" "}
          </li>
          <li className=" flex justify-start gap-3 font-DMSans text-base lg:text-lg font-semibold items-center ">
            {" "}
            <span className=" text-xl lg:text-2xl font-semibold text-white p-2 rounded-full bg-red-700 ">
              <BsBookmarkHeart></BsBookmarkHeart>
            </span>{" "}
            Online Booking System Available{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Fastest_City_right;
