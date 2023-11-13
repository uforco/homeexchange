import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout/Mainlayout";
import Home from "../page/Home/Home";
import Aboutpage from "../page/about/Aboutpage";
import Contactus from "../page/contactus/Contactus";
import Login from "../layout/Loginpage/Login";
import Registration from "../layout/Registrapage/Registration";
import Dashboard from "../layout/Dashboarduser/Dashboard";
import Addservice from "../page/Addservice/Addservice";
import Allservices from "../layout/Allservices/Allservices";
import Servicedetails from "../page/Singleservicedetails/Servicedetails";
import Bookinglist from "../page/Bookmark/Bookinglist";
import Myschedule from "../page/Myschedule/Myschedule";
import DHome from "../page/Dashboardhome/DHome";
import PrivateRoute from "./PrivateRoute";
import ManageServices from "../page/ManageService/ManageServices";
import BlockRoute from "./BlockRoute";
import Updateservice from "../page/UpdateService/Updateservice";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <h2> 404 </h2>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <Aboutpage></Aboutpage>,
      },
      {
        path: "contactus",
        element: <Contactus></Contactus>,
      },
      {
        path: "services",
        element: (
          <PrivateRoute>
            <Allservices></Allservices>
          </PrivateRoute>
        ),
      },
      {
        path: "servicedetails/:id",
        element: (
          <PrivateRoute>
            <Servicedetails></Servicedetails>
          </PrivateRoute>
        ),
      },
      {
        path: "bookinglist",
        element: (
          <PrivateRoute>
            <Bookinglist></Bookinglist>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <BlockRoute>
        <Login></Login>
      </BlockRoute>
    ),
  },
  {
    path: "/registration",
    element: (
      <BlockRoute>
        <Registration></Registration>
      </BlockRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DHome></DHome>,
      },
      {
        path: "addservice",
        element: (
          <PrivateRoute>
            <Addservice></Addservice>
          </PrivateRoute>
        ),
      },
      {
        path: "manageservices",
        element: (
          <PrivateRoute>
            <ManageServices></ManageServices>
          </PrivateRoute>
        ),
      },
      {
        path: "inbox",
        element: (
          <PrivateRoute>
            <h2>inbox</h2>
          </PrivateRoute>
        ),
      },
      {
        path: "myschedule",
        element: (
          <PrivateRoute>
            <Myschedule></Myschedule>
          </PrivateRoute>
        ),
      },
      {
        path: "updateservice/:id",
        element: (
          <PrivateRoute>
            <Updateservice></Updateservice>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
