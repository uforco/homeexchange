import { Link } from "react-router-dom";
import logo from "../../assets/houselogo.png";
import Registration_form from "./../../components/Registration_compo/Registration_form";
import { Toaster } from 'react-hot-toast';


const Registration = () => {
  return (
    <div className=' bg-[url("https://i.ibb.co/L9hQ5CB/login.jpg")]  bg-cover' >
      <Toaster></Toaster>
      <div className=" w-full h-screen backdrop-blur-sm  bg-opacity-40 flex items-center justify-center " >
        <div className=" w-full " >
          <section className=" dark:bg-gray-900">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
              <div className="w-full bg-white bg-opacity-30 p-8 py-6 rounded-lg max-w-md">
                <div className="flex justify-center mx-auto">
                  <img className="w-auto h-10 sm:h-12" src={logo} alt=""></img>
                </div>
                <Registration_form></Registration_form>
                <div className="mt-6 text-center ">
                  <Link
                    to="/login"
                    className="text-sm font-medium text-gray-200 hover:underline "
                  >
                    Already have an account?
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Registration;
