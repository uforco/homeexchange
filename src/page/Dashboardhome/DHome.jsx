import { Link } from "react-router-dom";
import Helmattitle from "../../components/othercompo/Helmattitle";
const DHome = () => {
  return (
    <div className=" w-full h-full " >
      <Helmattitle title={"Home Exchage | Dashboard"}></Helmattitle>
      <div className=" w-full h-full overflow-hidden relative ">
        <div className=" w-full h-full flex justify-center items-center " >
          <img src="https://i.ibb.co/m4hX9w2/dashborad.png" alt="" />
        </div>
        <div className=" absolute bottom-52 md:bottom-72 left-1/2 -translate-x-1/2 ">
          <Link to="/dashboard/addservice">
            <button className=" p-3 px-5 text-sm md:text-xl text-black rounded bg-opacity-90 border md:bg-opacity-100 md:border-0 bg-amber-400 hover:bg-amber-500 font-DMSans font-medium ">
              Add Service
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DHome;
