import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    {};

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
    )
);

store.subscribe(saveState)

export default store;