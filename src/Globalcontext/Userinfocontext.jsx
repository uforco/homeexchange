import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { onAuthStateChanged, signOut } from "firebase/auth";
import Userauth from "../config/Firebaseconfig";
import  axios  from 'axios';

export const Usercontext = createContext()
const Userinfocontext = ({children}) => {
    const [User, setUser] = useState(null)
    const [isLoad, setIsload] = useState(true)

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(Userauth, (user)=>{
            if(user){
                if(user.displayName){
                    setIsload(false)
                }
                if(!user.displayName){
                    axios.get(`/userinfo?email=${user.email}`)
                        .then(res => {
                            user.displayName = res.data.username
                            user.photoURL = res.data.PhotoLink
                            setUser(user)
                            setIsload(false)
                        })
                }

            }
            if(!user){
                setUser(user)
                setIsload(true)
            }
        })
        return () => unSubscribe()
    },[])

    console.log(User)
    console.log(isLoad)
    // logout User
    const LogOutUser = () => {
        setIsload(!isLoad)
        return signOut(Userauth)
    }
    const data = {
        isLoad,
        setIsload,
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