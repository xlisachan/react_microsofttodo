import C from '../constants';
import { combineReducers } from 'redux';
import moment from 'moment';

const todaysDate = moment(new Date()).format('YYYY-MM-DD');

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
const current = (state={}, action) => {
    switch (action.type) {
        case C.SET_LIST :
            return {
                ...state,
                list: {
                    id: action.id,
                    title: action.payload
                },
                task: {
                    id: "",
                    task: ""
                },
                step: {
                    id: "",
                    step:""
                },
                taskSteps: [],
                note: ""
            }
        
        case C.SET_TASK :
            return {
                ...state,
                task: {
                    id: action.id,
                    task: action.payload
                },
                step: {
                    id: "",
                    step: ""
                },
                taskSteps: action.steps,
                note: action.note
            }

        case C.SET_STEP :
            return {
                ...state,
                step: action.payload,
                taskSteps: state.taskSteps.map(step =>
                    step.id === action.id ?
                        action.payload
                        :
                        step
                )
            }
                
        case C.SET_NOTE :
            return {
                ...state,
                note: action.payload
            }
        
        case C.ADD_STEP :
            return {
                ...state,
                taskSteps: [
                    ...state.taskSteps,
                    step({}, action)
                ]
            }

        case C.REMOVE_STEP :
            return {
                ...state,
                taskSteps: state.taskSteps.filter(step => step.id !== action.stepId)
            }

        default : 
            return state
    }
}

const step = (state={}, action) =>
    (action.type === C.ADD_STEP) ?
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
                (
                    task.date_created === todaysDate ||
                    task.date_due === todaysDate ||
                    task.temp === todaysDate
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
                                date_completed: todaysDate
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
                                date_completed: todaysDate
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
                                date_completed: todaysDate
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
                                date_completed: todaysDate
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
                    task.my_day === true ?
                        {
                            ...task,
                            my_day: !task.my_day,
                            temp: ""
                        }
                        :
                        {
                            ...task,
                            my_day: !task.my_day,
                            temp: todaysDate
                        }
                    :
                    task
            )            
            
        case C.REMOVE_TASK_DATE_DUE :
            return state.map(task =>
                task.task_id === action.payload ?
                {
                    ...task,
                    date_due: "",
                    planned: false
                }
                :
                task
            )

        case C.ADD_TASK_DATE_DUE :
            return state.map(task =>
                task.task_id === action.payload ?
                {
                    ...task,
                    date_due: action.date,
                    planned: true
                }
                :
                task
            )

        case C.UPDATE_TASK :
            return state.map(task =>
                task.task_id === action.taskId ?
                    {
                        ...task,
                        item: action.payload
                    }
                    :
                    task
            )    

        case C.SET_NOTE :
            return state.map(task =>
                task.task_id === action.id ?
                {
                    ...task,
                    note: action.payload
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
        
        case C.EDIT_STEP_STATUS_COMPLETE :
            return state.map(task =>
                task.task_id === action.payload ?
                    {
                        ...task,
                        steps: task.steps.map(step =>
                            step.id === action.stepId ?
                                {
                                    ...step,
                                    completedStatus: !step.completedStatus
                                }
                                :
                                step
                        )
                    }
                    :
                    task
                )

        case C.UPDATE_STEP :
            return state.map(task =>
                task.task_id === action.taskId ?
                    {
                        ...task,
                        steps: task.steps.map(step =>
                            step.id === action.id ?
                                {
                                    ...step,
                                    step: action.payload
                                }
                                :
                                step
                        )
                    }
                    :
                    task
                )

        case C.REMOVE_STEP :
            return state.map(task =>
                task.task_id === action.payload ?
                    {
                        ...task,
                        steps: task.steps.filter(step => step.id !== action.stepId)
                    }
                    :
                    task
                )
            
        case C.UPDATE_NOTE :
            return state.map(task =>
                task.task_id === action.taskId ?
                    {
                        ...task,
                        note: action.payload
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

const rootReducer = combineReducers({
    query,
    current,
    lists,
    tasks
})

export default rootReducer;