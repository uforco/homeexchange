import work1 from "../../assets/icons/homelogin.png";
import work2 from "../../assets/icons/verified-home.png";
import work3 from "../../assets/icons/searchhome.png";
import work4 from "../../assets/icons/bookinghome.png";
import Workservise_card from "./../card/Workservise_card";

const Howworkservice = () => {
  const step1_discrip = "Sign up for free";
  const step2_discrip =
    "Complete and verify your profile to introduce yourself to the community";
  const step3_discrip = "Find your service with Home Exchange community";
  const step4_discrip =
    "After finding your service in the Home Exchange community, bookmark it in your account";
  return (
    <div className=" bg-white ">
      <div className=" overflow-hidden 2xl:container p-0 xl:mx-auto  ">
        {" "}
        {/* className=" bg-base-300 "  */}
        <div className=" my-16 ">
          <div className=" flex flex-col items-center justify-center w-full ">
            <div className=" w-full mb-4 ">
              <div className=" flex gap-4 flex-col justify-center items-center ">
                <h2 className=" font-playfairDisplay text-5xl text-center ">
                  How does it work?
                </h2>
                <p className=" font-semibold font-playfairDisplay mx-2 sm:mx-10 text-center  ">
                  Sign up and take the membership to get one year of unlimited,
                  worry-free exchanges for the price of one night’s stay at a
                  hotel.
                </p>
              </div>
            </div>
            <div className="">
              <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-7 xl:gap-16 px-4  my-12 ">
                {/* Breakfast */}
                <Workservise_card
                  img={work1}
                  step={"1"}
                  discrip={step1_discrip}
                ></Workservise_card>
                <Workservise_card
                  img={work2}
                  step={"2"}
                  discrip={step2_discrip}
                ></Workservise_card>
                <Workservise_card
                  img={work3}
                  step={"3"}
                  discrip={step3_discrip}
                ></Workservise_card>
                <Workservise_card
                  img={work4}
                  step={"4"}
                  discrip={step4_discrip}
                ></Workservise_card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howworkservice;
