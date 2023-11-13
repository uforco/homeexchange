// import { Navigate } from 'react-router-dom';
import { Navigate, useLocation } from "react-router-dom";
import Contextdata from "../hooks/Contexthook";
import { PropTypes } from "prop-types";
const PrivateRoute = ({ children }) => {
  const { User, isuserload } = Contextdata();
  const locationstate = useLocation().pathname;
  if (isuserload) {
    return <div className="progress w-full"></div>;
  }

  if (!isuserload && !User?.email) {
    return <Navigate to="/login" state={locationstate} />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
