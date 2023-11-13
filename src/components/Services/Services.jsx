import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const Services = ({ data }) => {
  return (
    <div>
      <Link to={`/servicedetails/${data?._id}`}>
        <div className="   hover:scale-105 transition-all ">
          <div className="flex flex-col h-[400px] overflow-hidden bg-white border shadow-sm rounded-xl  transition-all  hover:bg-gradient-to-tl from-slate-400/10 via-slate-100 via-30% to-white to-90% hover:border-slate-50  ">
            <div className=" relative ">
              <img
                className="w-full h-52 rounded-t-xl"
                src={data?.servicePhoro}
                alt="Image Description"
              ></img>
              <div className=" absolute w-full  bg-black bg-opacity-20 bottom-0 right-0 ">
                <div className=" p-2 backdrop-blur-sm ">
                  <div className="flex-shrink-0 group block">
                    <div className="flex flex-row-reverse items-center">
                      <img
                        className="inline-block flex-shrink-0 h-14 w-14 border-2 border-gray-500 rounded-full"
                        src={data?.providerPhoto}
                        alt="provider img"
                      />
                      <div className="ms-3 text-right pr-4 ">
                        <h3 className="font-semibold text-lg text-white">
                          {data?.providerName}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 flex flex-col md:p-5">
              <div className=" h-[130px]  overflow-hidden">
                <h3 className="text-md pb-1 font-bold text-gray-800 dark:text-white">
                  {data?.serviceName.slice(0, 30)}
                </h3>
                <p className="mt-1   text-gray-500 font-semibold text-sm dark:text-gray-400">
                  {data?.serviceDescription.slice(0, 130)}
                </p>
              </div>
              <div className=" flex justify-between ">
                <p className="mt-2 flex-grow text-xs text-gray-500 dark:text-gray-500">
                  {data?.UploadTime}
                </p>
                <span className="mt-2 font-bold flex-grow text-xs text-center capitalize rounded-full overflow-hidden p-1 bg-slate-200 text-gray-500 dark:text-gray-500">
                  $ {data?.servicePrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Services.propTypes = {
  data: PropTypes.object,
};

export default Services;
