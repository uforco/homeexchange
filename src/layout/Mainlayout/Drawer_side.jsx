import Manu_item from "./Manu_item";
import { MdClose } from "react-icons/md";
import Smlogo from "./../../components/othercompo/Smlogo";
import Userphone from "./../../components/user/Userphone";
const Drawer_side = () => {
  return (
    <div className="drawer-side lg:hidden z-50">
      <div className="menu p-4 w-11/12 min-h-full gap-3 bg-base-200">
        {/* Sidebar content manu here */}
        <div>
          <div className=" flex justify-between items-center my-3 ">
            <Smlogo></Smlogo>
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            >
              <span className=" font-extrabold text-3xl ">
                <MdClose></MdClose>
              </span>
            </label>
          </div>
          <ul className=" flex flex-col gap-2 ">
            <Manu_item></Manu_item>
          </ul>
        </div>
        <div className=" w-full flex flex-grow items-end justify-end">
          <div className=" block sm:hidden w-full p-2 ">
            <Userphone></Userphone>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer_side;
