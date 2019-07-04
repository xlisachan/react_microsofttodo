import C from '../constants';

const listTitle = (state="My Day", action) => 
	(action.type === C.SET_TITLE) ? 
		action.payload :
        state

const rootReducer = listTitle

export default rootReducer;