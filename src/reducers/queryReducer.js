import C from '../actions/constants';

const initialState = "";

export default (state=initialState, action) => {
	switch(action.type) {
        case C.CHANGE_QUERY :
            return action.payload
        
        case C.CLEAR_QUERY :
            return ''
        
        default :
            return state
    }
}