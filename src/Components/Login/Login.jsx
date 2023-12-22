import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FcGoogle } from "react-icons/fc";
import useAxiosClient from "../Hooks/useAxiosClient";


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

        login(email, password)
        .then(result => {
            console.log(result.user);
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
             <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
            </div>
            
            <div className="px-10 py-10 md:px-96 md:py-20">
            <div className="bg-gradient-to-r from-slate-100 to-emerald-100 border p-10 rounded-md">
                <h1 className="font-bold text-3xl mb-10 text-center text-teal-500">Login Your Account</h1>
                <form onSubmit={handleLogin}>
                <div>
                    <p className="font-semibold mb-3 text-teal-700">Email Address</p>
                    <input className="p-2 rounded-md mb-3 w-full" type="email" name="email" placeholder="Enter your email address" />
                </div>
                <div>
                    <p className="font-semibold mb-3 text-teal-700">Password</p>
                    <input className="p-2 rounded-md mb-8 w-full" type="password" name="password" placeholder="Enter your email password" />
                </div>
                <button className="bg-gradient-to-r from-emerald-300 to-emerald-500 font-semibold p-3 rounded-md text-white w-full">Login</button>
                <button onClick={googleSignIn}
      className="mt-6 w-full select-none rounded-lg py-4 px-6 text-center align-middle font-sans text-sm font-bold uppercase border-2 transition-all hover:shadow-sm hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex gap-5 items-center text-gray-400 justify-center"
      data-ripple-light="true"
    >
        <FcGoogle className="text-2xl text-blue-700"></FcGoogle>
      Continue With Google
    </button>
                </form>
                <p className="text-center mt-4">Dont’t Have An Account ? <Link to={"/signup"} className="text-teal-600 font-semibold">Signup</Link></p>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Login;