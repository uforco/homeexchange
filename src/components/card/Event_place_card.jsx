import PropTypes from "prop-types";
const Event_place_card = ({ infodata }) => {

    const {img, title, descrip} = infodata

  return (
    <div>
      <div className="flex h-auto sm:h-[400px] md:h-auto lg:h-[418px] xl:h-auto flex-col hover:scale-105 cursor-pointer transition-all overflow-hidden hover:border-gray-200 bg-gray-200 border border-white shadow-lg rounded-xl ">
        <img
          className="w-full h-auto rounded-t-xl"
          src={img}
          alt="Image Description"
        ></img>
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold ">{title}</h3>
          <p className="mt-1 ">
            {descrip}
          </p>
        </div>
      </div>
    </div>
  );
};

Event_place_card.propTypes = {
    infodata: PropTypes.object,
};

export default Event_place_card;
