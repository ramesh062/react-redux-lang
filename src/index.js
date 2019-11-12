import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { localizeReducer, LocalizeProvider } from 'react-localize-redux';
import logger from 'redux-logger';
import loginFormReducer from './Containers/LoginContainer/reducer';
import homeReducer from './Containers/HomeContainer/reducer';
import "bootstrap/dist/js/bootstrap.min.js";

const store = createStore(
    combineReducers({ loginFormReducer, homeReducer, localize: localizeReducer }), {}, applyMiddleware(thunk, logger));


ReactDOM.render(
    <Provider store={store}>
        <LocalizeProvider store={store}>
            <App />
        </LocalizeProvider >
    </Provider>
    , document.getElementById('root'));

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
