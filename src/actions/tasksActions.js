import C from '../actions/constants';

export const loadTasks = () => ({
    type: C.LOAD_TASKS
})

export const addTask = (
        task_id, item, date_completed, date_created, date_due, temp,
        completedStatus, importantStatus, my_day, planned, important, tasks, list_id, note, steps
    ) => dispatch => {
    dispatch({
        type: C.ADD_TASK,
        payload: {
            task_id, item, date_completed, date_created, date_due, temp,
            completedStatus, importantStatus, my_day, planned, important, tasks, list_id, note, steps
        }
    })
}

export const removeTask = id => ({
    type: C.REMOVE_TASK,
    payload: id
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

export const updateTask = (taskId, newTask) => ({
    type: C.UPDATE_TASK,
    payload: newTask,
    taskId
})

export const addStep = (completedStatus, id, step, taskId) => dispatch => {
    dispatch({
        type: C.ADD_STEP,
        payload: {completedStatus, id, step, taskId},
        taskId
    })
}

export const removeStep = (taskId, stepId) => ({
    type: C.REMOVE_STEP,
    payload: taskId,
    stepId
})

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

export const updateNote = (taskId, note) => ({
    type: C.UPDATE_NOTE,
    payload: note,
    taskId
})