
import { MdVideoLibrary } from "react-icons/md";
import { IoBarChartOutline } from "react-icons/io5";
import { GrCubes } from "react-icons/gr";
import { FaVideo } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { SiBoost } from "react-icons/si";
import { SiHelpscout } from "react-icons/si";
import { IoTimeOutline } from "react-icons/io5";
import { BsBack } from "react-icons/bs";
import { IoIosAnalytics } from "react-icons/io";


const Benefit = () => {
    return (
        <div className="max-w-6xl mx-auto py-20 px-5 md:px-0">
            <div>
            <div className="flex items-center gap-5 mb-7">
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-14 w-1 rounded-md"></div>
                <div>
                <h1 className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent font-bold text-3xl md:text-4xl">You Will Be Provided:</h1>
                <p className="text-gray-600">View what you will get after joining us:</p>
                </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                    <div className="bg-gray-50 p-4 border-2 border-teal-200 rounded-lg">
                        <div className="flex justify-center items-center"><SiBoost className="text-9xl font-bold text-teal-500 text-center mb-2"></SiBoost></div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent text-center mb-2">Efficiency Boost</h1>
                            <p className="text-gray-600 text-center">Maximize productivity and focus with streamlined tasks, enhancing your workflow through our intuitive platform designed for seamless and effective task management.</p>
                    </div>
                    <div className="bg-gray-50 p-4 border-2 border-blue-100 rounded-lg">
                        <div className="flex justify-center items-center"><SiHelpscout className="text-9xl font-bold text-teal-500 text-center mb-2"></SiHelpscout></div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent text-center mb-2">Seamless Collaboration</h1>
                            <p className="text-gray-600 text-center">Promote teamwork with shared tasks, real-time updates, and collaborative features, fostering enhanced productivity and efficiency in achieving collective goals.</p>
                    </div>
                    <div className="bg-gray-50 p-4 border-2 border-teal-200 rounded-lg">
                        <div className="flex justify-center items-center"><IoTimeOutline className="text-9xl font-bold text-teal-500 text-center mb-2"></IoTimeOutline></div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent text-center mb-2">Deadline Mastery</h1>
                            <p className="text-gray-600 text-center"> Effortlessly manage project timelines, ensuring timely completion and successful goal achievement with our platform intuitive tools for effective project management.</p>
                    </div>
                    <div className="bg-gray-50 p-4 border-2 border-blue-100 rounded-lg">
                        <div className="flex justify-center items-center"><BsBack className="text-9xl font-bold text-teal-500 text-center mb-2"></BsBack></div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent text-center mb-2">Enhanced Organization</h1>
                            <p className="text-gray-600 text-center"> Keep projects well-organized, monitor progress, and access information easily through our intuitive interface, optimizing project management for improved efficiency and success.</p>
                    </div>
                    <div className="bg-gray-50 p-4 border-2 border-teal-200 rounded-lg">
                        <div className="flex justify-center items-center"><IoIosAnalytics className="text-9xl font-bold text-teal-500 text-center mb-2"></IoIosAnalytics></div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent text-center mb-2">Insightful Analytics</h1>
                            <p className="text-gray-600 text-center">Gain valuable insights into your work patterns, identify strengths, and improve efficiency with our platform analytics tools for enhanced productivity and self-improvement.</p>
                    </div>
                    <div className="bg-gray-50 p-4 border-2 border-teal-200 rounded-lg">
                        <div className="flex justify-center items-center"><PiCertificateBold className="text-9xl font-bold text-teal-500 text-center mb-2"></PiCertificateBold></div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent text-center mb-2">Anywhere, Anytime Access</h1>
                            <p className="text-gray-600 text-center"> Enjoy the flexibility of managing tasks from any device, optimizing your workflow convenience, and ensuring you stay on top of your tasks no matter where you are.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefit;