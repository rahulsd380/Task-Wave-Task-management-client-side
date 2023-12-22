import Lottie from "lottie-react";
import teacher from "../../../public/teacher.json"
import { Link } from "react-router-dom";


const Banner2 = () => {
    return (
        <div><div className="max-w-6xl mx-auto py-20 px-5 md:px-0">
            <div className="flex items-center gap-5 mb-7">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-8 w-1 rounded-md"></div>
                    <h1 className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent font-bold text-3xl md:text-4xl">Join us to manage your tasks</h1>
                    </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-r from-emerald-100 to-emerald-100 p-4 rounded-xl w-full">
                <div className="w-full">
                <Lottie animationData={teacher}></Lottie>
                </div>

                <div>
                    <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent mb-3 md:mb-5">Start Your Journey!!</h1>
                    <p className=" mb-8">Embark on a transformative journey as an instructor, guiding learners worldwide. Unleash your expertise, craft compelling courses, and foster a vibrant community of knowledge seekers. Join a platform that values your insights, empowering you to shape minds, enrich lives, and contribute to a global education revolution.</p>
                    <Link to={"/dashboard/addTask"} className="bg-gradient-to-r from-emerald-300 to-emerald-500 px-6 py-3 rounded-lg text-white font-semibold">Join Now</Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner2;