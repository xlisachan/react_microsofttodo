import C from './constants';

export const getListTitle = title => dispatch => {
    dispatch({
        type: C.SET_TITLE,
        payload: title
    })
}

export const toggleCompleted = id => dispatch => {
    dispatch({
        type: C.EDIT_TASK_STATUS_COMPLETE,
        payload: id
    })
}

export const toggleImportant = id => dispatch => {
    dispatch({
        type: C.EDIT_TASK_STATUS_IMPORTANT,
        payload: id
    })
}

export const toggleMoreInfo = task => dispatch => {
    dispatch({
        type: C.SET_MOREINFO,
        payload: task
    })
}