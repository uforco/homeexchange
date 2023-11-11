
import { PropTypes } from 'prop-types';
import Contextdata from '../hooks/Contexthook';
import { Navigate,  } from 'react-router-dom';
const Blockroute = ({children}) => {
    const {User} = Contextdata()

  if(User !== null){
        return <Navigate to="/" ></Navigate>
    }else{
        return children
    }
    
};
Blockroute.propTypes = {
    children: PropTypes.node
}
export default Blockroute;