import {actionTypes} from "../actions/index";

const initialState = {
    posts: [{id: 1, title: 'Test Post'}],
    loginModal: {
      open: false
    }
  }
  
  export const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.ADD_TO_DO ) {
        return {
            ...state,
            posts: state.posts.concat(action.payload)
          }
      
    }
  
    return state
  }