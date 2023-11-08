import { RouterProvider } from "react-router-dom"
import Router from "./router/Router"
import Userinfocontext from "./Globalcontext/Userinfocontext"

function App() {
  return (
    <Userinfocontext>
      <RouterProvider router={Router} ></RouterProvider>
    </Userinfocontext>
  )
  
}

export default App
