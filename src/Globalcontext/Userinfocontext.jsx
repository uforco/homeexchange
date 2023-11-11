import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { onAuthStateChanged, signOut } from "firebase/auth";
import Userauth from "../config/Firebaseconfig";
import  axios  from 'axios';

export const Usercontext = createContext()

const Userinfocontext = ({children}) => {
    const [User, setUser] = useState(null)
    const [userbooklist, setUserbooklist] = useState(null)
    const [isLoad, setIsload] = useState(true)
    const [update, setUpdate] = useState(null)

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(Userauth, (user)=>{
            if(user){
                if(user.displayName){
                    setIsload(false)
                    setUser(user)
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
                axios.get(`/customerbookinglist?email=${user.email}`)
                .then(blist => {
                    if(blist.data){
                        setUserbooklist(blist.data)
                    }
                })
            }
            if(!user){
                setUser(user)
                setIsload(true)
                setUserbooklist(null)
                setUpdate(null)
            }
        })
        return () => unSubscribe()
    },[update])

    // console.log(userbooklist)
    // console.log(isLoad)
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
        LogOutUser,
        userbooklist,
        setUserbooklist,
        setUpdate
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