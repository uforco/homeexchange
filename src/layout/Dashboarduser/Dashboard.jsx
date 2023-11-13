import Dashbordmanu from "./../../components/Dashbord_compo/Dashbordmanu";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className=" relative w-full">
      <div className=" w-full border 2xl:container mx-auto ">
        <div className="  scrollbar-hide w-full overflow-hidden ">
          <div className=" flex w-full ">
            <div className=" h-[99vh] scrollbar-hide ">
              <Dashbordmanu></Dashbordmanu>
            </div>
            <div className=" w-full z-20 bg-white scrollbar-hide overflow-hidden ">
              <div className="h-[99vh] scrollbar-hide w-full border-l ">
                <div className=" w-full h-full ">
                  <Outlet></Outlet>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
