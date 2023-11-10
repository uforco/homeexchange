import PropTypes from "prop-types";

const Servicedescription = ({ datainfo }) => {
  console.log(datainfo);

  return (
    <div className=" mb-8 ">
      <div>
        <h3 className=" text-4xl mt-4 py-3 font-medium font-DMSans border-b-2 ">
          {datainfo?.serviceName}
        </h3>
        <p className=" my-3  ">
          <h2 className=" text-3xl py-5 pb-0 font-semibold font-DMSans ">
            Description
          </h2>
        </p>
      </div>
      <div>
        <p>{datainfo?.serviceDescription}</p>
      </div>
    </div>
  );
};

Servicedescription.propTypes = {
  datainfo: PropTypes.object,
};

export default Servicedescription;
