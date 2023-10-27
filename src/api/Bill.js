import axiosClient from "./axiosClient";

const END_POINT ={
    BILL: "Bill"
}

export const getBillAPI=()=>{
    return axiosClient.get(`${END_POINT.BILL}`)
}
export const getBillByTableIdAPI=(tableId)=>{
    return axiosClient.get(`${END_POINT.BILL}/${tableId}`)
}




