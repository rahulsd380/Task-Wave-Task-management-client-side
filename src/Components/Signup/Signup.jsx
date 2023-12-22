import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../Navbar/Navbar";
import toast, { Toaster } from "react-hot-toast";
import useAxiosClient from "../Hooks/useAxiosClient";
import Footer from "../Footer/Footer";

const Signup = () => {
    const axiosUser = useAxiosClient();
    const {updateProfileInfo, signUp} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
    
        console.log(name, email,password);
    
        const toastId = toast.loading("Signing up...");
    
        signUp(email, password)
          .then((result) => {
            console.log(result.user);
            updateProfileInfo(name, photo)
            .then(() => {
              const userInfo = { name, email, photo, password};
              axiosUser.post("/users", userInfo)
              .then((res) => {
                console.log(res.data);
    
                if (res.data.insertedId) {
                  toast.success("Signed up successfully.", { id: toastId });
                  navigate(location?.state ? location.state : "/");
                }
              });
            });
          })
          .catch((error) => console.log(error))
    
          .catch((error) => {
            console.log(error);
          });
      };

    return (
        <div>
            <div className="max-w-7xl mx-auto">
            </div>
            <Navbar></Navbar>
            <div className="px-10 py-10 md:px-96 md:py-20">
            <div className="bg-gradient-to-r from-slate-100 to-emerald-100 border p-10 rounded-md">
                <h1 className="font-bold text-3xl mb-10 text-center text-teal-500">Register Your Account</h1>
                <form  onSubmit={handleSignUp}>
                <div>
                    <p className="font-semibold mb-3 text-teal-700">Your Name</p>
                    <input className="p-2 rounded-md mb-3 w-full" type="text" name="name" placeholder="Enter your full name" />
                </div>
                <div>
                    <p className="font-semibold mb-3 text-teal-700">Email Address</p>
                    <input className="p-2 rounded-md mb-3 w-full" type="email" name="email" placeholder="Enter your email address" />
                </div>
                <div>
                    <p className="font-semibold mb-3 text-teal-700">Photo URL</p>
                    <input className="p-2 rounded-md mb-3 w-full" type="text" name="photo" placeholder="Enter your email address" />
                </div>
                <div>
                    <p className="font-semibold mb-3 text-teal-700">Password</p>
                    <input className="p-2 rounded-md mb-8 w-full" type="password" name="password" placeholder="Enter your email password" />
                </div>
                <button className="bg-gradient-to-r from-emerald-300 to-emerald-500 font-semibold p-3 rounded-md text-white w-full">Sign Up</button>
                </form>
                <p className="text-center mt-4">Already Have An Account ? <Link to={"/login"} className="text-teal-500 font-semibold">Login</Link></p>
            </div>
        </div>
        <Footer></Footer>
        <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default Signup;