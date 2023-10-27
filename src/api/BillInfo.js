import axiosClient from "./axiosClient";

const END_POINT ={
    BILLINFO: "BillInfo"
}

export const getBillInfoAPI=()=>{
    return axiosClient.get(`${END_POINT.BILLINFO}`)
}
export const getBillInfoByBillIdAPI=(billId)=>{
    return axiosClient.get(`${END_POINT.BILLINFO}/${billId}`)
}




