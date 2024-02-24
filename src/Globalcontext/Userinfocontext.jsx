import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Userauth from "../config/Firebaseconfig";
import axios from "axios";
export const Usercontext = createContext();

const Userinfocontext = ({ children }) => {
  const [User, setUser] = useState(null);
  const [userbooklist, setUserbooklist] = useState(null);
  const [isLoad, setIsload] = useState(true);
  const [isuserload, setisuserload] = useState(true);
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Userauth, (user) => {
      if (user) {
        if (user.displayName) {
          setUser(user);
          setIsload(false);
          setisuserload(false);
        }
        if (!user.displayName) {
          axios.get(`/userinfo?email=${user.email}`).then((res) => {
            user.displayName = res.data.username;
            user.photoURL = res.data.PhotoLink;
            setUser(user);
            setIsload(false);
            setisuserload(false);
          });
        }
        axios.get(`/customerbookinglist?email=${user.email}`).then((blist) => {
          if (blist.data) {
            setUserbooklist(blist.data);
          }
        });
        const userinfo = { email: user.email || User.email };
        axios.post("/loginuser", userinfo).then((res) => {
          if (res.data.Verify) {
            console.log("Verify user");
          }
        });
      }
      if (!user) {
        setUser(user);
        setIsload(true);
        setisuserload(false);
        setUserbooklist(null);
        setUpdate(null);
      }
    });
    return () => unSubscribe();
  },[update]);

  const LogOutUser = () => {
    axios.post("/logoutuser", { email: User.email }).then((res) => {
      if (res.data.success) {
        console.log(res.data);
      }
    });
    setIsload(!isLoad);
    return signOut(Userauth);
  };
  const data = {
    isLoad,
    setIsload,
    User,
    setUser,
    LogOutUser,
    userbooklist,
    setUserbooklist,
    setUpdate,
    isuserload,
  };

  return <Usercontext.Provider value={data}>{children}</Usercontext.Provider>;
};

Userinfocontext.propTypes = {
  children: PropTypes.node,
};

export default Userinfocontext;
