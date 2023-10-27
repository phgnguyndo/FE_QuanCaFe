import React from "react";
import Header from '../Components/Header'
import WrapperBody from "../Components/WrapperBody";
import Head from "../Components/MakeColor/Head";
import { useStore } from "../store";
const Home =()=>{

    // const [state, dispatch]=useStore()
    // // const [number, numberInput]=state

    // console.log(state);
    return(
       <>
       <Header/>
       <Head/>
       <WrapperBody/>
       </>
    )
}
export default Home