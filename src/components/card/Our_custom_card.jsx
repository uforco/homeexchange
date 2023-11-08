'use client';
import { Card, Avatar } from 'flowbite-react';
import { PropTypes } from 'prop-types';
const Our_custom_card = ({data}) => {

    const { title, description, avatarImg, avatarName, avatarLocation } = data


  return (
    <div>
      <div >
        <Card href="#" className="max-w-sm md:h-[310px] shadow-lg shadow-slate-300 md:w-[290px] overflow-hidden hover:scale-105 transition-all  hover:bg-gradient-to-tl from-slate-400/10 via-slate-100 via-30% to-white to-90% hover:border-slate-50 ">
          <div>
            <h5 className="text-xl mb-3 font-bold tracking-tight text-red-600">
              {title}
            </h5>
            <p className="font-normal font-DMSans text-gray-700 ">
              {description}
            </p>
          </div>
          <hr />
          <div>
            <Avatar img={avatarImg} rounded>
              <div className="space-y-1 font-medium ">
                <div>{avatarName}</div>
                <div className="text-sm text-gray-500 ">
                  {avatarLocation}
                </div>
              </div>
            </Avatar>
          </div>
        </Card>
      </div>
    </div>
  );
};

Our_custom_card.propTypes = {
    data: PropTypes.object
}

export default Our_custom_card;
