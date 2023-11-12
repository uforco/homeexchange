import axios from "axios";
import { useEffect, useState } from "react";
import Contextdata from "../../hooks/Contexthook";
import Manageupdatecard from "./Manageupdatecard";
import loaderd from "../../assets/icons/LoaderAmnite.json";
import Loader from "../../components/othercompo/Loader";
import nodata from "../../assets/icons/datanotfound.json"
const ManageServices = () => {
  const { User } = Contextdata();
  const [providerAllServices, setproviderAllServices] = useState(null);
  const [update, setUpdate] = useState(null);
  useEffect(() => {
    axios.get(`/manageservice/${User?.email}`).then((res) => {
      setproviderAllServices(res.data);
      // console.log(res.data.psData)
    });
  }, [User, update]);
  return !providerAllServices ? (
    <div className=" flex justify-center items-center w-full h-full overflow-hidden ">
      <div>
        <Loader name={loaderd} wh={100}></Loader>
      </div>
    </div>
  ) : providerAllServices?.length < 1 ? (
    <div className=" flex justify-center items-center w-full h-full overflow-hidden ">
      <div>
        <Loader name={nodata} wh={300}></Loader>
      </div>
    </div>
  ) : (
    <div className="overflow-y-scroll px-4 scrollbar-hide h-full w-full overflow-hidden">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className=" text-center ">Service Name</th>
            <th className=" text-center ">Upload Date</th>
            <th className=" text-center ">Last Update</th>
            <th className=" text-center ">Service Details</th>
            <th className=" text-center "></th>
          </tr>
        </thead>
        <tbody>
          {providerAllServices?.map((item, inx) => (
            <Manageupdatecard
              key={inx}
              data={item}
              setUpdate={setUpdate}
            ></Manageupdatecard>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>{/* see */}</tfoot>
      </table>
    </div>
  );
};

export default ManageServices;
