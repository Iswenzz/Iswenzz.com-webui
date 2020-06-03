import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import App from 'App';
import appReducer from 'store/reducer';
import homeReducer from 'containers/Home/store/reducer';

/**
 * Redux compose enhancers for development environment,
 * Regular compose HOC for production.
 */
export const composeEnhancers: any = process.env.NODE_ENV === 'development' 
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

/**
 * Redux reducers.
 */
export const rootReducer = combineReducers({
    app: appReducer,
    home: homeReducer
});
export type AppState = ReturnType<typeof rootReducer>;

/**
 * Redux store created with rootReducer (combined reducers)
 * and redux thunk middleware for async actions.
 */
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

/**
 * Application main container with redux store provider.
 */
export const application: JSX.Element = (
    <Provider store={store}>
        <App />
    </Provider>
);

export default application;