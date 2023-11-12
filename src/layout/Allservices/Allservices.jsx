import { useEffect, useState } from "react";
import Services from "./../../components/Services/Services";
import axios from "axios";
import Loader from "../../components/othercompo/Loader";
import loaderd from "../../assets/icons/LoaderAmnite.json";
import datafound from "../../assets/icons/datanotfound.json";

const Allservices = () => {
  const [allservice, setAllservice] = useState(null);
  useEffect(() => {
    axios.get("/allservice").then((res) => {
      setAllservice(res.data);
    });
  }, []);
  return !allservice ? (
    <div className=" flex justify-center items-center w-full h-screen overflow-hidden ">
      <div>
        <Loader name={loaderd} wh={100}></Loader>
      </div>
    </div>
  ) : allservice?.length < 1 ? (
    <div className=" flex justify-center items-center w-full h-screen overflow-hidden ">
      <div>
        <Loader name={datafound} wh={300}></Loader>
      </div>
    </div>
  ) : (
    <div>
      <div className=" w-full xl:container  mx-auto ">
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
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-5">
              {allservice?.map((data, idx) => (
                <Services key={idx} data={data}></Services>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allservices;
