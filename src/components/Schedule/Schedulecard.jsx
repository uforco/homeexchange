import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
import axios from "axios";

const Schedulecard = ({data}) => {

    const bookingstatus = (e) => {
        const cdata = { bookingid: data?._id, bookingStatus: e.target.value}
        axios.put("/schedulestatus", cdata)
            .then(res => console.log(res.data))
    }
    console.log(data)


      return (
    <>
      <tr>
        <td className=" pb-6 sm:pb-1" >
          <div className="flex items-center space-x-3">
            <div className=" hidden sm:avatar">
              <div className="  mask mask-squircle w-12 h-12">
                <img
                  src={data?.servicePhoto}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div >
                <span className="font-DMSans" >{data?.serviceName}</span>
            <br />
            <span className="badge badge-ghost p-2 badge-sm">
                $ {data?.servicePrice}
            </span>
            </div>
          </div>
        </td>
        <td>{data?.customerName}</td>
        <td>
            <p className='capitalize mb-1 font-medium font-DMSans ' >
              Service Date : {data?.tarvelDate}
            </p>
            <p className='capitalize font-DMSans ' >
              Booking Date : {data?.bookingDate? data?.bookingDate : "-----"}
            </p>
        </td>
        <td>
            <Link to={`/servicedetails/${data?.serviceID}`} >
                <button className="btn btn-ghost btn-xs">details</button>
            </Link>
        </td>
        <th>
            <select onChange={bookingstatus} defaultValue={"pending"} className=" capitalize text-sm p-1 px-3 rounded-lg focus:border-0 focus:border-white ">
                <option value="pending" className="px-2" >Pandding</option>
                <option value="accept" className="px-2" >Accept</option>
                <option value="reject" className="px-2" >Reject</option>
            </select>
        </th>
      </tr>
    </>
  );
};


Schedulecard.propTypes = {
    data: PropTypes.object
}

export default Schedulecard;