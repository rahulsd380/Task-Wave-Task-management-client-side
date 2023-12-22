import { IoMdNotificationsOutline } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { FaAnglesRight } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Drawer2 from "../../Drawer2/Drawer2";

const Header = () => {
  const {user, logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
    .then(result => {
      console.log(result.user);
      navigate('/')
    })
    .then(error => {
      console.log(error);
    })
  }
    return (
        <div>
            
            <div className="space-y-7 pb-8">
            <div className="flex justify-between">
            <div className="flex items-center gap-2">
            <div className="block md:hidden">
            <Drawer2></Drawer2>
            </div>
            <div className="block md:hidden flex items-center">
            <img
              className="w-10"
              src="https://i.ibb.co/FBLHBHw/logo.png"
              alt=""
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">TaskWave</h1>
          </div>
            <div className="hidden md:flex items-center">
            <input type="text" placeholder="Find Anything..." className="px-2 h-10 rounded-l-md border-y border-l border-gray-400" />
            <div className="border border-gray-400 px-2 h-10 rounded-r-md flex justify-center items-center">
            <FaAnglesRight className="text-teal-600 text-3xl"></FaAnglesRight>
            </div>
            </div>
            </div>


    <div className="flex items-center gap-5">
        <GoQuestion className="hidden md:block text-2xl"></GoQuestion>
        <IoMdNotificationsOutline className="hidden md:block text-3xl"></IoMdNotificationsOutline>
        <div className="hidden md:block w-0.5 bg-gray-300 h-8"></div>
        {/* user icon */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full bg-teal-200 p-1">
          <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <Link to={"/"}><a onClick={handleLogout}>Logout</a></Link>
      </ul>
    </div>
    </div>


  </div>

  <div className="bg-gradient-to-r from-slate-100 to-emerald-100 p-3 rounded-2xl">
        <div className="max-w-2xl">
        <h1 className="text-gray-500 text-2xl font-bold mb-1">Welcome Back, <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">{user?.displayName}</span></h1>
        <p className="text-gray-400">Efficiently manage tasks with personalized features. Elevate productivity and stay organized effortlessly. Welcome aboard!</p>
        </div>
  </div>
            </div>
        </div>
    );
};

export default Header;