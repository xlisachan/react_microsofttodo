import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const consoleMessages = store => next => action => {
    let result;

    console.groupCollapsed(`dispatching action => ${action.type}`);
    console.log(`tasks`, store.getState().tasks.length);
    
    result = next(action);

    let { listTitle, moreInfo, tasks } = store.getState();
    
    console.log(`
        listTitle: ${listTitle},
        moreInfo: ${JSON.stringify(moreInfo)},
        tasks: ${JSON.stringify(tasks)}
    `)

    console.groupEnd();

    return result;
}

export default (initialState={}) => {
    return applyMiddleware(thunk, consoleMessages)(createStore)(rootReducer, initialState)
}