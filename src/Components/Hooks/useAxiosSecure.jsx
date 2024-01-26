import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://task-management-server-delta-three.vercel.app/'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;