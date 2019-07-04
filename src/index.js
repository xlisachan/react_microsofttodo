import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import sampleData from './initialState.json';
import storeFactory from './store';
import { Provider } from 'react-redux';
import App from './App';

const initialState = (localStorage['redux-store']) ? 
    JSON.parse(localStorage['redux-store']) :
    sampleData

const saveState = () => {
    localStorage['redux-store'] = JSON.stringify(store.getState());
}

const store = storeFactory(initialState);
store.subscribe(saveState);

window.React = React;
window.store = store;

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);