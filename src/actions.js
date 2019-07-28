import C from './constants';

export const getListTitle = title => ({
    type: C.SET_TITLE,
    payload: title
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

export const changeOrder = (orderBy, listTitle) => ({
    type: C.SET_ORDERBY,
    payload: orderBy,
    listTitle
})

export const changeDir = listTitle => ({
    type: C.SET_ORDERDIR,
    listTitle
})

export const resetChangeDir = listTitle => ({
    type: C.RESET_ORDERDIR,
    listTitle
})

export const toggleHide = listTitle => ({
    type: C.TOGGLE_HIDE,
    listTitle
})

export const changeBgColor = (color, listTitle) => ({
    type: C.SET_BGCOLOR,
    payload: color,
    listTitle
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

export const setListNo = num => ({
    type: C.SET_LISTNO,
    payload: num
})