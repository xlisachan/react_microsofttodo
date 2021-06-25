import C from '../actions/constants';

const initialState = "";

const queryReducer = (state=initialState, action) => {
	switch(action.type) {
        case C.CHANGE_QUERY :
            return action.payload
        
        case C.CLEAR_QUERY :
            return ''
        
        default :
            return state
    }
}

export default queryReducer;
