import C from './constants';

export const selectedListId = id => ({
    type: C.SELECTED_LISTID,
    payload: id
})

export const selectedTaskId = id => ({
    type: C.SELECTED_TASKID,
    payload: id
})

export const loadTasks = () => ({
    type: C.LOAD_TASKS,
})

export const toggleCompleted = id => ({
    type: C.EDIT_TASK_STATUS_COMPLETE,
    payload: id
})

export const toggleImportant = id => ({
    type: C.EDIT_TASK_STATUS_IMPORTANT,
    payload: id
})

export const toggleMyDay = id => ({
    type: C.EDIT_TASK_STATUS_MYDAY,
    payload: id
})

export const toggleMoreInfo = task => ({
    type: C.SET_MOREINFO,
    payload: task
})

export const addTask = (
        task_id, item, date_created, date_due, date_due_display,
        completedStatus, importantStatus, my_day, planned, important, tasks, list_id
    ) => dispatch => {
        dispatch({
            type: C.ADD_TASK,
            payload: {
                task_id, item, date_created, date_due, date_due_display,
                completedStatus, importantStatus, my_day, planned, important, tasks, list_id
            }
        })
}

export const removeTask = id => ({
    type: C.REMOVE_TASK,
    payload: id
})

export const changeQuery = query => ({
    type: C.CHANGE_QUERY,
    payload: query
})

export const clearQuery = () => ({
    type: C.CLEAR_QUERY
})

export const changeOrder = (orderBy, id) => ({
    type: C.SET_ORDERBY,
    payload: orderBy,
    id
})

export const changeDir = id => ({
    type: C.SET_ORDERDIR,
    id
})

export const resetChangeDir = id => ({
    type: C.RESET_ORDERDIR,
    id
})

export const toggleHide = id => ({
    type: C.TOGGLE_HIDE,
    id
})

export const changeBgColor = (color, id) => ({
    type: C.SET_BGCOLOR,
    payload: color,
    id
})

export const addList = (
    id, 
    name, 
    orderBy, 
    orderDir, 
    sorted, 
    hideCompleted, 
    color, 
    defaultList
    ) => dispatch => {
    dispatch({
        type: C.ADD_LIST,
        payload: {
            id, name, orderBy, orderDir, sorted, hideCompleted, color, defaultList
        }
    })
}

export const removeList = id => ({
    type: C.REMOVE_LIST,
    payload: id
})