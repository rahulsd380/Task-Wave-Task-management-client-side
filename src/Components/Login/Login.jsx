import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import useAxiosClient from "../Hooks/useAxiosClient";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const Login = () => {

    const {login, googleSignUp} = useContext(AuthContext)
    const navigate = useNavigate();
    const axiosUser = useAxiosClient();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        const toastId = toast.loading("Signing In...")
        login(email, password)
        .then(result => {
            console.log(result.user);
            if (result.user?.email) {
                toast.success("Signed in successfully.", { id: toastId });
                navigate(location?.state ? location.state : "/");
              }
            navigate( "/dashboard/allTasks")
        })
        .catch(error => {
            console.error(error);
        })
    }


    const googleSignIn = () => {
        googleSignUp()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email
            }
            axiosUser.post('/users',userInfo )
            .then(res => {
                console.log(res);
                navigate( "/dashboard/allTasks")
            })
        })
    }
    
    return (
        <div>
        <Helmet>
               <title>Rent Nest | Sign Up</title>
           </Helmet>
           <Navbar></Navbar>
         <div className="max-w-6xl mx-auto py-10">
       <div className="grid grid-cols-2 gap-10 items-center bg-white rounded-md shadow-md">

         {/* Left side form */}
         <form className="p-14" onSubmit={handleLogin}>
         <div>
         <div className="flex items-center mb-2">
          <img
            className="w-10"
            src="https://i.ibb.co/FBLHBHw/logo.png"
            alt=""
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
            TaskWave
          </h1>
        </div>
           <h1 className="text-xl font-bold text-gray-600 mb-1">
             Welcome back to<span className="text-teal-500">Task Wave.</span> 
           </h1>
           <p className="text-gray-600 mb-4">Enter your login credentials to access you task.</p>
           
 
           <div>
             
 
             <div className="mb-2">
               <p className="mb-1 font-semibold text-gray-600">Your Email</p>
               <input
               name="email"
                 className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                 type="email"
                 placeholder="rahul@gmail.com"
               />
             </div>
 
             <div className="mb-3">
               <p className="mb-1 font-semibold text-gray-600">Password</p>
               <input
               name="password"
                 className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                 type="password"
                 placeholder="*********"
               />
             </div>


             <div className="mb-3 flex justify-between items-center">
                <p className="textgray-600 font-semibold flex items-center gap-2"><input type="checkbox"  className="checkbox text-blue-600" /> Remember me</p>


                <p className="textgray-600 font-semibold text-teal-500">Forgot Password?</p>
             </div>
 
             <button className="w-full font-semibold transition duration-300 bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded text-white mb-3">
               Sign In
             </button>

             <p className="mb-3 text-center text-gray-600 font-semibold">Or,</p>


             <button onClick={googleSignIn} className="w-full font-semibold transition duration-300 border border-gray-300 hover:shadow-md px-4 py-2 rounded text-gray-600 mb-3 flex items-center gap-2 justify-center">
             <FcGoogle></FcGoogle> Coninue with Google
             </button>

             <p className="mb-4 text-center">
             Don't Have An Account?{" "}
             <Link to={"/signup"} className="text-blue-500 font-semibold underline">Sign Up</Link>
           </p>
           </div>
         </div>
         
         </form>

        {/* Right side banner */}
         <div className=" h-full">
           <div
             className="hero h-full"
             style={{
               backgroundImage:
                 "url(https://i.ibb.co/wB56L75/eden-constantino-i-Jg1-Yzs-Efqo-unsplash.jpg)",
             }}
           >
             <div className="hero-overlay bg-opacity-60"></div>
             <div className="hero-content text-center text-neutral-content">
               <div className="max-w-md">
                 <h1 className="mb-5 text-4xl font-bold">
                 Manage your task to be successfull! Join Us Today!
                 </h1>
                 <p className="mb-5">
                 Empower your journey to success by efficiently managing your tasks! Join us today to streamline your workflow, stay organized, and achieve your goals with ease.
                 </p>
                 <button className="p-2 bg-teal-600 rounded-md">Get Started</button>
               </div>
             </div>
           </div>
         </div>



       </div>
     </div>
     <Toaster
   position="bottom-center"
   reverseOrder={false}
 />
     </div>
    );
};

export default Login;