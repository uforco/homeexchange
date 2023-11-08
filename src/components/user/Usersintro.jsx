import { Link, useNavigate } from "react-router-dom";
import user from "../../assets/icons/profile-user.png"
import Contextdata from './../../hooks/Contexthook';

const Usersintro = () => {
  const Navigatebackhome = useNavigate()
  // console.log( Contextdata() )
  const {User,  LogOutUser} = Contextdata() 
  const LogOut = () => {
    LogOutUser().then(()=>{
      Navigatebackhome("/")
    })
      .catch()
  }
  console.log(User)
  return (
    <div>
      <div className="dropdown static  dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3  p-2 z-40 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <span className="justify-between">
              Profile
              <span className="badge">
                {
                  User?.displayName?
                    User?.displayName
                  :
                    "guest"
                }
              </span>
            </span>
          </li>
          <li>
            <Link to="/dashboard" >Dashboard</Link>
          </li>
          <li>
            {
              !User? 
                <Link to="/login" >LogIn</Link>
              :
                <button onClick={LogOut}  >Log Out</button>
            }
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Usersintro;
