import { useEffect, useState } from "react";
import axios from "axios";
import Services from "./../Services/Services";
import Loader from "../othercompo/Loader";
import loaderd from "../../assets/icons/LoaderAmnite.json"
import datafound from "../../assets/icons/datanotfound.json"
import { Link } from 'react-router-dom';
const Event_place_exchange = () => {
 
  const [homedata, setHomedata] = useState(null);
  useEffect(() => {
    axios.get(`/homesevice`).then((res) => setHomedata(res.data));
  }, []);

  return (
    <div className=" w-full bg-slate-50 py-14 ">
      <div className="  px-5 lg:px-8  lg:container mx-auto  ">
        <div className=" pb-7 ">
          <div className=" w-full sm:w-[400px] ">
            <h2 className=" font-playfairDisplay  text-2xl sm:text-4xl font-bold ">
              We also offer unique Services for your events
            </h2>
          </div>
        </div>
        {
            homedata?.length < 1 ? 
                ""
            :
                <div className=" font-semibold uppercase w-full pb-10 " >
                    <div className=" w-full text-end justify-end items-center px-10 " >
                        <Link to={"/services"} className=" hover:text-red-700 text-rose-500 " >See all</Link>
                    </div>
                </div>
        }
        <div className=" w-full flex justify-center items-center ">
          <div>

            {
            !homedata ? 
                <div className=" flex justify-center items-center w-full h-[500px] overflow-hidden ">
                <div>
                    <Loader name={loaderd} wh={100}></Loader>
                </div>
                </div>
            : homedata?.length < 1 ? 
                <div className=" flex justify-center items-center w-full h-[500px] overflow-hidden ">
                <div>
                    <Loader name={datafound} wh={300}></Loader>
                </div>
                </div>
            :
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 ">
                    {homedata?.map((service, idx) => (
                        <Services key={idx} data={service}></Services>
                    ))}
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event_place_exchange;
