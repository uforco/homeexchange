
import { useTypewriter } from "react-simple-typewriter";
import bennar from "../../assets/images/banner/unsplash.jpg"
import { Link } from 'react-router-dom';
const Bannerhero = () => {
  const [text] = useTypewriter({
    words: ["Global Travel", "Home Swaps", "Fast Exchange", "Made", "Easy Travel"],
    loop: 0
  })
    return (
    <div  >
      <div className=" bg-base-200 ">
        <div className="">
          <div className=" relative ">
            <div>
              <img className=" w-full 2xl:h-[900px] " src={bennar} alt="" />
            </div>
            <div className=" absolute top-0 bg-black bg-opacity-70 left-0 overflow-hidden right-0 w-full h-full  ">
              <div className=" w-full h-full p-4 sm:p-16 flex justify-center items-center ">
                <div className=" overflow-hidden text-center ">
                  <h2 className=" text-base text-white sm:text-4xl my-3 font-playfairDisplay ">
                    Home Exchange community in the world <br />
                     {/* <span className=" text-2xl sm:text-6xl " > 1 </span> */}
                        {/* home exchange community in the world */}
                        {/* Elevate Your Living Experience Through Effortless and Global Home Swaps */}
                        <span className=" pt-3 " >{text}</span>
                  </h2>
                  <div>
                    <div className=" flex gap-3 sm:gap-6 mt-2 sm:mt-7 justify-center ">
                      <Link to="/services" >
                        <button className=" font-medium px-4 p-2 sm:px-6 sm:p-3 text-xs sm:text-base font-DMSans border text-white bg-transparent border-white rounded-full  hover:text-white hover:bg-[#AD343E] hover:border-[#AD343E]">
                          Explore Services
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Bannerhero;