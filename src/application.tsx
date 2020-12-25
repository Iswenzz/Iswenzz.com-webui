import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import App from "App";
import appReducer from "store/reducer";
import homeReducer from "containers/Home/store/reducer";
import {ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache} from "@apollo/client";
import {onError} from "@apollo/client/link/error";

/**
 * Redux compose enhancers for development environment,
 * Regular compose HOC for production.
 */
export const composeEnhancers: any = process.env.NODE_ENV === "development" 
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
 * Apollo Link for error handling.
 */
const linkError = onError(({ graphQLErrors, networkError }) =>
{
	if (graphQLErrors)
	{
		graphQLErrors.map(({ message, locations, path }) =>
			console.error(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
			),
		);
	}
	if (networkError)
		console.error(`[Network error]: ${networkError}`);
});

/**
 * Apollo Link server.
 */
const linkHttp = new HttpLink({
	uri: "https://localhost/graphql",
	headers: {
		authorization: localStorage.getItem("token") || ""
	}
});

/**
 * GraphQL Apollo Client.
 */
export const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	link: ApolloLink.from([linkError, linkHttp])
});

/**
 * Application main container with redux store provider.
 */
export const application: JSX.Element = (
	<ApolloProvider client={apolloClient}>
		<Provider store={store}>
			<App />
		</Provider>
	</ApolloProvider>
);

export default application;