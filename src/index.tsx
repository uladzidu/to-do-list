import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import React from "react";
import {AppWithRedux} from "./AppWithRedux";
import {Provider} from "react-redux";
import {store} from "./reducers/store";

ReactDOM.render(
    <Provider store={store}>
        <AppWithRedux/>
    </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
