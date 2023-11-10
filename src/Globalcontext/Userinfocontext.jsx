import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { onAuthStateChanged, signOut } from "firebase/auth";
import Userauth from "../config/Firebaseconfig";
import  axios  from 'axios';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";





export const Usercontext = createContext()

const queryClient = new QueryClient()

const Userinfocontext = ({children}) => {
    const [User, setUser] = useState(null)
    const [isLoad, setIsload] = useState(true)

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

            }
            if(!user){
                setUser(user)
                setIsload(true)
            }
        })
        return () => unSubscribe()
    },[])

    // console.log(User)
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
        LogOutUser
    }

    return (
        <QueryClientProvider client={queryClient}>
            <Usercontext.Provider value={data} >
                {children}
            </Usercontext.Provider>
        </QueryClientProvider>
    );
};

Userinfocontext.propTypes = {
    children: PropTypes.node
}

export default Userinfocontext;