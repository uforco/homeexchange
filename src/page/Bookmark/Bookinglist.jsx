import Lottie from "react-lottie";
import booking from "../../assets/icons/booknow.json";
import Contextdata from "../../hooks/Contexthook";
import Bookingitem from "./../../components/Bookmark/Bookingitem";
import Helmattitle from "../../components/othercompo/Helmattitle";
const Bookinglist = () => {
  const defaultOptions = (e) => ({
    loop: true,
    autoplay: true,
    animationData: e,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });

  const { userbooklist } = Contextdata();
  // console.log(userbooklist?.lenght)

  return (
    <div className=" w-full ">
      <Helmattitle title={"Home Exchage | Booking details"}></Helmattitle>
      <div className=" mx-1 overflow-hidden w-full xl:container xl:mx-auto ">
        {!userbooklist || userbooklist?.length < 1 ? (
          <div className=" w-full h-[500px] overflow-hidden ">
            <div className=" md:block mb-5 ">
              <Lottie
                options={defaultOptions(booking)}
                height={600}
                width={600}
              />
            </div>
            <div className="block md:hidden mb-5 ">
              <Lottie
                options={defaultOptions(booking)}
                height={300}
                width={300}
              />
            </div>
          </div>
        ) : (
          <div
            className={
              userbooklist?.length <= 4
                ? ` px-3 h-[450px] sm:px-10 `
                : ` px-3 sm:px-10 `
            }
          >
            <Bookingitem></Bookingitem>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookinglist;
