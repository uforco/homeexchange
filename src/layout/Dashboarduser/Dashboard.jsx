import Dashbordmanu from "./../../components/Dashbord_compo/Dashbordmanu";
import { Outlet } from "react-router-dom";
const Dashboard = () => {


  



  return (
    <div className=" w-full " >
      <div className=" w-full border 2xl:container mx-auto ">
        <div className=" h-screen w-full overflow-hidden ">
          <div className=" flex w-full ">
            <div className=" h-screen">
              <Dashbordmanu></Dashbordmanu>
            </div>
            <div className=" w-full z-20 bg-white overflow-hidden ">
              <div className="h-screen w-full border-l " >
                <div className=" w-full h-full " >
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
