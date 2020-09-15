export const  actionTypes = {
    ADD_TO_DO : "ADD_TO_DO",
    LOAD_POSTS: "LOAD_POSTS",
}

export const addPost = (payload) => {
    return {
        type: actionTypes.ADD_TO_DO,
        payload
        
    }
}

export const loadPost = (payload) => {
    return {
        type: actionTypes.LOAD_POSTS,
        payload
        
    }
}