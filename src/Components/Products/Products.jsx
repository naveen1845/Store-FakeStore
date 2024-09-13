import { useState } from "react";
import { useQuery } from "react-query";
import FetchProducts from "../../Services/fetchProducts";
import CategoryStore from "../../State/CategoryStore";

function Products(){
    const {category} = CategoryStore();
    const {data, isLoading} = useQuery({
        queryKey: ['product', category],
        queryFn: () => FetchProducts(category),
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    })


    return(
        <div>
            <div className="my-5 px-5 w-full grid grid-cols-4 gap-5">
                {isLoading && <div>Loading...</div>}
               {data && data.map((product)=>{
                return(
                <div key={product.id} className="p-5 bg-white border flex flex-col justify-center items-center gap-5 rounded-3xl">
                    <div className="w-[10rem] h-[10-rem]">
                        <img className="w-full" src={product.image} alt="img" />
                    </div>
                    <div className="text-2xl font-semibold text-black">
                    {product.title}
                    </div>
                    <div className="flex gap-5">
                        <button className="py-2 px-5 bg-yellow-600 text-white rounded-md">Add to Cart</button>
                        <button className="py-2 px-5 bg-green-700 text-white rounded-md">Buy Now</button>
                    </div>
                </div>
                )
               })}
                
            </div>
        </div>
    )
}

export default Products;