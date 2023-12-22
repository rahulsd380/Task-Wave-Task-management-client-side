import axios from "axios";


const axiosUser = axios.create({
    baseURL: 'https://task-management-server-navy.vercel.app'
})

const useAxiosClient = () => {
    return axiosUser;
};

export default useAxiosClient;