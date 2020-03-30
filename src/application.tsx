import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import App from './App';
import appReducer from './store/reducer';
import homeReducer from './containers/Home/store/reducer';

export const composeEnhancers: any = process.env.NODE_ENV === 'development' 
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

export const rootReducer = combineReducers({
    app: appReducer,
    home: homeReducer
});
export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export const application: JSX.Element = (
    <Provider store={store}>
        <App />
    </Provider>
);
export default application;