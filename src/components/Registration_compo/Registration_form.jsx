import { useState } from "react";
import toast from "react-hot-toast";
import { BiLinkAlt } from "react-icons/bi";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";


const Registration_form = () => {
  const [showpass, setShowpass] = useState(true)
  // const Navigateback = useNavigate()
  const registration = (e) => {
      e.preventDefault()
      // console.log(username.length > 3 && username.length < 6)
      const username = e.target.Username.value
      // const PhotoLink = e.target.PhotoLink.value
      const email = e.target.email.value
      const password = e.target.password.value
      console.log(username.length < 7 )
      if(!username){
        return toast.error("fill this Username must be mini 4 & max 8 characters")
      }
      if(username.length <= 3 ){
        return toast.error("Username must be mini 4 characters")
      }
      if(username.length >= 9){
        return toast.error("Username must be max 8 characters")
      }
      if(!email){
        return toast.error("fill this Email")
      }
      if(!password){
        return toast.error("fill this password")
      }else{
        if(!/(?=.*?[A-Z])/.test(password.slice(0,1))){
          return toast.error("The first letter of the password must be uppercase")
        }
        if(!/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/.test(password)){
          return toast.error("Password must contain numbers")
        }if(!/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/.test(password)){
          return toast.error("Password must contain special characters")
        }
        if(password.length < 6){
          return toast.error("Password must be 6 characters long")
        }
        console.log("pass this")
      }



  }

  return (
    <form onSubmit={registration} >
      <div className="flex items-center justify-center mt-3">
        <span className="w-1/3 pb-2 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
          Sign up Now
        </span>
      </div>

      <div className="relative flex items-center mt-6">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </span>

        <input
          name="Username"
          type="text"
          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Username"
        ></input>
      </div>

      <div className="relative flex items-center mt-8">
        <span className="absolute">
          <p className="w-6 h-6 mx-3 flex justify-center items-center text-3xl text-gray-300 dark:text-gray-500" ><BiLinkAlt></BiLinkAlt></p>
        </span>

        <input
          name="PhotoLink"
          type="PhotoLink"
          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Profile Photo Link"
        ></input>
      </div>

      <div className="relative flex items-center mt-6">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </span>

        <input
          name="email"
          type="email"
          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Email address"
        ></input>
      </div>

      <div className="relative flex items-center mt-4">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </span>

        <input
          name="password"
          type={showpass? "password" : "text" }
          className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Password"
        ></input>

        <span onClick={()=> setShowpass(!showpass)} className=" absolute cursor-pointer right-0 p-4 text-2xl " >
            {
              showpass? 
                <FaEye></FaEye>
              :
                <FaEyeSlash></FaEyeSlash>
            }
        </span>

      </div>

      

      <div className="mt-6">
        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transhtmlForm bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Registration_form;
