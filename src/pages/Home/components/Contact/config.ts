import { gql } from "@apollo/client";

export const contactFormInitial: ContactFormValues = {
	email: "",
	subject: "",
	message: "",
	token: ""
};

export const GRAPHQL_CONTACT = gql`
mutation Contact($input: ContactInput!) {
	contact(input: $input)
}`;

export type ContactFormValues = {
	email: string,
	subject: string,
	message: string,
	token: string
};
