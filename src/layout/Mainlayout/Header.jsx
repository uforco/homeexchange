import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoFacebook, BiLogoInstagram, BiLogoGithub } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-slate-600 hidden md:block ">
      <div className=" w-full  overflow-hidden xl:container p-0 xl:mx-auto ">
        <div className=" mx-3 py-1">
          <div className=" flex justify-between items-center ">
            <div>
              <div className=" flex gap-3 ">
                <p className=" flex justify-around p-0 m-0 text-white items-center ">
                  {" "}
                  <span className=" text-lg p-2 ">
                    <BsTelephone></BsTelephone>{" "}
                  </span>
                  {`(414)`} 857 - 0107
                </p>
                <p className=" flex justify-around p-0 m-0 text-white items-center ">
                  {" "}
                  <span className=" text-lg p-2 ">
                    <AiOutlineMail></AiOutlineMail>
                  </span>{" "}
                  homeexchange@bistrobliss{" "}
                </p>
              </div>
            </div>
            <div>
              <ul className=" flex justify-around gap-2 items-center ">
                <li>
                  <Link>
                    <p className=" text-white   p-[5px] rounded-full bg-slate-800  ">
                      <BiLogoFacebook></BiLogoFacebook>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link>
                    <p className=" text-white   p-[5px] rounded-full bg-slate-800  ">
                      <BiLogoInstagram></BiLogoInstagram>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link>
                    <p className=" text-white   p-[5px] rounded-full bg-slate-800  ">
                      <BiLogoGithub></BiLogoGithub>
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
