
import { actionType } from './../actions/index';

const initState = 0;

const reducer = (state = initState, action) => {
    switch (action.type) {
       case actionType.INCREMENT: return state + 1
       case actionType.DECREMENT: return state - 1
       case actionType.RESET : return 0
        default: return state
    }
 }
 export default reducer;