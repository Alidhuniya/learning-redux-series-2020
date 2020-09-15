export const actionType = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET",
}

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
     }
}

 export const   decrement = () => {
    return {
       type: actionTypes.DECREMENT
    }
 }
 export const reset = () => {
    return { type: actionTypes.RESET }
 }