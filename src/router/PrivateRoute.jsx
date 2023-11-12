
// import { Navigate } from 'react-router-dom';
import { Navigate} from 'react-router-dom';
import Contextdata from '../hooks/Contexthook';
import { PropTypes } from 'prop-types';
const PrivateRoute = ({children}) => {
     const {User, isuserload} = Contextdata()
    console.log(isuserload)
     if (isuserload) {
        return <div className="progress w-full"></div>;
      }
    
      if (!isuserload && !User?.email) {
        return <Navigate to="/login" />;
      }
    
      return children

    
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;