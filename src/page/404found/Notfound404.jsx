
import Loader from './../../components/othercompo/Loader';
import notfound from "../../assets/icons/found404.json"
import { useNavigate } from 'react-router-dom';
const Notfound404 = () => {

    const navigeate = useNavigate()

    return (
        <div className=" flex justify-center items-center w-full h-screen overflow-hidden " >
            <div className=' relative ' >
                <div className=' -z-10 ' >
                    <Loader name={notfound} wh={300} ></Loader>
                </div>
                <div className=' absolute z-40 left-1/2 top-3/4 -translate-x-1/2  ' >
                    <button className=' btn px-6 py-2 rounded-lg text-white hover:text-black bg-[#373D60] font-DMSans font-bold ' onClick={()=> navigeate(-1)} >Go back</button>
                </div>
            </div>
        </div>
    );
};

export default Notfound404;