import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: any; output: any };
};

export type ContactInput = {
	email: Scalars["String"]["input"];
	message: Scalars["String"]["input"];
	subject: Scalars["String"]["input"];
	token: Scalars["String"]["input"];
};

export type Login = {
	__typename?: "Login";
	accessToken: Scalars["String"]["output"];
	user: User;
};

export type Mutation = {
	__typename?: "Mutation";
	contact: Scalars["Boolean"]["output"];
	login: Login;
	register: Scalars["Boolean"]["output"];
	revokeRefreshTokensForUser: Scalars["Boolean"]["output"];
};

export type MutationContactArgs = {
	input: ContactInput;
};

export type MutationLoginArgs = {
	input: UserLogin;
};

export type MutationRegisterArgs = {
	input: UserRegister;
};

export type MutationRevokeRefreshTokensForUserArgs = {
	userId: Scalars["Float"]["input"];
};

export type Query = {
	__typename?: "Query";
	logout: Scalars["Boolean"]["output"];
	me: User;
	refreshToken: RefreshToken;
	user: User;
};

export type QueryUserArgs = {
	username: Scalars["String"]["input"];
};

export type RefreshToken = {
	__typename?: "RefreshToken";
	accessToken: Scalars["String"]["output"];
	ok: Scalars["Boolean"]["output"];
	user: User;
};

export type User = {
	__typename?: "User";
	createdAt: Scalars["DateTime"]["output"];
	email: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	lastAccessed: Scalars["DateTime"]["output"];
	role: Scalars["Float"]["output"];
	username: Scalars["String"]["output"];
};

export type UserLogin = {
	password: Scalars["String"]["input"];
	username: Scalars["String"]["input"];
};

export type UserRegister = {
	email: Scalars["String"]["input"];
	password: Scalars["String"]["input"];
	username: Scalars["String"]["input"];
};

export type ContactMutationVariables = Exact<{
	input: ContactInput;
}>;

export type ContactMutation = { __typename?: "Mutation"; contact: boolean };

export type LoginMutationVariables = Exact<{
	input: UserLogin;
}>;

export type LoginMutation = {
	__typename?: "Mutation";
	login: {
		__typename?: "Login";
		accessToken: string;
		user: { __typename?: "User"; id: string; username: string; email: string; role: number };
	};
};

export type LogoutQueryVariables = Exact<{ [key: string]: never }>;

export type LogoutQuery = { __typename?: "Query"; logout: boolean };

export type UserQueryVariables = Exact<{
	username: Scalars["String"]["input"];
}>;

export type UserQuery = {
	__typename?: "Query";
	user: {
		__typename?: "User";
		id: string;
		username: string;
		createdAt: any;
		lastAccessed: any;
		role: number;
	};
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
	__typename?: "Query";
	me: {
		__typename?: "User";
		id: string;
		username: string;
		createdAt: any;
		lastAccessed: any;
		role: number;
	};
};

export type RefreshTokenQueryVariables = Exact<{ [key: string]: never }>;

export type RefreshTokenQuery = {
	__typename?: "Query";
	refreshToken: {
		__typename?: "RefreshToken";
		ok: boolean;
		accessToken: string;
		user: { __typename?: "User"; id: string; username: string; email: string; role: number };
	};
};

export type RegisterMutationVariables = Exact<{
	input: UserRegister;
}>;

export type RegisterMutation = { __typename?: "Mutation"; register: boolean };

export const ContactDocument = gql`
	mutation Contact($input: ContactInput!) {
		contact(input: $input)
	}
`;
export type ContactMutationFn = Apollo.MutationFunction<ContactMutation, ContactMutationVariables>;

/**
 * __useContactMutation__
 *
 * To run a mutation, you first call `useContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactMutation, { data, loading, error }] = useContactMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContactMutation(
	baseOptions?: Apollo.MutationHookOptions<ContactMutation, ContactMutationVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<ContactMutation, ContactMutationVariables>(ContactDocument, options);
}
export type ContactMutationHookResult = ReturnType<typeof useContactMutation>;
export type ContactMutationResult = Apollo.MutationResult<ContactMutation>;
export type ContactMutationOptions = Apollo.BaseMutationOptions<
	ContactMutation,
	ContactMutationVariables
>;
export const LoginDocument = gql`
	mutation Login($input: UserLogin!) {
		login(input: $input) {
			user {
				id
				username
				email
				role
			}
			accessToken
		}
	}
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
	baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
	LoginMutation,
	LoginMutationVariables
>;
export const LogoutDocument = gql`
	query Logout {
		logout
	}
`;

/**
 * __useLogoutQuery__
 *
 * To run a query within a React component, call `useLogoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogoutQuery(
	baseOptions?: Apollo.QueryHookOptions<LogoutQuery, LogoutQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options);
}
export function useLogoutLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<LogoutQuery, LogoutQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options);
}
export function useLogoutSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<LogoutQuery, LogoutQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options);
}
export type LogoutQueryHookResult = ReturnType<typeof useLogoutQuery>;
export type LogoutLazyQueryHookResult = ReturnType<typeof useLogoutLazyQuery>;
export type LogoutSuspenseQueryHookResult = ReturnType<typeof useLogoutSuspenseQuery>;
export type LogoutQueryResult = Apollo.QueryResult<LogoutQuery, LogoutQueryVariables>;
export const UserDocument = gql`
	query User($username: String!) {
		user(username: $username) {
			id
			username
			createdAt
			lastAccessed
			role
		}
	}
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserQuery(
	baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables> &
		({ variables: UserQueryVariables; skip?: boolean } | { skip: boolean })
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<typeof useUserSuspenseQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const MeDocument = gql`
	query Me {
		me {
			id
			username
			createdAt
			lastAccessed
			role
		}
	}
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RefreshTokenDocument = gql`
	query RefreshToken {
		refreshToken {
			ok
			accessToken
			user {
				id
				username
				email
				role
			}
		}
	}
`;

/**
 * __useRefreshTokenQuery__
 *
 * To run a query within a React component, call `useRefreshTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRefreshTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenQuery(
	baseOptions?: Apollo.QueryHookOptions<RefreshTokenQuery, RefreshTokenQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<RefreshTokenQuery, RefreshTokenQueryVariables>(
		RefreshTokenDocument,
		options
	);
}
export function useRefreshTokenLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<RefreshTokenQuery, RefreshTokenQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<RefreshTokenQuery, RefreshTokenQueryVariables>(
		RefreshTokenDocument,
		options
	);
}
export function useRefreshTokenSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<RefreshTokenQuery, RefreshTokenQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<RefreshTokenQuery, RefreshTokenQueryVariables>(
		RefreshTokenDocument,
		options
	);
}
export type RefreshTokenQueryHookResult = ReturnType<typeof useRefreshTokenQuery>;
export type RefreshTokenLazyQueryHookResult = ReturnType<typeof useRefreshTokenLazyQuery>;
export type RefreshTokenSuspenseQueryHookResult = ReturnType<typeof useRefreshTokenSuspenseQuery>;
export type RefreshTokenQueryResult = Apollo.QueryResult<
	RefreshTokenQuery,
	RefreshTokenQueryVariables
>;
export const RegisterDocument = gql`
	mutation Register($input: UserRegister!) {
		register(input: $input)
	}
`;
export type RegisterMutationFn = Apollo.MutationFunction<
	RegisterMutation,
	RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(
	baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
		RegisterDocument,
		options
	);
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
	RegisterMutation,
	RegisterMutationVariables
>;
