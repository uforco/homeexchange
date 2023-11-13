import { Outlet } from "react-router-dom";
import Drawer_side from "./Drawer_side";
import Header from "./Header";
import Navber from "./Navber";
import Footers from "./../../components/footercompo/Footers";
import { ToastContainer } from "react-toastify";

const Mainlayout = () => {
  return (
    <div className=" w-full ">
      <div>
        <Header></Header>
        <ToastContainer />
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content  flex flex-col">
            {/* Navbar */}
            <Navber></Navber>
            {/* Page content here */}
            <Outlet></Outlet>
            {/* Footer */}
            <Footers></Footers>
          </div>
          <Drawer_side></Drawer_side>
        </div>
      </div>
    </div>
  );
};

export default Mainlayout;
