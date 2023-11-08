'use client';
import { Avatar } from 'flowbite-react';
import avatimg from "../../assets/icons/profile-user.png"
import { BiPowerOff } from "react-icons/bi";
import { AiOutlineLogin } from "react-icons/ai";
import Contextdata from './../../hooks/Contexthook';
import { Link, useNavigate } from 'react-router-dom';
const Userphone = () => {
  const Navigatebackhome = useNavigate()
  const {User, LogOutUser} = Contextdata()

  const LogOut = () => {
    LogOutUser().then(()=>{
      Navigatebackhome("/")
    })
      .catch()
  }
  return (
        <div className=' flex h-12 overflow-hidden justify-between items-center w-full ' >
            <div className=' flex items-center gap-3 ' >
              <Avatar img={avatimg} rounded bordered />
              <h2 className=' text-black font-semibold text-xl ' > Name </h2>
            </div>
            <div>
              {
                User? 
                  <button onClick={LogOut} className=' text-3xl font-bold text-black p-2 ' ><BiPowerOff></BiPowerOff> </button>
                :
                  <Link to="/login" className=' text-2xl font-bold text-black p-2 ' ><AiOutlineLogin></AiOutlineLogin></Link>
              }
            </div>
        </div>
  );
};

export default Userphone;
