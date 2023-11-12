import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaFacebookF } from "react-icons/fa6";
import Userauth from "../../config/Firebaseconfig";
import { useNavigate } from "react-router-dom";
import Contextdata from "../../hooks/Contexthook";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../othercompo/Loader";
import Verify from "../../assets/icons/Verify.json";
const Social_media = () => {
  const provider = new GoogleAuthProvider();
  const {isLoad, setIsload } = Contextdata()
  const getNavigate = useNavigate()
  const googleLogin = () => {
    signInWithPopup(Userauth, provider)
    .then((result) => {
      console.log(result)
      if(result){
        setIsload(!isLoad)
        getNavigate("/")
        axios.post("/loginuser", {email:result.user.email}).then((res) => {
          if (res.data.Verify) {
              toast("Welcome to Home Exchange", {
                icon: <Loader name={Verify} wh={50}></Loader>,
              });
          }
        });
      }
    })
  }

  return (
    <div className="flex items-center mt-6 -mx-2">
      <button
        onClick={googleLogin}
        type="button"
        className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
      >
        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
          <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
        </svg>

        <span className="hidden mx-2 sm:inline">Sign in with Google</span>
      </button>

      <a
        href="#"
        className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200"
      >
        <span className=" text-xl ">
          <FaFacebookF></FaFacebookF>
        </span>
      </a>
    </div>
  );
};

export default Social_media;
