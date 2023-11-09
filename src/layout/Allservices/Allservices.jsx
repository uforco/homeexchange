import Services from "./../../components/Services/Services";
const Allservices = () => {
  return (
    <div>
      <div className=" w-full xl:container bg-red-700 mx-auto ">
        <div>
          <div className=" relative after:backdrop-blur-sm after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-slate-900 after:bg-opacity-60 w-full h-28 sm:h-52 overflow-hidden ">
            <div className=" w-full  h-full flex justify-center items-center ">
              <img src="https://i.ibb.co/jrCDNJs/services.jpg" alt="" />
            </div>
            <div className=" z-20 absolute w-full h-full flex justify-center items-end left-0 top-0  ">
              <h2 className=" text-white py-4 font-DMSans font-semibold text-6xl ">
                Services
              </h2>
            </div>
          </div>
        </div>
        <div className=" w-full  h-full flex justify-center items-center ">
          <div className=" px-2 lg:px-0 py-14 ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-3">
              <Services></Services>
              <Services></Services>
              <Services></Services>
              <Services></Services>
              <Services></Services>
              <Services></Services>
              <Services></Services>
              <Services></Services>
              <Services></Services>
              <Services></Services>
              <Services></Services>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allservices;
