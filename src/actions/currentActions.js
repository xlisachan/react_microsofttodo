import C from '../actions/constants';

export const setList = (id, title) => ({
    type: C.SET_LIST,
    payload: title,
    id
})

export const setTask = (id, task, note, steps) => ({
    type: C.SET_TASK,
    payload: task,
    id,
    note,
    steps
})

export const setStep = (id, step) => ({
    type: C.SET_STEP,
    payload: {id, step},
    id
})

export const setNote = (id, note) => ({
    type: C.SET_NOTE,
    payload: note,
    id
})