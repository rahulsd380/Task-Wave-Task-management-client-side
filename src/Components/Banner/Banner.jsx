import task from "../../../public/task.json"
import Lottie from "lottie-react";
import { TiTick } from "react-icons/ti";

const Banner = () => {
    return (
        <div className="max-w-6xl mx-auto py-10 md:py-0">
 <div className="grid grid-cols-1 md:grid-cols-2 items-center px-5 md:px-0">
            <div>

                <h1 className="text-3xl md:text-5xl font-bold leading-[3rem] md:leading-[4rem] bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent mb-5">Unlock Your Productivity<br /> Superpower.<br /> <span className=" text-blue-500">
                    
                    </span> </h1>
                <p className="mb-5">Elevate your expertise. Empowering learners with dynamic courses, personalized paths, and hands-on projects. Unlock your potential, acquire new skills, and thrive in a future driven by continuous learning.</p>
                
                <div className="flex items-center">
                <button className="text-white bg-gradient-to-r from-emerald-300 to-emerald-500 font-semibold  rounded-md h-12 px-6">Let’s Explore</button>
                </div>

                <div className="flex gap-20 mt-7">
                <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-emerald-300 to-emerald-500 text-white text-xl w-8 h-8 rounded-full flex justify-center items-center">
                        <TiTick></TiTick>
                    </div>
                    <p className="text-gray-500">Free All Class Notes</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-emerald-300 to-emerald-500 text-white text-xl w-8 h-8 rounded-full flex justify-center items-center">
                        <TiTick></TiTick>
                    </div>
                    <p className="text-gray-500">30 Days Free Trial</p>
                </div>
                </div>
            </div>

            <div className="w-11/12">
                <Lottie animationData={task}></Lottie>
            </div>
        </div>
        </div>
       
    );
};

export default Banner;