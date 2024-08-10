import { FC, PropsWithChildren } from "react";
import { onError } from "@apollo/client/link/error";

import {
	ApolloClient,
	ApolloLink,
	ApolloProvider,
	createHttpLink,
	InMemoryCache
} from "@apollo/client";

const linkError = onError(({ graphQLErrors = [], networkError }) => {
	for (const { message, path } of graphQLErrors) {
		console.error(`[GQL] /${path} ${message}`);
	}
	if (networkError) console.error(`[Network] ${networkError.name} ${networkError.message}`);
});

const linkHttp = createHttpLink({
	uri: process.env.VITE_GRAPHQL_URL
});

const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	link: ApolloLink.from([linkError, linkHttp])
});

/**
 * Apollo client provider.
 */
const Apollo: FC<PropsWithChildren> = ({ children }) => (
	<ApolloProvider client={apolloClient}>{children}</ApolloProvider>
);

export default Apollo;
