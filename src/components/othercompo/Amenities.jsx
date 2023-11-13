import Lottie from "react-lottie";
import wifiani from "../../assets/icons/wifi.json";
import Tvani from "../../assets/icons/AnimationTv.json";
import Washingmachine from "../../assets/icons/Washingmachine.json";
import Microwaveoven from "../../assets/icons/Microwaveoven.json";
import Freezer from "../../assets/icons/Freezer.json";
import AC from "../../assets/icons/AC.json";
import kitchen from "../../assets/icons/kitchen.json";

const Amenities = () => {
  const defaultOptions = (e) => ({
    loop: false,
    autoplay: true,
    animationData: e,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });

  const wh = 50;

  return (
    <div>
      <div>
        <p className=" border-t my-3 ">
          <h2 className=" text-3xl py-5 font-semibold font-DMSans ">
            Amenities
          </h2>
          <p className=" font-DMSans font-semibold ">Our basics</p>
        </p>
        <div>
          <ul className=" grid grid-cols-2 sm:grid-cols-3 gap-10 ">
            <li>
              <div className=" flex justify-start items-center gap-2 ">
                <span>
                  <Lottie
                    options={defaultOptions(wifiani)}
                    height={wh}
                    width={wh}
                  />
                </span>
                <h2 className=" font-semibold text-lg "> Wifi </h2>
              </div>
            </li>
            <li>
              <div className=" flex justify-start items-center gap-2 ">
                <span>
                  <Lottie
                    options={defaultOptions(Tvani)}
                    height={wh}
                    width={wh}
                  />
                </span>
                <h2 className=" font-semibold text-lg "> Tv </h2>
              </div>
            </li>
            <li>
              <div className=" flex justify-start items-center gap-2 ">
                <span>
                  <Lottie
                    options={defaultOptions(Washingmachine)}
                    height={wh}
                    width={wh}
                  />
                </span>
                <h2 className=" font-semibold text-lg "> Washing machine </h2>
              </div>
            </li>
            <li>
              <div className=" flex justify-start items-center gap-2 ">
                <span>
                  <Lottie
                    options={defaultOptions(Microwaveoven)}
                    height={wh}
                    width={wh}
                  />
                </span>
                <h2 className=" font-semibold text-lg "> Microwave oven </h2>
              </div>
            </li>
            <li>
              <div className=" flex justify-start items-center gap-2 ">
                <span>
                  <Lottie
                    options={defaultOptions(Freezer)}
                    height={wh}
                    width={wh}
                  />
                </span>
                <h2 className=" font-semibold text-lg ">Freezer</h2>
              </div>
            </li>
            <li>
              <div className=" flex justify-start items-center gap-3 ">
                <span>
                  <Lottie options={defaultOptions(AC)} height={wh} width={wh} />
                </span>
                <h2 className=" font-semibold text-lg ">AC</h2>
              </div>
            </li>
            <li>
              <div className=" flex justify-start items-center gap-3 ">
                <span>
                  <Lottie
                    options={defaultOptions(kitchen)}
                    height={wh}
                    width={wh}
                  />
                </span>
                <h2 className=" font-semibold text-lg ">kitchen</h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
