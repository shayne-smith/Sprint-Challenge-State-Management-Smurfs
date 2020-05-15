import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import "./index.css";

import smurfReducer from './store/reducers/smurfReducer'
import App from "./components/App";

const store = createStore(smurfReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
