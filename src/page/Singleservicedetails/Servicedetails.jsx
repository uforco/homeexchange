
import { useParams } from 'react-router-dom';
import Amenities from './../../components/othercompo/Amenities';
import Faq from './../../components/othercompo/Faq';
import Servicedescription from './../../components/othercompo/Servicedescription';
import Singleserviceavator from './../../components/othercompo/Singleserviceavator';
import BookingPopup from './../../components/othercompo/BookingPopup';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useState } from 'react';
import  Lottie  from 'react-lottie';
import LoaderAmnite from "../../assets/icons/LoaderAmnite.json"
import { Toaster } from 'react-hot-toast';



const Servicedetails = () => { 
    const [data, setData] = useState(null)
    const [isLoad, setIsload] = useState(true)
    const {id} = useParams()
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: LoaderAmnite,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }
   useEffect(()=>{
        axios.get(`/singelservice/${id}`)
        .then(res => {
            axios.get(`/prividerallservices/${res.data.providerEmail}`)
                .then(pas => {
                    // console.log(pas.data.prividerservice)
                    if(pas.data){
                        setData({...res.data, allservice: pas.data.prividerservice})
                        setIsload(false)
                    }
                })
            console.log(res)
        })
   },[])


 


//   console.log(data)


    return (
        isLoad? 
            <div className='w-full h-[500px] xl:container border-x mx-auto overflow-hidden flex justify-center items-center' >
            <div>
            <Lottie options={defaultOptions}
                height={200}
                width={200}/>
            </div>
        </div>
        :
        <div className="  w-full pt-2 ">
            <Toaster></Toaster>
            <div className="w-full xl:container border-x mx-auto overflow-hidden" >
                <div className=' border-b ' >
                    <div className=" w-full flex justify-center items-center " >
                        <div>
                            <div className="w-full border-b overflow-hidden" >
                                <div className="flex h-auto lg:h-72 overflow-hidden justify-center items-center " >
                                    <div className=" h-auto  " >
                                        <img className='object-cover'  src={data?.servicePhoro} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className=" mt-1 " >
                                <div className=" flex flex-col lg:flex-row justify-between items-start " >
                                    <div className=" border-r w-full lg:w-9/12 " >
                                        <div className=" px-10 " >
                                            <Servicedescription datainfo={data} ></Servicedescription>
                                            <Amenities></Amenities>
                                            <Faq></Faq>
                                        </div>
                                    </div>
                                    <div className=" px-4 w-full lg:w-3/12  border-l-0 overflow-hidden " >
                                        <Singleserviceavator data={data} ></Singleserviceavator>
                                        <BookingPopup data={data}  ></BookingPopup>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* slider with this provider services */}
                </div>
            </div>
        </div>
    );

};

export default Servicedetails;