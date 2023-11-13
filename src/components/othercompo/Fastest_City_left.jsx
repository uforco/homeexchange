import { PropTypes } from "prop-types";
const Fastest_City_left = ({ leftsite }) => {
  const { img1, img2, img3 } = leftsite;

  return (
    <div className=" w-full grid grid-cols-5 grid-flow-row gap-5">
      <div className="  overflow-hidden row-span-2 col-span-3 ">
        <div className=" pb-8 ">
          <img className=" rounded-lg w-full" src={img1} alt="" />
        </div>
      </div>
      <div className=" rounded-lg overflow-hidden row-span-1 col-span-2 ">
        <div className=" w-full h-full flex items-end  ">
          <img className=" rounded-lg " src={img2} alt="" />
        </div>
      </div>
      <div className=" rounded-lg overflow-hidden row-span-1 col-span-2 ">
        <div className=" w-full h-full flex items-end  ">
          <img className=" rounded-lg h-full " src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

Fastest_City_left.propTypes = {
  leftsite: PropTypes.object,
};

export default Fastest_City_left;
