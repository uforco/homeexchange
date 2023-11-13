"use client";
import { Avatar } from "flowbite-react";
import avatimg from "../../assets/icons/profile-user.png";
import { BiPowerOff } from "react-icons/bi";
import { AiOutlineLogin } from "react-icons/ai";
import Contextdata from "./../../hooks/Contexthook";
import { Link, useNavigate } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Userphone = () => {
  const Navigatebackhome = useNavigate();
  const { User, isLoad, LogOutUser, userbooklist } = Contextdata();

  const LogOut = () => {
    LogOutUser()
      .then(() => {
        Navigatebackhome("/");
      })
      .catch();
  };
  return (
    <div className=" flex h-12 overflow-hidden justify-between items-center w-full ">
      <div className=" flex items-center px-2 gap-3 ">
        <Avatar
          img={!isLoad ? `${User?.photoURL}` : avatimg}
          rounded
          bordered
        />
        <h2 className=" text-black font-semibold text-base ">
          {!isLoad ? User?.displayName : "guest"}
        </h2>
      </div>
      <div className=" flex gap-2 ">
        <NavLink
          to="/bookinglist"
          className={({ isActive }) =>
            isActive
              ? "btn bg-gray-300 btn-ghost btn-circle"
              : "btn btn-ghost btn-circle"
          }
        >
          <div className="indicator">
            <span className=" text-2xl font-bold ">
              <MdFavoriteBorder></MdFavoriteBorder>
            </span>
            {userbooklist ? (
              userbooklist?.length === 0 ? (
                ""
              ) : (
                <span className="badge badge-sm indicator-item">
                  {userbooklist?.length}
                </span>
              )
            ) : (
              ""
            )}
          </div>
        </NavLink>
        {User ? (
          <button
            onClick={LogOut}
            className="btn btn-ghost btn-circle text-2xl font-bold text-black p-2 "
          >
            <BiPowerOff></BiPowerOff>{" "}
          </button>
        ) : (
          <Link
            to="/login"
            className="btn btn-ghost btn-circle text-1xl font-bold text-black p-2 "
          >
            <AiOutlineLogin></AiOutlineLogin>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Userphone;
