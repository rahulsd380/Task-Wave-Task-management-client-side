
import useAllTasks from "../../Hooks/useAllTasks";
import Header from "./Header";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { IoMdDoneAll } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxiosClient from "../../Hooks/useAxiosClient";
import Swal from "sweetalert2";
import { FaPersonRunning } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import finding from "../../../../public/finding.json"
import Lottie from "lottie-react";


const AllTasks = () => {
    const {user} = useContext(AuthContext);
    const [allTasks,isLoading ,refetch] = useAllTasks();
    const axiosUser = useAxiosClient();
    const handleUpdateHero = (e, _id) => {
        e.preventDefault();
        
        const userName = user.displayName;
        const title = e.target.title.value;
        const deadline = e.target.deadline.value;
        const priority = e.target.priority.value;
        const taskDescription = e.target.taskDescription.value;

        const allData = {userName, title, taskDescription,deadline, priority};
        console.log(allData);

        const toastId = toast.loading("Updating...")
        fetch(`https://task-management-server-navy.vercel.app/tasks/${_id}`, {
            method: "PUT",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(allData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                toast.success('Updated Successfully.', { id: toastId})
                }
        })
    }

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


    const handleDeleteTask = i => {
        console.log(i);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosUser.delete(`/tasks/${i._id}`)
                .then(res => {
                    console.log(res);
                    if(res.data.deletedCount > 0){
                      
                        Swal.fire({
                            title: "Deleted!",
                            text: "User removed successfully.",
                            icon: "success"
                          });
                    }
                })
              
            }
          });
    }

    const handleMakeOngoing = item => {
        axiosUser.patch(`/tasks/ongoing/${item._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
              
                Swal.fire({
                    icon: "success",
                    title: `${item.title}has been started`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    // mb-7 pb-3 border-b

    return (
        <div className="max-w-7xl mx-auto py-10">
            <Header></Header>
            <div className="flex justify-between">
            <h1 className="text-3xl font-bold text-teal-500">All Tasks</h1>
            <Link to={"/dashboard/addTask"}>
            <button className="text-white font-semibold px-4 py-2 bg-gradient-to-r from-emerald-300 to-emerald-500 transition duration-300 rounded-md text-center">Add New Task</button>
            </Link>
            </div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-teal-500 font-semibold text-base">
        <th>Name</th>
        <th>Title</th>
        <th>Deadline</th>
        <th>Priority</th>
        <th>Description</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    {
      isLoading ? <div className="flex justify-center"><div className="w-48"><Lottie animationData={finding}></Lottie></div> </div>
      :
<tbody>
      {
        allTasks.map((task,index) =>
        <tr key={task._id} className="bg-gradient-to-r from-slate-100 to-emerald-100">
          <td>{index + 1}</td>
          <td>{task.title}</td>
          <td>{task.userName}</td>
          <td>{task.deadline}</td>
          <td>{task.priority}</td>
          <td>{task.taskDescription}</td>
          <td>{task.status}</td>
          <td>
            <div className="flex items-center gap-2" >
            <button onClick={() => handleDeleteTask(task)} className="p-2 border rounded-md bg-gray-50 flex justify-center items-center tooltip text-rose-600" data-tip="Edit Task">
            <MdDelete></MdDelete>
            </button>


            <div className="">
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button onClick={() => document.getElementById(`my_modal_${task._id}`).showModal()} className="p-2 border rounded-md bg-gray-50 flex justify-center items-center text-sky-600 tooltip" data-tip="Edit Task">
            <MdModeEditOutline></MdModeEditOutline>
            </button>
<dialog id={`my_modal_${task._id}`} className="modal">
<div className="modal-box bg-gray-200">
<h3 className="font-bold text-lg text-gray-600 mb-6">Update Task Details</h3>
<form onSubmit={(e) => handleUpdateHero(e, task._id)}>
<div className='grid grid-cols-1 gap-5'>
<div className="relative h-11 w-full">
<input required
type="text"
className="bg-gray-300 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 focus:border-2 focus:border-rose-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-600"
placeholder=" "
name='title'
/>
<label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-rose-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-rose-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-rose-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
Title
</label>
</div>
<div className="relative h-11 w-full">
<input required
type="date"
className="bg-gray-300 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 focus:border-2 focus:border-rose-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-600"
placeholder=" "
name='deadline'
/>
<label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-rose-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-rose-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-rose-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
Price
</label>
</div>
<select
name="priority"
className="bg-gray-300 select select-bordered w-full text-gray-400"
>
<option disabled selected>
Priority
</option>
<option value="low">Low</option>
<option value="moderate">Moderate</option>
<option value="high">High</option>
<option value="most important">Most Important</option>
</select>
</div>

<div className="relative h-32 w-full mt-7">
<input required
type="text"
className="bg-gray-300 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-rose-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-600"
placeholder=" "
name='taskDescription'
/>
<label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-rose-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-rose-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-rose-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
Description
</label>
</div>
<div className='flex flex-row-reverse items-center gap-9'>
<button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-red-500 to-red-800 rounded-md w-full text-center mt-5">Save Changes</button>

<div className="modal-action">
<form method="dialog" className='flex gap-10 w-full'>
{/* if there is a button in form, it will close the modal */}
<button className="text-gray-500 border border-gray-600 font-semibold px-4 py-2 rounded-md w-full text-center">Cancel</button>
</form>
</div>
</div>
</form>

<div className="modal-action hidden">
<form method="dialog" className='flex gap-10 w-full'>
{/* if there is a button in form, it will close the modal */}
<button className="text-gray-500 font-semibold px-4 py-2 rounded-md w-full text-center">Cancel</button>
</form>
</div>

</div>
</dialog>
</div>

            <button onClick={() => handleMakeOngoing(task)} className="p-2 border rounded-md bg-gray-50 flex justify-center items-center text-yellow-600 tooltip" data-tip="Mark as Ongoing">
            <FaPersonRunning></FaPersonRunning>
            </button>
            <button onClick={() => handleMakeCompleted(task)} className="p-2 border rounded-md bg-gray-50 flex justify-center items-center text-green-600 tooltip" data-tip="Mark as Done">
            <IoMdDoneAll></IoMdDoneAll>
            </button>
            </div>
          </td>
        </tr>)
      }
    </tbody>
    }
    
  </table>
</div>
            
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
};

export default AllTasks;