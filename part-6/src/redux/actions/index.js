export const  actionTypes = {
    ADD_TO_DO : "ADD_TO_DO"
}

export const addPost = (payload) => {
    return {
        type: actionTypes.ADD_TO_DO,
        payload
        
    }
}