import axiosClient from "./axiosClient";

const END_POINT ={
    Login: "Auth/Login",
    Register: "Auth/Register"
}

export const loginAPI=(payload)=>{
    return axiosClient.post(`${END_POINT.Login}`,{payload})
}
export const registerAPI=(username,password,role)=>{
    return axiosClient.post(`${END_POINT.Register}`,{username,password,role});


}

