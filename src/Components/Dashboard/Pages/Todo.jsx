import { useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import Header from "./Header";
import useAxiosClient from "../../Hooks/useAxiosClient";
import Swal from "sweetalert2";
import useAllTasks from "../../Hooks/useAllTasks";
import { useDrag } from "react-dnd";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { TbFaceIdError } from "react-icons/tb";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import finding from "../../../../public/finding.json"
import empty from "../../../../public/empty.json"


const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const axiosUser = useAxiosClient();
    const [, ,refetch] = useAllTasks();
    const {user} = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true);



    const  url = `https://task-management-server-navy.vercel.app/tasks?email=${user?.email}`
    console.log(todoList);

    useEffect( () => {
        setTimeout(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setTodoList(data)
                setIsLoading(false)
            })
        }, 2000)
    }, [url])

    const todoLists = todoList.filter(list => list.status === 'to-do');


    const handleMakeCompleted = item => {
        axiosUser.patch(`/tasks/completed/${item._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
              
                Swal.fire({
                    icon: "success",
                    title: `${item.title}has been completed`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch()
            }
        })
    }

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: todoList.map(list => list._id),
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
      console.log(isDragging);
    return (
        <div className="max-w-7xl mx-auto py-10">
            <Header></Header>
            <h1 className="text-3xl font-bold mb-7 pb-3 border-b text-teal-500">To-Do Task List</h1>
            {
                isLoading ? <div className="flex justify-center"><div className="w-48"><Lottie animationData={finding}></Lottie></div> </div>
                :
                <div>
            {
                isLoading? <span className="loading loading-spinner loading-lg"></span>
                :
                
                    todoLists.length == 0 ? <div className="flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                    <div className="w-48"><Lottie animationData={empty}></Lottie></div>
                    <h1 className="text-teal-500 text-4xl font-semibold text-center mb-5">No task available</h1>
                    <Link to={"/dashboard/addTask"}>
            <button className="text-white font-semibold px-4 py-2 bg-gradient-to-r from-emerald-300 to-emerald-500 transition duration-300 rounded-md text-center">Add New Task</button>
            </Link>
                    </div>
                </div>
                :
   <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                   {
                       todoLists.map(list => <div ref={drag} key={list._id}>
                           <div className="bg-[#F1F1F2] p-3 rounded-md">
                   <h1 className="text-2xl font-bold mb-1 bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">{list.title}</h1>
   
                   <div className="flex justify-between items-center mb-1">
                       <p className="flex items-center gap-2 text-sm text-[#6D6E70]"><FaUser></FaUser> {list.userName}</p>
                       <p className="flex items-center gap-2 text-sm text-[#6D6E70]"><MdOutlineDateRange></MdOutlineDateRange> {list.deadline}</p>
                       
                   </div>
   
                      <p className="mb-2 text-[#6D6E70]">{list.taskDescription}</p>
                      
                      
                      <button onClick={() => handleMakeCompleted(list)} className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-md w-full text-center">Mark As Completed</button>
                      
               </div>
                       </div>)
                   }
               </div>
               
            }
            </div>

            }
            
            
        </div>
    );
};

export default Todo;
