import axiosClient from "./axiosClient";

const END_POINT ={
    TABLE: "Table"
}

export const getTableByNameAPI=(name)=>{
    return axiosClient.get(`${END_POINT.TABLE}/${name}`)
}
export const getTableAPI=()=>{
    return axiosClient.get(`${END_POINT.TABLE}`)
}