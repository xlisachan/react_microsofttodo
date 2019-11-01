import C from '../actions/constants';

const initialState = [
    {
        "id": "0",
        "name": "My Day",
        "orderBy": "date_created",
        "orderDir": "asc",
        "sorted": false,
        "hideCompleted": false,
        "color": [80,40,250],
        "defaultList": true
    },
    {
        "id": "1",
        "name": "Important",
        "orderBy": "date_created",
        "orderDir": "asc",
        "sorted": false,
        "hideCompleted": false,
        "color": [80,40,250],
        "defaultList": true
    },
    {
        "id": "2",
        "name": "Planned",
        "orderBy": "date_due",
        "orderDir": "asc",
        "sorted": false,
        "hideCompleted": false,
        "color": [80,40,250],
        "defaultList": true
    },
    {
        "id": "3",
        "name": "Tasks",
        "orderBy": "date_created",
        "orderDir": "asc",
        "sorted": false,
        "hideCompleted": false,
        "color": [80,40,250],
        "defaultList": true
    }
];

const list = (state={}, action) =>
    (action.type === C.ADD_LIST) ?
        action.payload :
        state

export default (state=initialState, action) => {
    switch(action.type) {
        case C.ADD_LIST :
            return [
                ...state,
                list(null, action)
            ]
        
        case C.REMOVE_LIST :
            return state.filter(list => list.id !== action.payload)

        case C.RENAME_LIST :
            return state.map(list => 
                list.id === action.payload ?
                {
                    ...list,
                    name: action.newName
                }
                :
                list
            )

        case C.SET_ORDERBY :
            return state.map(list => 
                list.id === action.id ?
                    {
                        ...list,
                        orderBy: action.payload,
                        sorted: true
                    }
                    :
                    list
            )
        
        case C.SET_ORDERDIR :
            return state.map(list => 
                list.id === action.id ?
                    list.orderDir === 'asc' ?
                        {
                            ...list,
                            orderDir: 'desc',
                            sorted: true
                        }
                        :
                        {
                            ...list,
                            orderDir: 'asc',
                            sorted: true
                        }
                    :
                    list
            )
        
        case C.RESET_ORDERDIR :
            return state.map(list => 
                list.id === action.id ?
                    {
                        ...list,
                        orderDir: 'asc',
                        sorted: false
                    }
                    :
                    list
            )
        
        case C.TOGGLE_HIDE :
            return state.map(list => 
                list.id === action.id ?
                    {
                        ...list,
                        hideCompleted: !list.hideCompleted
                    }
                    :
                    list
            )
        
        case C.SET_BGCOLOR :
            return state.map(list => 
                list.id === action.id ?
                    {
                        ...list,
                        color: action.payload
                    }
                    :
                    list
            )

        default :
            return state
    }
}