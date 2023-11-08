import CountUp from "react-countup";


const Ab_info_right = () => {
    return (
        <div>
            <div className=" flex flex-col gap-10 sm:gap-4 lg:gap-8 px-0 lg:px-5 " >
                <h2 className=" font-playfairDisplay text-4xl sm:text-2xl lg:text-5xl font-semibold " >Instantly swap homes, immerse in city living</h2>
                <p className=" font-semibold sm:font-normal md:font-semibold " >Embrace a world of possibilities. Swap homes effortlessly, unlock unique travel experiences, and redefine the way you stay. Join today!</p>
                <div className=" flex justify-center items-center " >
                    <div className=" w-[300px] lg:w-[370px] overflow-hidden " >
                        <div className=" grid grid-cols-2 gap-5 " >
                            <div className=" overflow-hidden rounded-md bg-white border border-gray-300 " ><div className=" w-full flex flex-col-reverse font-DMSans justify-center items-center font-medium p-5 text-gray-900/80 " > <p className=" text-base " >Locations</p><span className=" font-playfairDisplay text-4xl mb-3 font-semibold "  > <CountUp end={86} enableScrollSpy />   </span> </div></div>
                            <div className=" overflow-hidden rounded-md bg-white border border-gray-300 " ><div className=" w-full flex flex-col-reverse font-DMSans justify-center items-center font-medium p-5 text-gray-900/80 " > <p className=" text-base " >Founded</p><span className=" font-playfairDisplay text-4xl mb-3 font-semibold " >20<CountUp end={23} enableScrollSpy /> </span> </div></div>
                            <div className=" overflow-hidden rounded-md bg-white border border-gray-300 " ><div className=" w-full flex flex-col-reverse font-DMSans justify-center items-center font-medium p-5 text-gray-900/80 " > <p className=" text-base " >Members</p><span className=" font-playfairDisplay text-4xl mb-3 font-semibold " > <CountUp end={65} enableScrollSpy /> +</span> </div></div>
                            <div className=" overflow-hidden rounded-md bg-white border border-gray-300 " ><div className=" w-full flex flex-col-reverse font-DMSans justify-center items-center font-medium p-5 text-gray-900/80 " > <p className=" text-base " >Satisfied</p><span className=" font-playfairDisplay text-4xl mb-3 font-semibold " > <CountUp end={100} enableScrollSpy /> %</span> </div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Ab_info_right;