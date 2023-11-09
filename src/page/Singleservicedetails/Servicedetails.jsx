
import { useParams } from 'react-router-dom';
import Amenities from './../../components/othercompo/Amenities';
import Faq from './../../components/othercompo/Faq';
import Servicedescription from './../../components/othercompo/Servicedescription';
import Singleserviceavator from './../../components/othercompo/Singleserviceavator';
import BookingPopup from './../../components/othercompo/BookingPopup';
// import { useState } from 'react';


const Servicedetails = () => {

    const {id} = useParams()
    console.log(id)

 

    return (
        <div className="  w-full pt-2 ">
            <div className="w-full xl:container border-x mx-auto overflow-hidden" >
                <div className=' border-b ' >
                    <div className=" w-full flex justify-center items-center " >
                        <div>
                            <div className="w-full overflow-hidden" >
                                <div className="flex h-auto lg:h-72 overflow-hidden justify-center items-center " >
                                    <div className=" h-auto " >
                                        <img  src="https://i.ibb.co/WptZR3W/footer5.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className=" mt-1 " >
                                <div className=" flex flex-col lg:flex-row justify-between items-start " >
                                    <div className=" border-r w-full lg:w-9/12 " >
                                        <div className=" px-10 " >
                                            <Servicedescription></Servicedescription>
                                            <Amenities></Amenities>
                                            <Faq></Faq>
                                        </div>
                                    </div>
                                    <div className=" px-4 w-full lg:w-3/12  border-l-0 overflow-hidden " >
                                        <Singleserviceavator></Singleserviceavator>
                                        <BookingPopup  ></BookingPopup>
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