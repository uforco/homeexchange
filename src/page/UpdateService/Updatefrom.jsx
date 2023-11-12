import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

const Updatefrom = ({privedata}) => {
  return (
    <>
        <div className=" flex flex-col xl:flex-row gap-5 justify-between items-center " >
          <div className=" w-full " >
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="username"
            >
              Service Name
            </label>
            <input
              id="ServiceName"
              defaultValue={privedata?.serviceName}
              name="ServiceName"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-800 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring bg-opacity-80 "
            ></input>
          </div>

          <div className=" w-full " >
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="Servicephoro"
            >
              Service Phoro Url
            </label>
            <div className=" flex  justify-between ">
              <input
                id="Servicephoro"
                defaultValue={privedata?.servicePhoro}
                name="Servicephoro"
                type="text"
                className="block  w-7/12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-800 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none bg-opacity-80 focus:ring"
              ></input>
              <div className="  w-4/12 overflow-hidden flex justify-between items-center ">
                <div className="  flex justify-center items-center ">
                  <Link target={"_blank"} to="https://imgbb.com" className=" text-xs font-semibold hover:bg-slate-400 p-1 px-6 rounded-md m-0 bg-slate-300 ">
                    {" "}
                    Upload
                  </Link>
                </div>
                <div>
                  <h2 className=" text-center text-xs font-semibold ">
                    {" "}
                    image <br /> 300x200{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="ServiceAria"
          >
            Service Aria
          </label>
          <input
            id="ServiceAria"
            defaultValue={privedata?.serviceAria}
            name="ServiceAria"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-800 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none bg-opacity-80 focus:ring"
          ></input>
        </div>

        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="ServicePrice"
          >
            Service Price
          </label>
          <input
            id="ServicePrice"
            defaultValue={privedata?.servicePrice}
            name="ServicePrice"
            type="number"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-800 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none bg-opacity-80 focus:ring"
          ></input>
        </div>
      </div>
      <div>
        <div className=" mt-8 ">
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="ServiceDescription"
          >
            Service Description
          </label>
          <textarea
            id="ServiceDescription"
            defaultValue={privedata?.serviceDescription}
            name="ServiceDescription"
            type="text"
            className="block h-44 scrollbar-hide w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-800 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none bg-opacity-80 focus:ring"
          ></textarea>
        </div>
      </div>
    </>
  );
};

Updatefrom.propTypes = {
    privedata: PropTypes.object
}


export default Updatefrom;
