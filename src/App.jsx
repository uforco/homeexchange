import { RouterProvider } from "react-router-dom"
import Router from "./router/Router"
import Userinfocontext from "./Globalcontext/Userinfocontext"
import axios from "axios";

function App() {

  axios.defaults.baseURL = 'http://localhost:4500';
  
  return (
    <Userinfocontext>
      <RouterProvider router={Router} ></RouterProvider>
    </Userinfocontext>
  )
  
}

export default App
