
import { PropTypes } from 'prop-types';
import Contextdata from '../hooks/Contexthook';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Isuser = ({children}) => {
    const {User} = Contextdata()
    const Navigatelogin = useNavigate()
    if(User === null){
        useEffect(()=>{
            Navigatelogin("/login")
        },[])
    }
    return children

};
Isuser.propTypes = {
    children: PropTypes.node
}
export default Isuser;