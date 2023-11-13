import Helmattitle from "../../components/othercompo/Helmattitle";
import Scheduleitem from "./../../components/Schedule/Scheduleitem";

const Myschedule = () => {
  return (
    <div className=" px-3 w-full h-full ">
      <Helmattitle title={"Home Exchage | Dashboard - Schedule"}></Helmattitle>
      <div className=" w-full h-full  ">
        <div className="px-1 pt-2 w-full h-full scrollbar-hide overflow-y-scroll">
          <Scheduleitem></Scheduleitem>
        </div>
      </div>
    </div>
  );
};

export default Myschedule;
