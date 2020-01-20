import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import App from './App';
import homeReducer from './containers/Home/store/reducer';
const composeEnhancers: any = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    home: homeReducer
});
export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app: JSX.Element = (
    <Provider store={store}>
        <App />
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();