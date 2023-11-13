import { RouterProvider } from "react-router-dom"
import Router from "./router/Router"
import Userinfocontext from "./Globalcontext/Userinfocontext"
import axios from "axios";
import { Toaster } from "react-hot-toast";

function App() {

  axios.defaults.baseURL = 'https://home-exchange-server.vercel.app/v1';
  axios.defaults.withCredentials = true;
  return (
    <Userinfocontext>
      <Toaster position="top-right" ></Toaster>
      <RouterProvider router={Router} ></RouterProvider>
    </Userinfocontext>
  )
  
}

export default App
