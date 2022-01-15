import { FC } from "react";
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import fetch from "cross-fetch";

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
	fetch,
	uri: process.env.REACT_APP_GRAPHQL_URL,
	headers: {
		authorization: localStorage.getItem("token") || ""
	}
});

/**
 * GraphQL Apollo Client.
 */
const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	link: ApolloLink.from([linkError, linkHttp])
});

/**
 * Apollo client provider.
 */
export const Apollo: FC = ({ children }) => (
	<ApolloProvider client={apolloClient}>
		{children}
	</ApolloProvider>
);

export default Apollo;
