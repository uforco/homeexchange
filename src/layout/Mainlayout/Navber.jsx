import Manu_item from "./Manu_item";
import Logo from "./../../components/othercompo/Logo";
import { Link, NavLink } from "react-router-dom";
// 'use client';
import { MdFavoriteBorder } from "react-icons/md";
import Usersintro from "./../../components/user/Usersintro";
import Contextdata from "../../hooks/Contexthook";

const Navber = () => {
  const { userbooklist } = Contextdata();

  return (
    <div className=" overflow-hidden xl:container p-0 xl:mx-auto ">
      <div className="w-full gap-3 navbar ">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">
          <Link to="/">
            <Logo></Logo>
          </Link>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className=" flex justify-center items-center gap-3 ">
            {/* Navbar menu content here */}
            <Manu_item></Manu_item>
          </ul>
        </div>
        <div className=" hidden sm:block ">
          <div className=" flex justify-between items-center gap-5 ">
            <div>
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
            </div>
            <Usersintro></Usersintro>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
