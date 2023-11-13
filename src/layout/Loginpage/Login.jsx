import { Link } from "react-router-dom";
import Login_form from "./../../components/Login_compo/Login_form";
import Social_media from "./../../components/Login_compo/Social_media";
import logo from "../../assets/houselogo.png";
import Helmattitle from "../../components/othercompo/Helmattitle";
const Login = () => {
  return (
    <div className=' bg-[url("https://i.ibb.co/L9hQ5CB/login.jpg")]  bg-cover'>
      <Helmattitle title={"Home Exchage | Login"}></Helmattitle>
      <div className=" w-full h-screen backdrop-blur-sm  bg-opacity-40 flex items-center justify-center ">
        <div className=" w-full ">
          <div className="w-full max-w-sm p-6 m-auto mx-auto bg-gray-500 text-white bg-opacity-40 rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex justify-center mx-auto">
              <img className="w-auto h-8 sm:h-12" src={logo} alt="" />
            </div>

            <Login_form></Login_form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b border-black dark:border-gray-600 lg:w-1/5"></span>

              <span
                href="#"
                className="text-xs text-center text-black uppercase dark:text-gray-400 hover:underline"
              >
                or login with Social Media
              </span>

              <span className="w-1/5 border-b border-black dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <Social_media></Social_media>

            <p className="mt-8 text-sm font-medium text-black text-center ">
              {`Don't`} have an account?
              <Link
                to="/registration"
                className="font-medium text-slate-100 ml-2 dark:text-gray-200 hover:underline"
              >
                Registration
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
