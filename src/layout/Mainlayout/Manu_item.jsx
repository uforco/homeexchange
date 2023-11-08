import { NavLink } from "react-router-dom";

const Manu_item = () => {
  return (
    <>
      <li>
        <NavLink to="/" className={({isActive}) => isActive? 
            "bg-rose-500 text-white lg:border-rose-500 font-medium p-2 lg:py-2 text-sm lg:text-xs px-5 rounded lg:rounded-full lg:border" 
            : 
            ` hover:bg-rose-500 hover:lg:border-rose-500 hover:text-white  bg-transparent text-black font-medium p-2 lg:py-2 text-sm lg:text-xs px-5 rounded lg:rounded-full lg:border`}  >
            Home
        </NavLink>
      </li>
      <li>
        <NavLink to="about" className={({isActive}) => isActive? 
            "bg-rose-500 text-white lg:border-rose-500 font-medium p-2 lg:py-2 text-sm lg:text-xs px-5 rounded lg:rounded-full lg:border" 
            : 
            ` hover:bg-rose-500 hover:lg:border-rose-500 hover:text-white  bg-transparent text-black font-medium p-2 lg:py-2 text-sm lg:text-xs px-5 rounded lg:rounded-full lg:border`}  >
            About
        </NavLink>
      </li>
      <li>
        <NavLink to="contactus" className={({isActive}) => isActive? 
            "bg-rose-500 text-white lg:border-rose-500 font-medium p-2 lg:py-2 text-sm lg:text-xs px-5 rounded lg:rounded-full lg:border" 
            : 
            ` hover:bg-rose-500 hover:lg:border-rose-500 hover:text-white  bg-transparent text-black font-medium p-2 lg:py-2 text-sm lg:text-xs px-5 rounded lg:rounded-full lg:border`}  >
            Contact Us
        </NavLink>
      </li>
      <li className=" sm:hidden " >
        <NavLink to="/dashboard" className={({isActive}) => isActive? 
            "bg-rose-500 text-white lg:border-rose-500 font-medium p-2 lg:py-2 text-sm lg:text-xs px-5 rounded lg:rounded-full lg:border" 
            : 
            ` hover:bg-rose-500 hover:lg:border-rose-500 hover:text-white  bg-transparent text-black font-medium p-2 lg:py-2 text-sm lg:text-xs px-5 rounded lg:rounded-full lg:border`}  >
            Dashboard
        </NavLink>
      </li>
    </>
  );
};

export default Manu_item;
