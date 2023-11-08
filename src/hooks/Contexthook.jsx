import { useContext } from "react";
import { Usercontext } from "../Globalcontext/Userinfocontext";

const Contextdata = () => {
    const contextinfo = useContext( Usercontext )
    return contextinfo
};

export default Contextdata;