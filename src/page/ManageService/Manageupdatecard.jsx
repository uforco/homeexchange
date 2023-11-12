// import axios from "axios";
import axios from 'axios';
import { PropTypes } from 'prop-types';
import toast from 'react-hot-toast';
import Lottie from 'react-lottie';
import { Link } from "react-router-dom";
import deleteS from "../../assets/icons/delete.json"
const Manageupdatecard = ({data, setUpdate}) => {
    const defaultOptions = (e) => ( {
        loop: false,
        autoplay: true, 
        animationData: e,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      })


    const deleteService = (e) => {
        axios.delete(`/manageservice/654d586519eab029b846326f`)
            .then(res => {
                if(res.data.mySdelete.acknowledged){
                    console.log(e)
                    setUpdate(e)
                    toast("Delete Service", {
                        position:"bottom-right",
                        icon: <Lottie options={defaultOptions(deleteS)}
                        height={50}
                        width={50}/>
                        
                      })
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
                  src={data?.servicePhoro}
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
        <td className=" text-center " >{data?.UploadTime}</td>
        <td className=' text-center ' >
            <Link to={`/servicedetails/${data?._id}`} >
                <button className="btn btn-ghost btn-xs">details</button>
            </Link>
        </td>
        <td>
            <div className=' flex justify-center items-center gap-5 ' >
                <button className=' btn bg-gray-200 hover:bg-cyan-400 btn-xs capitalize ' >update</button>
                <button onClick={()=>deleteService(data?._id)} className=' btn bg-gray-200 hover:bg-rose-500 btn-xs capitalize  ' >delete</button>
            </div>
        </td>
      </tr>
    </>
  );
};


Manageupdatecard.propTypes = {
    data: PropTypes.object,
    setUpdate: PropTypes.func
}
export default Manageupdatecard;