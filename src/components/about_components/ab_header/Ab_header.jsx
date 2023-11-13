import Leftsite_img from "./Leftsite_img";
import Rightsite from "./Rightsite";
const Ab_header = () => {
  return (
    <div className="bg-base-300">
      <div className=" w-full overflow-hidden xl:container p-0 xl:mx-auto ">
        <div className=" px-6 pb-10 sm:pb-2 sm:px-12 md:px-8 lg:px-12 ">
          <div>
            <div className=" w-full py-16 gap-16 sm:gap-20 flex flex-col-reverse lg:flex-row justify-between ">
              <div className=" lg:w-1/2 ">
                <Leftsite_img></Leftsite_img>
              </div>
              <div className=" lg:w-1/2 ">
                <Rightsite></Rightsite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ab_header;
