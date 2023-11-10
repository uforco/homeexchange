import { useState } from "react";
import Lottie from "react-lottie";
import tarveltaime from "../../assets/icons/tarveltaime.json"
import success from "../../assets/icons/successfully.json"
import 'react-datepicker/dist/react-datepicker.css'
import ReactDatePicker from "react-datepicker";
import { PropTypes } from 'prop-types';
import toast from "react-hot-toast";
import Contextdata from "../../hooks/Contexthook";
import axios from "axios";

const BookingPopup = ({data}) => {
  const {User} = Contextdata() 
  const defaultOptions = (e) => ({
    loop: true,
    autoplay: true, 
    animationData: e,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  })
    // const [todate, setTodate] = useState(new Date())
      const [formdate, setFormdate] = useState(new Date())
    // tarvelform
      const[ tarvelform, settarvelform ] = useState(null)
      const tftime = (date) => {
          setFormdate(date)
          settarvelform(date.toString().slice(4, 15))
      }
    // tarvelTo
      // const[ tarvelto, settarvelto ] = useState(null)
      // const tttime = (date) => {
      //   setTodate(date)
      //   settarvelto(date.toString().slice(3, 15))
      // }
        console.log(tarvelform)


      // booking system
      const booking = () => {
            if(tarvelform === null){
              return toast("Set Your Travel Time",{
                icon: <Lottie options={defaultOptions(tarveltaime)}
                height={70}
                width={70}/>
              })
            }
            const d = new Date(),
            months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            const bookingDate = months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()
        
            const bookingdata = {
              serviceID: data._id,
              serviceAria: data.serviceAria,
              serviceName: data.serviceName,
              servicePhoto: data.servicePhoro,
              servicePrice: data.servicePrice,
              providerEmail: data.providerEmail,
              customerName : User.displayName,
              customerEmail : User.email,
              bookingDate, tarvelDate: tarvelform,
              bookingStatus: "pendding" 
            }
            axios.post("/booking", bookingdata)
              .then(res => {
                console.log(res.data.acknowledged)
                if(res.data.acknowledged){
                  settarvelform(null)
                  toast("Your Service Book Success",{
                    icon: <Lottie options={defaultOptions(success)}
                    height={60}
                    width={60}/>
                  })
                }
              })
            // console.log(data, User)
            // console.log(bookingdata)
            // console.log(bookingdata)
          }






    return (
        <div className=" w-full flex flex-col justify-start items-center h-[400px] " >
            <div>
            <Lottie options={defaultOptions(tarveltaime)}
                height={80}
                width={80}/>
            </div>
            <div className=" w-full flex flex-col justify-between items-center gap-2 " >
                  <ReactDatePicker
                    selected={formdate}
                    onChange={date => tftime(date) }
                    placeholderText={`tavel start ${formdate}`}
                    filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
                    showYearDropdown // year show and scrolldown alos
                    scrollableYearDropdown
                  />
            </div>
            <div className=" px-3 mt-12 w-full " >
                  {
                      <button onClick={booking} className=" w-full text-center py-2 hover:bg-amber-600 font-medium bg-amber-500 " >
                        Booking Service
                      </button>
                  }
            </div>
        </div>
    );
};

BookingPopup.propTypes = {
  data: PropTypes.object
}

export default BookingPopup;