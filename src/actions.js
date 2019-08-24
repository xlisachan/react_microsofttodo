import C from './constants';

// CURRENT
export const setListId = id => ({
    type: C.SET_LISTID,
    payload: id
})

export const setList = title => ({
    type: C.SET_LIST,
    payload: title
})

export const setTaskId = id => ({
    type: C.SET_TASKID,
    payload: id
})

export const setTask = task => ({
    type: C.SET_TASK,
    payload: task
})

export const setStep = (id, step) => ({
    type: C.SET_STEP,
    payload: {id, step},
    id
})

export const setSteps = steps => ({
    type: C.SET_STEPS,
    payload: steps
})

export const clearItem = () => ({
    type: C.CLEAR_ITEM
})

// LIST
export const addList = (id, name, orderBy, orderDir, sorted, hideCompleted, color, defaultList) => dispatch => {
    dispatch({
        type: C.ADD_LIST,
        payload: {id, name, orderBy, orderDir, sorted, hideCompleted, color, defaultList}
    })
}

export const removeList = id => ({
    type: C.REMOVE_LIST,
    payload: id
})

export const renameList = (id, newName) => ({
    type: C.RENAME_LIST,
    payload: id,
    newName
})

export const editTitle = () => ({
    type: C.EDIT_TITLE
})

export const submitTitle = () => ({
    type: C.SUBMIT_TITLE
})

// TASKS
export const loadTasks = () => ({
    type: C.LOAD_TASKS
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

export const removeDateDue = id => ({
    type: C.REMOVE_TASK_DATE_DUE,
    payload: id
})

export const addDateDue = (id, date) => ({
    type: C.ADD_TASK_DATE_DUE,
    payload: id,
    date
})

export const addTask = (
        task_id, item, date_completed, date_created, date_due,
        completedStatus, importantStatus, my_day, planned, important, tasks, list_id, steps
    ) => dispatch => {
        dispatch({
            type: C.ADD_TASK,
            payload: {
                task_id, item, date_completed, date_created, date_due,
                completedStatus, importantStatus, my_day, planned, important, tasks, list_id, steps
            }
        })
}

export const removeTask = id => ({
    type: C.REMOVE_TASK,
    payload: id
})

// SEARCH
export const changeQuery = query => ({
    type: C.CHANGE_QUERY,
    payload: query
})

export const clearQuery = () => ({
    type: C.CLEAR_QUERY
})

// SORTBAR
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

// SECTION - MORE
export const addStep = (completedStatus, id, step, taskId) => dispatch => {
    dispatch({
        type: C.ADD_STEP,
        payload: {completedStatus, id, step, taskId},
        taskId
    })
}

export const toggleStep = (taskId, stepId) => ({
    type: C.EDIT_STEP_STATUS_COMPLETE,
    payload: taskId,
    stepId
})

export const updateStep = (id, step, taskId) => ({
    type: C.UPDATE_STEP,
    payload: step, 
    id,
    taskId
})

export const removeStep = (taskId, stepId) => ({
    type: C.REMOVE_STEP,
    payload: taskId,
    stepId
})

export const updateTask = (taskId, newTask) => ({
    type: C.UPDATE_TASK,
    payload: newTask,
    taskId
})