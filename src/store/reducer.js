import { SET_NUMBER_INPUT } from "./Constans"

 const initState={
    tableNumber:1,
    inputTableNumber:1
}

function reducer(state,actiton){
    switch(actiton.type){
          case SET_NUMBER_INPUT:
             return{
                ...state,
                tableNumber:actiton.payload,
                inputTableNumber:actiton.payload
             }
          default:
            throw new Error("Invalid action hehe...")
    }
}

export {initState}
export default reducer