import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import tarveltaime from "../../assets/icons/tarveltaime.json";
import bookinglist from "../../assets/icons/bookingdone.json";
import success from "../../assets/icons/successfully.json";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import { PropTypes } from "prop-types";
import toast from "react-hot-toast";
import Contextdata from "../../hooks/Contexthook";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookingPopup = ({ data }) => {
  const { User, setUpdate } = Contextdata();
  const defaultOptions = (e) => ({
    loop: true,
    autoplay: true,
    animationData: e,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });

  const [boogkoff, setBookoff] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/bookingexhaust?customerEmail=${User?.email}&serviceID=${id}`)
      .then((res) => {
        setBookoff(res.data.exhaust);
        // console.log(res.data.exhaust)
      });
  }, [User, id, boogkoff]);
  console.log(boogkoff);

  const [formdate, setFormdate] = useState(new Date());
  // tarvelform
  const [tarvelform, settarvelform] = useState(null);
  const tftime = (date) => {
    setFormdate(date);
    settarvelform(date.toString().slice(4, 15));
  };

  // chackbooking
  const chackbooking = () => {
    toast("Already booked! check your booking List", {
      icon: (
        <Lottie options={defaultOptions(bookinglist)} height={70} width={70} />
      ),
    });
  };

  // booking system
  const booking = () => {
    if (tarvelform === null) {
      return toast("Set Your Travel Time", {
        icon: (
          <Lottie
            options={defaultOptions(tarveltaime)}
            height={70}
            width={70}
          />
        ),
      });
    }
    const d = new Date(),
      months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    const bookingDate =
      months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();

    const bookingdata = {
      serviceID: data._id,
      serviceAria: data.serviceAria,
      serviceName: data.serviceName,
      servicePhoto: data.servicePhoro,
      servicePrice: data.servicePrice,
      providerEmail: data.providerEmail,
      customerName: User.displayName,
      customerEmail: User.email,
      bookingDate,
      tarvelDate: tarvelform,
      bookingStatus: "pending",
    };
    axios.post("/booking", bookingdata).then((res) => {
      console.log(res.data.acknowledged);
      if (res.data.acknowledged) {
        settarvelform(null);
        setBookoff(false);
        toast("Your Service Book Success", {
          icon: (
            <Lottie options={defaultOptions(success)} height={60} width={60} />
          ),
        });
        setUpdate("update");
      }
    });
    // console.log(data, User)
    // console.log(bookingdata)
    // console.log(bookingdata)
  };

  return (
    <div className=" w-full flex flex-col justify-start items-center h-[400px] ">
      <div>
        <Lottie options={defaultOptions(tarveltaime)} height={80} width={80} />
      </div>
      <div className=" w-full flex flex-col justify-between items-center gap-2 ">
        <ReactDatePicker
          selected={formdate}
          onChange={(date) => tftime(date)}
          placeholderText={`tavel start ${formdate}`}
          filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
          showYearDropdown // year show and scrolldown alos
          scrollableYearDropdown
        />
      </div>
      <div className=" px-3 mt-12 w-full ">
        {boogkoff ? (
          <button
            onClick={booking}
            className=" w-full text-center py-2 hover:bg-amber-600 font-medium bg-amber-500 "
          >
            Booking Service
          </button>
        ) : (
          <button
            onClick={chackbooking}
            className=" w-full text-center py-2 font-medium bg-amber-900 "
          >
            Booking Service
          </button>
        )}
      </div>
    </div>
  );
};

BookingPopup.propTypes = {
  data: PropTypes.object,
  servideid: PropTypes.string,
};

export default BookingPopup;
