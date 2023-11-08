"use client";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox } from "react-icons/hi";
import { FiPower } from "react-icons/fi";
import { BiSolidCog } from "react-icons/bi";
import { MdScheduleSend, MdLibraryAdd } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { Avatar } from "flowbite-react";
import Contextdata from './../../hooks/Contexthook';
import avatimg from "../../assets/icons/profile-user.png"
import { useNavigate } from "react-router-dom";

const Dashbordmanu = () => {
  const {User, isLoad, LogOutUser} = Contextdata() 
  const Navigatebackhome = useNavigate()
  const LogOut = () => {
    LogOutUser().then(()=>{
      Navigatebackhome("/")
    })
      .catch()
  }


  return (
    <Sidebar className=" w-14 sm:w-52 h-full overflow-hidden " aria-label="Default sidebar example">
      <div className=" my-2 mb-3 ">
        <div className=" flex flex-col gap-2 justify-center items-center ">
          <div>
            <Avatar
              className=" hidden sm:flex "
              img={
                  !isLoad?
                    `${User?.photoURL}`
                  :
                    avatimg
                  
                  }
              size="lg"
              rounded
            />
            <Avatar
            className=" flex sm:hidden "
              img={
                !isLoad?
                  `${User?.photoURL}`
                :
                  avatimg
                
              }
              size="md"
              rounded
            />
          </div>
          <div className=" font-DMSans hidden sm:block ">
            <h2 className=" text-center font-semibold ">
              {
                !isLoad?
                  User?.displayName
                :
                  "Guest User"
              }
            </h2>
            <h2>{User?.email? User?.email :  "Guest@email.com" } </h2>
          </div>
        </div>
      </div>
      <div className=" px-5 sm:p-0 " >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/" icon={AiFillHome}>
              <span className=" hidden sm:block " >Home</span>
            </Sidebar.Item>
            
            <Sidebar.Item href="/dashboard" icon={HiChartPie}>
              <span className=" hidden sm:block " >Dashboard</span>
            </Sidebar.Item>
            <Sidebar.Item
              href="/dashboard/addservice"
              icon={MdLibraryAdd}
            >
              <span className=" hidden sm:block " >Add Service</span>
            </Sidebar.Item>
            <Sidebar.Item href="/dashboard/manageservices" icon={BiSolidCog}>
              <span className=" hidden sm:block " >Manage Services</span>
            </Sidebar.Item>
            <Sidebar.Item href="/dashboard/inbox" icon={HiInbox}>
              <span className=" hidden sm:block " >Inbox</span>
            </Sidebar.Item>
            <Sidebar.Item href="/dashboard/myschedule" icon={MdScheduleSend}>
              <span className=" hidden sm:block " >My Schedule</span>
            </Sidebar.Item>

            <div onClick={LogOut} >
              <Sidebar.Item icon={FiPower}>
                <span className=" hidden sm:block " >Sign Out</span>
              </Sidebar.Item>
            </div>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </div>
    </Sidebar>
  );
};

export default Dashbordmanu;
