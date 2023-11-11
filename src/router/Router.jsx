
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../layout/Mainlayout/Mainlayout';
import Home from '../page/Home/Home';
import Aboutpage from '../page/about/Aboutpage';
import Contactus from '../page/contactus/Contactus';
import Login from '../layout/Loginpage/Login';
import Registration from '../layout/Registrapage/Registration';
import Dashboard from '../layout/Dashboarduser/Dashboard';
import Addservice from '../page/Addservice/Addservice';
import Allservices from '../layout/Allservices/Allservices';
import Servicedetails from '../page/Singleservicedetails/Servicedetails';
import Bookinglist from '../page/Bookmark/Bookinglist';
import Myschedule from '../page/Myschedule/Myschedule';
import DHome from '../page/Dashboardhome/DHome';

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
        },
        {
            path: "services",
            element: <Allservices></Allservices>
        },
        {
            path: "servicedetails/:id",
            element: <Servicedetails></Servicedetails>
        },
        {
            path: "bookinglist",
            element: <Bookinglist></Bookinglist>
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
          index: true,
          element: <DHome></DHome>
        },
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
          element: <Myschedule ></Myschedule>
        }
      ]
     
    }
  ]);

export default Router;