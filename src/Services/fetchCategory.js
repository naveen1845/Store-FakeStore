import axiosInstance from "../Helpers/axiosInstance";

async function fetchCategory(){
    try {
        const result = await axiosInstance.get("/products/categories")
        return result.data
    
    } catch (error) {
        console.log(error);
        
    }
}

export default fetchCategory;