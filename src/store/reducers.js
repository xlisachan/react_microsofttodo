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

const task = (state={}, action) =>
    (action.type === C.ADD_TASK) ?
        action.payload :
        state

const tasks = (state=[], action) => {
    switch(action.type) {
        case C.ADD_TASK :
            return [
                ...state,
                task(null, action)
            ]
        
        case C.EDIT_TASK_STATUS_COMPLETE :
            return state.map(task =>
                task.task_id === action.payload ?
                    task.importantStatus ?
                        { 
                            ...task,
                            important: !task.important,
                            completedStatus: !task.completedStatus
                        }
                        :
                        {
                            ...task,
                            completedStatus: !task.completedStatus
                        }
                    :
                    task
                )

        case C.EDIT_TASK_STATUS_IMPORTANT :
            return state.map(task =>
                task.task_id === action.payload ?
                    task.completedStatus ?
                        {
                            ...task,
                            importantStatus: !task.importantStatus,
                            important: false
                        }
                        :
                        {
                            ...task,
                            importantStatus: !task.importantStatus,
                            important: !task.important
                        }
                    :
                    task
                )
            
        case C.EDIT_TASK_STATUS_MYDAY :
            return state.map(task =>
                task.task_id === action.payload ?
                    {
                        ...task,
                        my_day: !task.my_day
                    }
                    :
                    task
            )            
            
        case C.REMOVE_TASK :
            return state.filter(task => task.task_id !== action.payload)
            
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