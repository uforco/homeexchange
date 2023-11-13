import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { TfiLocationPin } from "react-icons/tfi";
const Leftsite_img = () => {
  return (
    <div className=" relative pb-24 sm:pb-20  text-white   w-full">
      <div className=" w-full md:w-11/12 sm:h-4/5 border border-[#c0c0c0] overflow-hidden rounded-xl ">
        <img
          className=" w-full md:object-cover "
          src="https://i.ibb.co/Dby0q6Z/unsplash.jpg"
          alt=""
        />
      </div>
      <div className=" bg-[#474747] rounded-xl w-[296px] sm:w-[320px] sm:h-[260px] overflow-hidden absolute -bottom-16 sm:-bottom-0 right-0 ">
        <div className=" font-DMSans p-7 sm:p-8 ">
          <h2 className=" pb-6 text-2xl ">Come and visit us</h2>
          <ul className=" flex flex-col gap-3  ">
            <li className=" flex justify-start gap-6 items-center text-sm ">
              <span>
                <BsTelephone></BsTelephone>
              </span>
              <p>{`(414)`} 857 - 0107</p>{" "}
            </li>
            <li className=" flex justify-start gap-6 items-center text-sm ">
              <span>
                <AiOutlineMail></AiOutlineMail>
              </span>
              <p>home.exchange@service.com</p>{" "}
            </li>
            <li className=" flex justify-start gap-6 items-center text-sm ">
              <span>
                <TfiLocationPin></TfiLocationPin>
              </span>
              <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leftsite_img;
