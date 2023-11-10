
import axios from 'axios';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Contextdata from '../../hooks/Contexthook';
import toast from 'react-hot-toast';
import Lottie from 'react-lottie';
import animationData from "../../assets/icons/Animation-addservice2.json"

const Bookingserviceitem = ({data}) => {
    const defaultOptions = (e) => ( {
        loop: false,
        autoplay: true, 
        animationData: e,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      })
    const {setUpdate} = Contextdata()
    // console.log(data)
    // const {servicePhoto, serviceName, servicePrice,
    //     bookingDate, tarvelDate, serviceID,
    //     bookingStatus  bookingStatus} = data
    const deletebooking = () =>{
        axios.delete(`/deletebooking/${data?._id}`)
            .then(res => {
                if(res.data.acknowledged){
                     toast("your service Booking Delete Done", {
                            icon: <Lottie options={defaultOptions(animationData)}
                            height={50}
                            width={50}/>
                        })
                    setUpdate("deletebooking")
                }
            })
    }

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
                {data?.serviceName}
            <br />
            <span className="badge badge-ghost p-2 badge-sm">
                $ {data?.servicePrice}
            </span>
            </div>
          </div>
        </td>
        <td>{data?.tarvelDate}</td>
        <td><span className=' bg-amber-500 text-black rounded-full font-semibold capitalize p-1 px-2 ' >
            {data?.bookingStatus}
            </span>
        </td>
        <td>
            <Link to={`/servicedetails/${data?.serviceID}`} >
                <button className="btn btn-ghost btn-xs">details</button>
            </Link>
        </td>
        <th>
          <button onClick={deletebooking} className="btn hover:bg-red-600 capitalize hover:text-white btn-xs">Delete</button>
        </th>
      </tr>
    </>
  );
};

Bookingserviceitem.propTypes = {
    data: PropTypes.object
}


export default Bookingserviceitem;
