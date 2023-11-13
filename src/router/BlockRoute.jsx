import { Navigate} from "react-router-dom";
import Contextdata from "../hooks/Contexthook";
import { PropTypes } from "prop-types";
const BlockRoute = ({ children }) => {
  const { User, isuserload } = Contextdata();
  if (!isuserload && !User?.email) {
    return children;
  }

  return <Navigate to="/" />;
};

BlockRoute.propTypes = {
  children: PropTypes.node,
};

export default BlockRoute;
