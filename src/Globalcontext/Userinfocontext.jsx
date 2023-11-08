import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { onAuthStateChanged, signOut } from "firebase/auth";
import Userauth from "../config/Firebaseconfig";

export const Usercontext = createContext()
const Userinfocontext = ({children}) => {
    const [User, setUser] = useState(null)
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(Userauth, (user)=>{
            if(user){
                setUser(user)
            }
            setUser(user)
        })
        return () => unSubscribe()
    },[])

    console.log(User)
    // logout User
    const LogOutUser = () => {
        return signOut(Userauth)
    }
    const data = {
        User,
        setUser,
        LogOutUser
    }

    return (
        <Usercontext.Provider value={data} >
            {children}
        </Usercontext.Provider>
    );
};

Userinfocontext.propTypes = {
    children: PropTypes.node
}

export default Userinfocontext;