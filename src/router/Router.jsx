
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../layout/Mainlayout/Mainlayout';
import Home from '../page/Home/Home';
import Aboutpage from '../page/about/Aboutpage';
import Contactus from '../page/contactus/Contactus';
import Login from '../layout/Loginpage/Login';
import Registration from '../layout/Registrapage/Registration';
import Dashboard from '../layout/Dashboarduser/Dashboard';
import Addservice from '../page/Addservice/Addservice';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
            path: "about",
            element: <Aboutpage></Aboutpage>
        },
        {
            path: "contactus",
            element: <Contactus></Contactus>
        }
      ]
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/registration",
      element: <Registration></Registration>
    },
    {
      path: "/dashboard",
      element : <Dashboard></Dashboard>,
      children:[
        {
          path: "addservice",
          element: <Addservice></Addservice>
        },
        {
          path: "manageservices",
          element: <h2>manageservices</h2>
        },
        {
          path: "inbox",
          element: <h2>inbox</h2>
        },
        {
          path: "myschedule",
          element: <h2>myschedule</h2>
        }
      ]
     
    }
  ]);

export default Router;