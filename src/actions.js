import C from './constants';

export const getListTitle = title => dispatch => {
    dispatch({
        type: C.SET_TITLE,
        payload: title
    })
}