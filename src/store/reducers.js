import C from '../constants';
import { combineReducers } from 'redux';

const listTitle = (state="My Day", action) => 
	(action.type === C.SET_TITLE) ? 
		action.payload :
        state

const moreInfo = (state=[], action) =>
    (action.type === C.SET_MOREINFO) ?
        action.payload :
        state

const tasks = (state=[], action) => {
    switch(action.type) {
        default:
            return state
    }
}

const rootReducer = combineReducers({
    listTitle,
    moreInfo,
    tasks
})

export default rootReducer;