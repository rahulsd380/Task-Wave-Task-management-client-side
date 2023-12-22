import { GoHome } from "react-icons/go";
import { Link, NavLink, Outlet} from 'react-router-dom';
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { MdCallMissedOutgoing } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdAddCard } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
import { AiOutlineFundView } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const DashboardLayout = () => {
    const [todoList, setTodoList] = useState([]);
    const {user} = useContext(AuthContext);

    const  url = `https://task-management-server-navy.vercel.app/tasks?email=${user?.email}`
    console.log(todoList);

    useEffect( () => {
        setTimeout(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setTodoList(data)
            })
        }, 2000)
    }, [url, setTodoList])

    const todoLists = todoList.filter(list => list.status === 'to-do');
    const ongoingLists = todoList.filter(list => list.status === 'On-going');
    const completedLists = todoList.filter(list => list.status === 'Completed');
    return (
        <div>
            <div className='flex'>
                <div className='w-72 p-10 hidden md:flex flex-col gap-7 bg-gradient-to-r from-slate-100 to-emerald-100 h-screen text-lg border-r shadow flex-none font-Lato'>
                <div className="flex items-center">
            <img
              className="w-10"
              src="https://i.ibb.co/FBLHBHw/logo.png"
              alt=""
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">TaskWave</h1>
          </div>
                    <Link to={"/"} className='text-gray-500 font-semibold hover:text-teal-500 transition duration-300 flex items-center gap-3'><GoHome></GoHome> Home</Link>
                    <NavLink to={"/dashboard/addTask"} className='text-gray-500 font-semibold hover:text-teal-500 transition duration-300 flex items-center gap-3'><MdAddCard></MdAddCard>Add New Task</NavLink>
                    <NavLink to={"/dashboard/allTasks"} className='text-gray-500 font-semibold hover:text-teal-500 transition duration-300 flex items-center gap-3'><MdManageHistory></MdManageHistory> Manage All Tasks</NavLink>
                    <div>
                    <p className='text-gray-500 font-semibold flex items-center gap-3 mb-3'><AiOutlineFundView></AiOutlineFundView> Task Overview</p>
                        <div className="px-7">
                        <NavLink to={"/dashboard/todo"} className='text-gray-500 text-sm font-semibold hover:text-teal-500 transition duration-300 flex items-center justify-between gap-3 mb-3 border-b border-gray-400 pb-2'><p className="flex items-center gap-3"><FaArrowsTurnToDots className="text-rose-600"></FaArrowsTurnToDots> To-Do</p> <span>({todoLists.length})</span></NavLink>
                        <NavLink to={"/dashboard/ongoing"} className='text-gray-500 text-sm font-semibold hover:text-teal-500 transition duration-300 flex items-center justify-between gap-3 mb-3 border-b border-gray-400 pb-2'><p className="flex items-center gap-3"><MdCallMissedOutgoing className="text-yellow-600"vvvvvvvvvvvvvvv></MdCallMissedOutgoing> Ongoing</p> <span>({ongoingLists.length})</span></NavLink>
                        <NavLink to={"/dashboard/completed"} className='text-gray-500 text-sm font-semibold hover:text-teal-500 transition duration-300 flex items-center justify-between gap-3 mb-3 border-b border-gray-400 pb-2'><p className="flex items-center gap-3"><IoCheckmarkDoneCircleSharp className="text-green-600"></IoCheckmarkDoneCircleSharp> Completed</p> <span>({completedLists.length})</span></NavLink>
                        </div>
                    </div>
                    <NavLink to={"/dashboard/calender"} className='text-gray-500 font-semibold hover:text-teal-500 transition duration-300 flex items-center gap-3'><SlCalender></SlCalender>Calender</NavLink>
                    <NavLink to={"/dashboard/manageProducts"} className='text-gray-500 font-semibold hover:text-teal-500 transition duration-300 flex items-center gap-3'><IoMdNotificationsOutline></IoMdNotificationsOutline>Notifications</NavLink>
                    
                </div>

                <div className='p-5 flex-auto overflow-y-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;