import axiosInstance from "../Helpers/axiosInstance"

async function FetchProducts(category = null){
    try {
        if(category) {
            const result = await axiosInstance.get(`/products/category/${category}`);
            return result.data ;
        } else {
            const result = await axiosInstance.get("/products");
            return result.data ;
        }
        
    } catch (error) {
        console.log(error);
        
    }
}

export default FetchProducts;