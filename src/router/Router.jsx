
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
import Isuser from '../Private/Isuser';
import Blockroute from '../Private/blockroute';

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
            element: <Isuser><Allservices></Allservices></Isuser>
        },
        {
            path: "servicedetails/:id",
            element: <Isuser><Servicedetails></Servicedetails></Isuser>
        },
        {
            path: "bookinglist",
            element: <Isuser><Bookinglist></Bookinglist></Isuser>
        }
      ]
    },
    {
      path: "/login",
      element: <Blockroute><Login></Login></Blockroute> 
    },
    {
      path: "/registration",
      element: <Blockroute><Registration></Registration></Blockroute> 
    },
    {
      path: "/dashboard",
      element : <Isuser><Dashboard></Dashboard></Isuser>,
      children:[
        {
          index: true,
          element: <DHome></DHome>
        },
        {
          path: "addservice",
          element: <Isuser><Addservice></Addservice></Isuser>
        },
        {
          path: "manageservices",
          element: <Isuser><h2>manageservices</h2></Isuser>
        },
        {
          path: "inbox",
          element: <Isuser><h2>inbox</h2></Isuser>
        },
        {
          path: "myschedule",
          element:  <Isuser><Myschedule ></Myschedule></Isuser>
        }
      ]
     
    }
  ]);

export default Router;