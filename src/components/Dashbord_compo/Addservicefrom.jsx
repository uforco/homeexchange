const Addservicefrom = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="username"
          >
            Service Name
          </label>
          <input
            id="ServiceName"
            name="ServiceName"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-800 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring bg-opacity-80 "
          ></input>
        </div>

        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="Servicephoro"
          >
            Service Phoro Url
          </label>
          <input
            id="Servicephoro"
            name="Servicephoro"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-800 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none bg-opacity-80 focus:ring"
          ></input>
        </div>

        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="ServiceAria"
          >
            Service Aria
          </label>
          <input
            id="ServiceAria"
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
            htmlFor="ServiseDescription"
          >
            Servise Description
          </label>
          <textarea
            id="ServiseDescription"
            name="ServiseDescription"
            type="text"
            className="block h-28 w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-800 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none bg-opacity-80 focus:ring"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Addservicefrom;
