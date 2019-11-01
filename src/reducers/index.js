import { combineReducers } from 'redux';
import queryReducer from './queryReducer';
import currentReducer from './currentReducer';
import listsReducer from './listsReducer';
import tasksReducer from './tasksReducer';

export default combineReducers({
    query: queryReducer,
    current: currentReducer,
    lists: listsReducer,
    tasks: tasksReducer
})