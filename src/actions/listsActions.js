import C from './constants';

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