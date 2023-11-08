import Fastest_City_left from "../../othercompo/Fastest_City_left";
import Ab_info_right from './Ab_info_right';

const Ab_information = () => {
    const leftsite = {
        img1 : "https://i.ibb.co/88qL18G/ab-info1.jpg",
        img2 : "https://i.ibb.co/XjnNxFg/ab-info2.jpg",
        img3 : "https://i.ibb.co/cXc7TwP/ab-info3.jpg",
    }
  return (
    <div>
      <div className=" px-4 sm:px-5 w-full xl:container mx-auto ">
        <div className=" my-20 ">
          <div className=" flex flex-col-reverse sm:flex-row-reverse justify-between gap-10 sm:gap-6 lg:gap-10 items-center ">
            <div className=" sm:w-1/2 ">
              <Fastest_City_left leftsite={leftsite} ></Fastest_City_left>
            </div>
            <div className=" sm:w-1/2 ">
              <Ab_info_right></Ab_info_right>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ab_information;
