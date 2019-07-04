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
        case C.EDIT_TASK_STATUS_COMPLETE :
            return state.map(task => {
                if (task.task_id === action.payload) {
                    
                    if (task.importantStatus) {
                        task.important = !task.important;
                    }

                    task.completedStatus = !task.completedStatus;
                }

                return task;
            })
        
        case C.EDIT_TASK_STATUS_IMPORTANT :
            return state.map(task => {
                if (task.task_id === action.payload) {
                    
                    task.importantStatus = !task.importantStatus;
                    task.important = !task.important;

                    if (task.completedStatus) {
                        task.important = false;
                    }
                }

                return task;
            })

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