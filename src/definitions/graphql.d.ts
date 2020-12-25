import { gql } from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type Query = {
	__typename?: "Query";
	users: Array<User>;
	user?: Maybe<User>;
};


export type QueryUserArgs = {
	id: Scalars["String"];
};

export type User = {
	__typename?: "User";
	id: Scalars["ID"];
	firstName: Scalars["String"];
	lastName: Scalars["String"];
	age: Scalars["Int"];
};

export type Mutation = {
	__typename?: "Mutation";
	addUser?: Maybe<User>;
	updateUser?: Maybe<User>;
	deleteUser?: Maybe<Scalars["Int"]>;
	contact: Scalars["Boolean"];
};


export type MutationAddUserArgs = {
	input: UserAddInput;
};


export type MutationUpdateUserArgs = {
	input: UserUpdateInput;
	id: Scalars["String"];
};


export type MutationDeleteUserArgs = {
	id: Scalars["String"];
};


export type MutationContactArgs = {
	input: ContactInput;
};

export type UserAddInput = {
	firstName: Scalars["String"];
	lastName: Scalars["String"];
	age: Scalars["Int"];
};

export type UserUpdateInput = {
	firstName?: Maybe<Scalars["String"]>;
	lastName?: Maybe<Scalars["String"]>;
	age?: Maybe<Scalars["Int"]>;
};

export type ContactInput = {
	email: Scalars["String"];
	subject: Scalars["String"];
	message: Scalars["String"];
	token: Scalars["String"];
};
