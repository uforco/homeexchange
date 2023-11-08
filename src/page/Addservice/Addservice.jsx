const Addservice = () => {
  return (
    <>
        <div className=" absolute -z-10 top-0 left-0 w-full h-full overflow-hidden flex justify-center items-center " >
            <div className=" relative after:absolute after:w-full after:h-full after:left-0 after:top-0 after:content-['']  after:bg-opacity-20 after:backdrop-blur-sm " >
                <img src="https://i.ibb.co/rxGwM85/undraw-Updates-re-o5af.png" alt="" />
            </div>
        </div>
      <div className=" overflow-y-scroll w-full h-full py-10 ">
        <div>
          <div>
            <section className=" p-6 mx-auto rounded-md ">
              <h2 className="text-3xl font-semibold text-gray-700 capitalize dark:text-white">
                Add Your Service
              </h2>

              <form>
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

                <div className="flex justify-end mt-6">
                  <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none  focus:bg-gray-700">
                    Save
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addservice;
