import Lottie from "lottie-react";
import teacher from "../../../public/teacher.json";
import { Link } from "react-router-dom";

const Banner2 = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-20 px-5 md:px-0">
      <div>
                <h1 className="text-4xl font-bold text-gray-600 text-center mb-2">Join Us Today</h1>
                <p className="text-center text-gray-500 mb-10">Join us today for a journey of collaboration and success. Experience a community <br /> that values growth and connection. Let's thrive together!</p>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-r from-emerald-100 to-emerald-100 p-4 rounded-xl w-full border border-gray-300">
          <div className="w-full">
            <Lottie animationData={teacher}></Lottie>
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent mb-3 md:mb-5">
              Start Your Journey!!
            </h1>
            <p className=" mb-8">
              Embark on a journey to heightened productivity! Start efficiently
              managing tasks with our user-friendly platform. Experience
              seamless organization and accomplishment. This is your key to
              unlocking a more productive and successful path. Begin your
              journey now and transform the way you work!
            </p>
            <Link
              to={"/dashboard/addTask"}
              className="bg-gradient-to-r from-emerald-300 to-emerald-500 px-6 py-3 rounded-lg text-white font-semibold"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
