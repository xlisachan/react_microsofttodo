import C from '../actions/constants';

const initialState = {
    "list": {
        "id": "0",
        "title": "My Day"
    },
    "task": {
        "id": "",
        "task": ""
    },
    "step": {
        "id":"",
        "step":""
    },
    "taskSteps": [],
    "note": ""
}

const step = (state={}, action) =>
    (action.type === C.ADD_STEP) ?
        action.payload :
        state

const currentReducer = (state=initialState, action) => {
    switch (action.type) {
        case C.SET_LIST :
            return {
                ...state,
                list: {
                    id: action.id,
                    title: action.payload
                },
                task: {
                    id: "",
                    task: ""
                },
                step: {
                    id: "",
                    step:""
                },
                taskSteps: [],
                note: ""
            }
        
        case C.SET_TASK :
            return {
                ...state,
                task: {
                    id: action.id,
                    task: action.payload
                },
                step: {
                    id: "",
                    step: ""
                },
                taskSteps: action.steps,
                note: action.note
            }

        case C.SET_STEP :
            return {
                ...state,
                step: action.payload,
                taskSteps: state.taskSteps.map(step =>
                    step.id === action.id ?
                        action.payload
                        :
                        step
                )
            }
                
        case C.SET_NOTE :
            return {
                ...state,
                note: action.payload
            }
        
        case C.ADD_STEP :
            return {
                ...state,
                taskSteps: [
                    ...state.taskSteps,
                    step({}, action)
                ]
            }

        case C.REMOVE_STEP :
            return {
                ...state,
                taskSteps: state.taskSteps.filter(step => step.id !== action.stepId)
            }

        default : 
            return state
    }
}

export default currentReducer;