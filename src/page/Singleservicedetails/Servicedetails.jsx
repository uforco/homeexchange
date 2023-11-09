
import Amenities from './../../components/othercompo/Amenities';
import Faq from './../../components/othercompo/Faq';
import Servicedescription from './../../components/othercompo/Servicedescription';
const Servicedetails = () => {
    return (
        <div className=" w-full  pt-2 ">
            <div className="w-full xl:container border-x mx-auto overflow-hidden" >
                <div className=' border-b ' >
                    <div className=" w-full flex justify-center items-center " >
                        <div>
                            <div className="w-full overflow-hidden" >
                                <div className="flex h-auto sm:h-72 overflow-hidden justify-center items-center " >
                                    <div className=" h-auto " >
                                        <img  src="https://i.ibb.co/WptZR3W/footer5.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className=" mt-1 " >
                                <div className=" flex justify-between items-center " >
                                    <div className=" border-r  w-9/12 " >
                                        <div className=" px-10 " >
                                            <Servicedescription></Servicedescription>
                                            <Amenities></Amenities>
                                            <Faq></Faq>
                                        </div>
                                    </div>
                                    <div className="    w-3/12 border-l-0 " >




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