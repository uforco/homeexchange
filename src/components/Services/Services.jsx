const Services = () => {
  return (
    <div className=" overflow-hidden " >
      <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className=" relative " >
            <img
            className="w-full h-52 rounded-t-xl"
            src="https://i.ibb.co/cXc7TwP/ab-info3.jpg"
            alt="Image Description"
            ></img>
            <div className=" absolute w-full  bg-black bg-opacity-40 bottom-0 right-0 " >
                <div className=" p-2 backdrop-blur-sm " >
                    <div className="flex-shrink-0 group block">
                        <div className="flex flex-row-reverse items-center">
                            <img className="inline-block flex-shrink-0 h-14 w-14 border-2 border-gray-500 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                            <div className="ms-3 text-right pr-4 ">
                                <h3 className="font-semibold text-lg text-white">Mark Wanner</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Card title
          </h3>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Some quick example text to build on the card title and make up the
            bulk of the {"card's"} content.
          </p>
          <p className="mt-5 text-xs text-gray-500 dark:text-gray-500">
            Last updated 5 mins ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
