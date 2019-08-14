import C from '../constants';
import { getCurrentDate } from '../getDate';
import { combineReducers } from 'redux';

const open = (state=false, action) => {
    switch(action.type) {
        case C.EDIT_TITLE :
            return true
        
        case C.SUBMIT_TITLE :
            return false
        
        default :
            return false
    }
}

const placeholder = (state="My Day", action) =>
    (action.type === C.SET_PLACEHOLDER) ?
        action.payload :
        state
     
const selectedListId = (state="0", action) => 
	(action.type === C.SELECTED_LISTID) ? 
		action.payload :
        state

const selectedTaskId = (state="", action) => 
    (action.type === C.SELECTED_TASKID) ? 
        action.payload :
        state

const task = (state={}, action) =>
    (action.type === C.ADD_TASK) ?
        action.payload :
        state

const step = (state={}, action) =>
    (action.type === C.ADD_STEP) ?
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
                (
                    task.date_created === getCurrentDate() ||
                    task.date_due === getCurrentDate() 
                )?
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
                        if (task.completedStatus) {
                            return {
                                ...task,
                                important: !task.important,
                                planned: !task.planned,
                                completedStatus: !task.completedStatus,
                                date_completed: ""
                            }
                        } else {
                            return {
                                ...task,
                                important: !task.important,
                                planned: !task.planned,
                                completedStatus: !task.completedStatus,
                                date_completed: getCurrentDate()
                            }
                        }
                    } else if (task.importantStatus) {
                        if (task.completedStatus) {
                            return {
                                ...task,
                                important: !task.important,
                                completedStatus: !task.completedStatus,
                                date_completed: ""
                            }
                        } else {
                            return {
                                ...task,
                                important: !task.important,
                                completedStatus: !task.completedStatus,
                                date_completed: getCurrentDate()
                            }
                        }
                    } else if (task.date_due) {
                        if (task.completedStatus) {
                            return {
                                ...task,
                                planned: !task.planned,
                                completedStatus: !task.completedStatus,
                                date_completed: ""
                            }
                        } else {
                            return {
                                ...task,
                                planned: !task.planned,
                                completedStatus: !task.completedStatus,
                                date_completed: getCurrentDate()
                            }
                        }
                    } else {
                        if (task.completedStatus) {
                            return {
                                ...task,
                                completedStatus: !task.completedStatus,
                                date_completed: ""
                            }
                        } else {
                            return {
                                ...task,
                                completedStatus: !task.completedStatus,
                                date_completed: getCurrentDate()
                            }
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
            
        case C.ADD_STEP :
            return state.map(task =>
                task.task_id === action.taskId ?
                    {
                        ...task,
                        steps: [
                            ...task.steps,
                            step({}, action)
                        ]
                    }
                    :
                    task
                )

        default:
            return state
    }
}

const list = (state={}, action) =>
    (action.type === C.ADD_LIST) ?
        action.payload :
        state

const lists = (state=[], action) => {
    switch(action.type) {
        case C.ADD_LIST :
            return [
                ...state,
                list(null, action)
            ]
        
        case C.REMOVE_LIST :
            return state.filter(list => list.id !== action.payload)

        case C.RENAME_LIST :
            return state.map(list => 
                list.id === action.payload ?
                {
                    ...list,
                    name: action.newName
                }
                :
                list
            )

        case C.SET_ORDERBY :
            return state.map(list => 
                list.id === action.id ?
                    {
                        ...list,
                        orderBy: action.payload,
                        sorted: true
                    }
                    :
                    list
            )
        
        case C.SET_ORDERDIR :
            return state.map(list => 
                list.id === action.id ?
                    list.orderDir === 'asc' ?
                        {
                            ...list,
                            orderDir: 'desc',
                            sorted: true
                        }
                        :
                        {
                            ...list,
                            orderDir: 'asc',
                            sorted: true
                        }
                    :
                    list
            )
        
        case C.RESET_ORDERDIR :
            return state.map(list => 
                list.id === action.id ?
                    {
                        ...list,
                        orderDir: 'asc',
                        sorted: false
                    }
                    :
                    list
            )
        
        case C.TOGGLE_HIDE :
            return state.map(list => 
                list.id === action.id ?
                    {
                        ...list,
                        hideCompleted: !list.hideCompleted
                    }
                    :
                    list
            )
        
        case C.SET_BGCOLOR :
            return state.map(list => 
                list.id === action.id ?
                    {
                        ...list,
                        color: action.payload
                    }
                    :
                    list
            )

        default :
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

// SECTION - MORE
const toggleMore = (state=false, action) => {
    switch (action.type) {
        case C.OPEN_MORE :
            return true

        case C.CLOSE_MORE :
            return false

        default:
            return false
    }
}

const rootReducer = combineReducers({
    open,
    placeholder,
    selectedListId,
    selectedTaskId,
    tasks,
    lists,
    query,
    toggleMore
})

export default rootReducer;