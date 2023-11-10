import { DatePickerInput } from "rc-datepicker";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "rc-datepicker/lib/style.css";
import Lottie from "react-lottie";
import tarveltaime from "../../assets/icons/tarveltaime.json"
import { Link } from "react-router-dom";

const BookingPopup = () => {

    const [travelform, setForm] = useState(null)
    const formtime = (jsDate, dateString) => {
        setForm(dateString.toString().slice(0, 10))
      };
    const [travleTo, setTravleto] = useState(null)
    const totime = (jsDate, dateString) => {
        setTravleto(dateString.toString().slice(0, 10))
      };

      const defaultOptions =  {
        loop: true,
        autoplay: true, 
        animationData: tarveltaime,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }

      console.log(travelform, travleTo)
    return (
        <div className=" w-full flex flex-col justify-start items-center h-[400px] " >
            <div>
            <Lottie options={defaultOptions}
                height={80}
                width={80}/>
            </div>
            <div className=" w-full flex flex-col justify-between items-center gap-2 " >
                <DatePickerInput
                    onChange={formtime}
                    placeholder="tavel start"
                    className=" w-full my-custom-datepicker-component"/>
                <DatePickerInput
                    onChange={totime}
                    placeholder="tavel end"
                    className=" w-full my-custom-datepicker-component"/>
            </div>
            <div className=" px-3 mt-12 w-full " >
                    <Link to="" >
                        <p className=" w-full text-center py-2 hover:bg-amber-600 font-medium bg-amber-500 " >Booking Service</p>
                    </Link>
            </div>
        </div>
    );
};

export default BookingPopup;