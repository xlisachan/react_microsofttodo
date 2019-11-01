import C from './constants';

export const changeQuery = query => ({
    type: C.CHANGE_QUERY,
    payload: query
})

export const clearQuery = () => ({
    type: C.CLEAR_QUERY
})