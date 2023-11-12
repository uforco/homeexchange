import Schedulecard from "./Schedulecard";
import axios from "axios";
import { useEffect, useState } from "react";
import Contextdata from "../../hooks/Contexthook";
import Loader from "../othercompo/Loader";
import nodata from "../../assets/icons/datanotfound.json"
import loaderd from "../../assets/icons/LoaderAmnite.json";
const Scheduleitem = () => {
    const {User} = Contextdata()
    const [bookingschedul, setBookingschedul] = useState(null)
    const [Bookingstatus, setBookingstatus] = useState(null)
  useEffect(()=>{
    axios.get(`/myschedule?providerEmail=${User?.email}`)
        .then(res =>{ 
            setBookingschedul(res.data)
        })
  },[User,Bookingstatus])
//   console.log(bookingschedul)
  return (

    !bookingschedul ? 
      <div className=" flex justify-center items-center w-full h-full overflow-hidden ">
        <div>
          <Loader name={loaderd} wh={100}></Loader>
        </div>
      </div>
     : bookingschedul?.length < 1 ? 
      <div className=" flex justify-center items-center w-full h-full overflow-hidden ">
        <div>
          <Loader name={nodata} wh={300}></Loader>
        </div>
      </div>
     : 
      <div className="">
        <table className="table">
          {/* head */}
          <thead >
            <tr  >
              <th>Service Name</th>
              <th className=" hidden sm:block " >Customer Name</th>
              <th>Date</th>
              <th>Service Details</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody >
            {
               bookingschedul?.map((item, inx) => <Schedulecard key={inx} data={item} setBookingstatus={setBookingstatus} ></Schedulecard>)
            }
            
          </tbody>
          {/* foot */}
          <tfoot>
                {/* see */}
          </tfoot>
        </table>
      </div>
  );
};

export default Scheduleitem;