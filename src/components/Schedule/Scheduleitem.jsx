import Schedulecard from "./Schedulecard";
import axios from "axios";
import { useEffect, useState } from "react";
import Contextdata from "../../hooks/Contexthook";
const Scheduleitem = () => {
    const {User} = Contextdata()
    console.log(User?.email)
    const [bookingschedul, setBookingschedul] = useState(null)

  useEffect(()=>{
    axios.get(`/myschedule?providerEmail=${User?.email}`)
        .then(res =>{ 
            setBookingschedul(res.data)
        })
  },[User])

//   console.log(bookingschedul)

  return (
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead >
            <tr  >
              <th>Service Name</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Service Details</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody >
            {
               bookingschedul?.map((item, inx) => <Schedulecard key={inx} data={item} ></Schedulecard>)
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