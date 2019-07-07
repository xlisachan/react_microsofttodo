import C from './constants';

export const getListTitle = title => ({
    type: C.SET_TITLE,
    payload: title
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
        task_id, item, list, completedStatus=false, importantStatus=false, moreInfo=[],
        date_created_full, date_created, date_due, my_day, planned=false, important=false, tasks=true
    ) => dispatch => {
        dispatch({
            type: C.ADD_TASK,
            payload: {
                task_id, item, list, completedStatus, importantStatus, moreInfo,
                date_created_full, date_created, date_due, my_day, planned, important, tasks
            }
        })
}

export const removeTask = id => ({
    type: C.REMOVE_TASK,
    payload: id
})