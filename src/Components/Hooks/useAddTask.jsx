import axios from "axios";


const axiosAddTask = axios.create({
    baseURL: 'https://task-management-server-delta-three.vercel.app/'
})

const useAddTask = () => {
    return axiosAddTask;
};

export default useAddTask;