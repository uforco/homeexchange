import { useNavigate, useParams } from "react-router-dom";
import Updatefrom from "./Updatefrom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/othercompo/Loader";
import updatedata from "../../assets/icons/updatedata.json";
import Contextdata from "../../hooks/Contexthook";
import toast from "react-hot-toast";
import Lottie from "react-lottie";
import erroralt from "../../assets/icons/erroralt.json";
import animationData from "../../assets/icons/Animation-addservice2.json";
import Helmattitle from "../../components/othercompo/Helmattitle";
const Updateservice = () => {
  const { User } = Contextdata();
  const [privedata, setPrivedata] = useState(null);
  const Navigatems = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`/singelservice/${id}`).then((res) => {
      setPrivedata(res.data);
    });
  }, [id]);

  // Lottie animation system
  function defaultOptions(e) {
    return ({
      loop: false,
      autoplay: true,
      animationData: e,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });
  }
  //   update service system
  const Updateservicesystem = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.ServiceName.value;
    const servicePhoro = form.Servicephoro.value;
    const servicePrice = parseInt(form.ServicePrice.value);
    const serviceAria = form.ServiceAria.value;
    const serviceDescription = form.ServiceDescription.value;
    const providerName = User.displayName;
    const providerEmail = User.email;
    const providerPhoto = User.photoURL;

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
    const serviceUploadtime =
      months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();

    if (!serviceName) {
      return toast("fill this Service Name ", {
        icon: (
          <Lottie options={defaultOptions(erroralt)} height={70} width={70} />
        ),
      });
    }
    if (serviceName.length > 51) {
      return toast("Service Name must be max 50 characters", {
        icon: (
          <Lottie options={defaultOptions(erroralt)} height={70} width={70} />
        ),
      });
    }
    if (!servicePhoro) {
      return toast("Set your Service Phoro Url", {
        icon: (
          <Lottie options={defaultOptions(erroralt)} height={70} width={70} />
        ),
      });
    }
    if (!servicePrice) {
      return toast(" Add your Service Price ", {
        icon: (
          <Lottie options={defaultOptions(erroralt)} height={70} width={70} />
        ),
      });
    }
    if (!serviceAria) {
      return toast(" Add Your Service Aria ", {
        icon: (
          <Lottie options={defaultOptions(erroralt)} height={70} width={70} />
        ),
      });
    }
    if (!serviceDescription) {
      return toast(" Writing Your Servise Description ", {
        icon: (
          <Lottie options={defaultOptions(erroralt)} height={70} width={70} />
        ),
      });
    }

    const servicedel = {
      serviceName,
      servicePhoro,
      servicePrice,
      serviceAria,
      serviceDescription,
      providerName,
      providerEmail,
      providerPhoto,
      UploadTime: privedata?.UploadTime,
      update: serviceUploadtime,
    };
    axios.patch(`/updateservice/${privedata?._id}`, servicedel).then((res) => {
      if (res.data.resultb.acknowledged) {
        toast("Update successful", {
          icon: (
            <Lottie
              options={defaultOptions(animationData)}
              height={50}
              width={50}
            />
          ),
        });
        form.ServiceName.value = "";
        form.Servicephoro.value = "";
        form.ServicePrice.value = "";
        form.ServiceAria.value = "";
        form.ServiceDescription.value = "";
        Navigatems("/dashboard/manageservices");
      }
    });
  };

  return (
    <div>
      <Helmattitle
        title={"Home Exchage | Dashboard - Update service"}
      ></Helmattitle>
      {!privedata ? (
        <div className=" flex justify-center items-center w-full h-full overflow-hidden ">
          <div>
            <Loader name={updatedata} wh={300}></Loader>
          </div>
        </div>
      ) : (
        <div className=" relative w-full h-full ">
          <div className=" absolute -z-10 top-0 left-0 w-full h-full overflow-hidden flex justify-center items-center ">
            <div className=" relative after:absolute after:w-full after:h-full after:left-0 after:top-0 after:content-['']  after:bg-opacity-20 after:backdrop-blur-sm ">
              <img
                src="https://i.ibb.co/rxGwM85/undraw-Updates-re-o5af.png"
                alt=""
              />
            </div>
          </div>
          <div className=" overflow-y-scroll scrollbar-hide w-full h-full py-2 ">
            <div>
              <div>
                <section className=" p-6 mx-auto rounded-md ">
                  <h2 className="text-3xl pb-6 font-semibold text-gray-700 capitalize dark:text-white">
                    Update Your Service
                  </h2>
                  <form onSubmit={Updateservicesystem}>
                    <Updatefrom privedata={privedata}></Updatefrom>
                    <div className="flex justify-end mt-6">
                      <button
                        type="submit"
                        className=" z-10 px-8 py-2.5 leading-5 text-black font-medium transition-colors duration-300 transform bg-cyan-500 rounded-md hover:bg-cyan-400 focus:outline-none  focus:bg-green-500"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Updateservice;
