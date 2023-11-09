const Faq = () => {
  return (
    <div className=" mb-8 " >
        <div>
                <p className=" border-t my-3  " >
                    <h2 className=" text-3xl py-5 font-semibold font-DMSans ">
                        Frequently asked questions {"(FAQ)"}
                    </h2>
                </p>
        </div>
        <div>
            <div>
                <div
                    tabIndex={0}
                    className="collapse rounded-sm border "
                >
                    <div className="collapse-title text-xl font-medium">
                        Is this accommodation suitable for remote workers?
                    </div>
                    <div className="collapse-content">
                    <p>Yes, this accommodation has a wifi connection. We recommend that you discuss this with the host to ensure that the connection speed is sufficient for your needs.</p>
                    </div>
                </div>
            </div>

            <div>
                <div
                    tabIndex={0}
                    className="collapse rounded-sm border "
                >
                    <div className="collapse-title text-xl font-medium">
                        Is there a parking space for this accommodation?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, this accommodation has one or more parking spaces.</p>
                    </div>
                </div>
            </div>

            <div>
                <div
                    tabIndex={0}
                    className="collapse rounded-sm border "
                >
                    <div className="collapse-title text-xl font-medium">
                        How many rooms for sleeping are there in this accommodation?
                    </div>
                    <div className="collapse-content">
                    <p>This accommodation has 3 bedrooms.</p>
                    </div>
                </div>
            </div>

            <div>
                <div
                    tabIndex={0}
                    className="collapse rounded-sm border "
                >
                    <div className="collapse-title text-xl font-medium">
                         What is the surface area of this accommodation?
                    </div>
                    <div className="collapse-content">
                        <p>The surface of this accommodation is 220m2.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Faq;
