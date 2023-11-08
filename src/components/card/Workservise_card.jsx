import PropTypes from 'prop-types';

const Workservise_card = ({img, step, discrip}) => {
  return (
    <div className="card w-[300px] sm:w-[270px] md:w-[258px] lg:w-[240px] h-72 sm:h-[300px] hover:border-red-500  border overflow-hidden bg-slate-200 m-0 shadow-xl">
      <div className=" flex flex-col h-full pb-5 items-center justify-between  ">
        <div>
          <figure className=" py-7 sm:pb-5 ">
            <div className=" bg-gray-700 bg-opacity-50 p-3 rounded-full flex justify-center items-center text-white  ">
              <img className=" w-[45px] " src={img} alt="" />
            </div>
          </figure>
        </div>
        <div className="flex flex-col h-full px-5  gap-4 items-center text-center">
          <h2 className="card-title font-DMSans text-3xl ">{step}</h2>
          <p className=" font-DMSans text-base font-bold ">{discrip}</p>
        </div>
      </div>
    </div>
  );
};



export default Workservise_card;

Workservise_card.propTypes = {
    img: PropTypes.node,
    step: PropTypes.string,
    discrip: PropTypes.string,
}