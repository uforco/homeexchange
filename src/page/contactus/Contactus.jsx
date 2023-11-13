import Contactusmap from "./../../components/contactus_compo/Contactusmap";
import Contactusfrom from "./../../components/contactus_compo/Contactusfrom";
import Helmattitle from "../../components/othercompo/Helmattitle";
const Contactus = () => {
  return (
    <div>
      <Helmattitle title={"Home Exchage | contact us"}></Helmattitle>
      <div className=" w-full xl:container mx-auto ">
        <div className=" relative overflow-hidden ">
          <div>
            <div className=" relative sm:h-[300px] md:h-[400px] ">
              <dir className=" absolute -top-4 left-0 w-full h-full bg-black bg-opacity-50 "></dir>
              <img src="https://i.ibb.co/chS6dK6/mapimg.jpg" alt="" />
            </div>
          </div>
          <div className=" absolute w-full  z-30  h-5/6 top-0 left-0 ">
            <div className=" px-2 w-full flex-col gap-8 flex h-full justify-center items-center ">
              <div>
                <h2 className=" text-center text-white font-playfairDisplay text-5xl font-semibold  ">
                  Contact Us
                </h2>
              </div>
              <div className=" w-full sm:w-[480px] bg-white py-14 rounded-md px-10 overflow-hidden ">
                <Contactusfrom></Contactusfrom>
              </div>
            </div>
          </div>
          <div>
            <Contactusmap></Contactusmap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
