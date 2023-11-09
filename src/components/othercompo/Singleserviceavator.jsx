import Lottie from "react-lottie";
import img from "../../assets/icons/medal.png"
import { AiFillStar } from "react-icons/ai";
import amint from "../../assets/icons/Animation-addservice2.json" 

const Singleserviceavator = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: amint,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }
    return (
        <div className=" p-3 pt-0 " >
            <div className=" w-full " >
                <div className="  border-b " >
                    <div className="flex items-center py-10 gap-x-2">
                        <div className="relative">
                            <img className="object-cover w-16 h-16 rounded-full ring ring-gray-300 dark:ring-gray-600" 
                            src="https://i.ibb.co/KVgv6Yh/author10-1.jpg" alt=""></img>
                            <span className="absolute -bottom-4 -right-3  rounded-full ">
                                <img className=" w-10 " src={img} alt="" />
                            </span>
                        </div>
                        <div className=" px-3 " >
                            <h1 className="text-2xl font-DMSans font-semibold text-gray-700 capitalize dark:text-white">
                                Mia John
                            </h1>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                23 Services
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" my-5 flex justify-start gap-4 items-center " >
                    <ul className=" justify-start text-lg flex text-amber-500 " >
                        <li><AiFillStar></AiFillStar></li>
                        <li><AiFillStar></AiFillStar></li>
                        <li><AiFillStar></AiFillStar></li>
                        <li><AiFillStar></AiFillStar></li>
                    </ul>
                    <h2 className=" font-semibold text-sm " >
                        23 exchage
                    </h2>
                </div>

                <div className=" flex flex-col gap-3 " >
                    <div className=" flex justify-start gap-3 items-center " >
                        <span>
                            <Lottie options={defaultOptions}
                            height={28}
                            width={28}/>
                        </span>
                        <p className=" font-medium " >ID and proof of address verified</p>
                    </div>
                    <div className=" flex justify-start gap-3 items-center " >
                        <span>
                            <Lottie options={defaultOptions}
                            height={28}
                            width={28}/>
                        </span>
                        <p className=" font-medium " >Telephone number verified</p>
                    </div>
                    <div className=" flex justify-start gap-3 items-center " >
                        <span>
                            <Lottie options={defaultOptions}
                            height={28}
                            width={28}/>
                        </span>
                        <p className=" font-medium " >Email address verified</p>
                    </div>
                </div>

                <div className=" py-4 font-medium " >
                    <p>
                        Start exchanging your home! Create a HomeExchange account to start contacting members.
                    </p>
                </div>

                
            </div>
        </div>
    );
};

export default Singleserviceavator;