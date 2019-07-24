import C from '../constants';
import { numFormat, getCurrentDateObj } from '../getDate';
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
        
        case C.LOAD_TASKS :
            return state.map(task =>
                task.my_day && task.date_created === numFormat(getCurrentDateObj) ?
                    {
                        ...task,
                        my_day: true
                    }
                    :
                    {
                        ...task,
                        my_day: false
                    }
                )
        
        case C.EDIT_TASK_STATUS_COMPLETE :
            return state.map(task => {
                if (task.task_id === action.payload) {
                    if (task.importantStatus && task.date_due) {
                        return {
                            ...task,
                            important: !task.important,
                            planned: !task.planned,
                            completedStatus: !task.completedStatus
                        }
                    } else if (task.importantStatus) {
                        return {
                            ...task,
                            important: !task.important,
                            completedStatus: !task.completedStatus
                        }
                    } else if (task.date_due) {
                        return {
                            ...task,
                            planned: !task.planned,
                            completedStatus: !task.completedStatus
                        }
                    } else {
                        return {
                            ...task,
                            completedStatus: !task.completedStatus
                        }
                    }
                } else {
                    return task
                }
            })

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

const query = (state='', action) => {
	switch(action.type) {
        case C.CHANGE_QUERY :
            return action.payload
        
        case C.CLEAR_QUERY :
            return ''
        
        default :
            return state
    }
}

const orderBy = (state="date_created", action) => 
	(action.type === C.SET_ORDERBY) ? 
		action.payload :
        state

const orderDir = (state="asc", action) => 
    (action.type === C.SET_ORDERDIR) ? 
        action.payload :
        state

const rootReducer = combineReducers({
    listTitle,
    moreInfo,
    tasks,
    query,
    orderBy,
    orderDir
})

export default rootReducer;