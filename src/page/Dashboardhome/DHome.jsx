import { Link } from "react-router-dom";
import Helmattitle from "../../components/othercompo/Helmattitle";
const DHome = () => {
  return (
    <div>
      <Helmattitle title={"Home Exchage | Dashboard"}></Helmattitle>
      <div className=" relative ">
        <div>
          <img src="https://i.ibb.co/m4hX9w2/dashborad.png" alt="" />
        </div>
        <div className=" absolute bottom-72 left-1/2 -translate-x-1/2 ">
          <Link to="/dashboard/addservice">
            <button className=" p-3 px-5 text-xl text-black rounded bg-amber-400 hover:bg-amber-500 font-DMSans font-medium ">
              Add Service
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DHome;
