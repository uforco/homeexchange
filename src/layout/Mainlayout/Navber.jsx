import Manu_item from "./Manu_item";
import Logo from "./../../components/othercompo/Logo";
import { Link } from "react-router-dom";
// 'use client';
// import { Avatar } from 'flowbite-react';
import Usersintro from './../../components/user/Usersintro';

const Navber = () => {
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
        <div className=" hidden sm:block " >
          <div className=" flex justify-between items-center gap-5 " >
            <div>
              <Link to="" >
                <label className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </label>
              </Link>
            </div>
            <Usersintro></Usersintro>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
