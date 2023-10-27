import axiosClient from "./axiosClient";

const END_POINT ={
    FOOD: "Foods"
}

export const getFoodAPI=()=>{
    return axiosClient.get(`${END_POINT.FOOD}`,{
        
    })
}
export const getFoodByIdAPI=(id)=>{
    return axiosClient.get(`${END_POINT.FOOD}/${id}`)
}

