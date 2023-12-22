import { Link } from "react-router-dom";
import Header from "./Header";
import Lottie from "lottie-react";
import task2 from "../../../../public/task2.json";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosClient from "../../Hooks/useAxiosClient";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddProduct = () => {
    const {user} = useContext(AuthContext);
  const axiosUser = useAxiosClient();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const info = {
        userName: user.displayName,
        email: user.email,
      title: data.title,
      deadline: data.deadline,
      priority: data.priority,
      taskDescription: data.taskDescription,
      status: "to-do",
    };

    try {
      const allTasks = await axiosUser.post('/tasks', info);
      console.log(allTasks.data);

      if (allTasks.data.insertedId) {
        reset();
        Swal.fire({
          icon: "success",
          title: "Your task has been created",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <h1 className="text-4xl font-bold mb-7">Add A New Task</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center border bg-gray-50 p-3 rounded-lg">
            {/* Text Information Section */}
            <div className="">
              <input
                {...register("title")}
                name="title"
                type="text"
                placeholder="Title"
                className="input input-bordered w-full mb-7"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-7">
                <input
                  {...register("deadline")}
                  name="deadline"
                  type="date"
                  placeholder="Deadline"
                  className="input input-bordered w-full"
                />
                <select
                  {...register("priority")}
                  name="priority"
                  className="select select-bordered w-full text-gray-400"
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

              <textarea
                {...register("taskDescription")}
                name="taskDescription"
                rows={"5"}
                className="textarea textarea-bordered w-full mb-5"
                placeholder="Task Description"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <Link to={"/"}>
                  <button className="text-gray-500 bg-white font-semibold px-4 py-2 border-2 rounded-md w-full text-center">
                    Cancel
                  </button>
                </Link>

                <button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-md w-full text-center">
                  Add New
                </button>
              </div>
            </div>

            {/* Animation */}
            <div className="w-11/12">
              <Lottie animationData={task2} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
















{/* <details className="dropdown">
//   <summary className="m-1 btn btn-sm bg-blue-900 text-gray-200 border-none hover:bg-blue-700"><BsThreeDots className="text-lg"></BsThreeDots></summary>
  
//   <ul className="p-3 shadow menu dropdown-content bg-base-100 rounded-box w-40 z-10">
//     <button className="flex items-center gap-4 mb-4"><FcApproval className="text-xl"></FcApproval><p className="text-green-600">Make Admin</p></button>


//     <button className="flex items-center gap-4"><RiDeleteBack2Fill className="text-xl text-rose-600"></RiDeleteBack2Fill><p className="text-rose-600">Delete</p></button>
//   </ul>
// </details> */}