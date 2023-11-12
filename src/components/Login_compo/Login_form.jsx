import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Userauth from '../../config/Firebaseconfig';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { useState } from 'react';

const Login_form = () => {
  const [showpass, setShowpass] = useState(true)
  const Navigatelogin = useNavigate()
  const loginhenld = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
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
      signInWithEmailAndPassword(Userauth, email, password)
        .then((userCredential) => {
          // console.log(userCredential.user)
          if(userCredential.user){
            Swal.fire(
              'Successfull Login',
              '',
              'success'
            )
            e.target.email.value = ""
            e.target.password.value = ""
            Navigatelogin("/")
          }
        })
        .catch((error) => {
          // console.error(error)
          // console.log(error)
          if(error){
            return toast.error('login info is incorrect', {
              position: "top-center"
            })
          }
      });
    }
  };
  return (
    <form onSubmit={loginhenld} className="mt-6">
      <div>
        <label
          htmlFor="Email"
          className="block text-sm text-black font-medium dark:text-gray-200"
        >
          Email
        </label>
        <input
          required
          name="email"
          type="text"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div className="mt-4">
        <div className=' relative ' >
          <label
            htmlFor="Password"
            className="block text-sm text-black font-medium dark:text-gray-200"
          >
            Password
          </label>
          <input
            required
            name="password"
            type={ showpass? "password" : "text" }
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
            <span onClick={()=> setShowpass(!showpass)} className=" cursor-pointer absolute right-0 text-xl bottom-2 text-gray-700 p-2 py-1 " >
                {
                  showpass? 
                    <FaEye></FaEye>
                  :
                    <FaEyeSlash></FaEyeSlash>
                }
            </span>
        </div>

        
      </div>

      <div className='mt-3' >
        <Link
            to=""
            className="text-xs mt-1 flex justify-end text-black dark:text-gray-400 hover:underline"
          >
            Forget Password?
          </Link>
      </div>


      <div className="mt-6">
        <button
          type="submit"
          className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default Login_form;
