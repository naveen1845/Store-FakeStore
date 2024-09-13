import FakeStore_BaseURL from "./constants"
import axios from "axios";

const axiosInstance = axios.create({
    baseURL : FakeStore_BaseURL
})


export default axiosInstance;