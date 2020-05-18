import React, { useContext } from 'react'
import { AppContext } from 'src/hooks/AppContext'
import fetch from 'isomorphic-unfetch'

import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'

import { ApolloLink, from } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { onError, ErrorResponse } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory'

const initialState = {}

let uri
let GQL_DEVKEY

const cache = new InMemoryCache().restore( initialState || {} )

const apiLink = new HttpLink({
	uri,
	fetch,
	credentials: 'same-origin', // include, *same-origin, omit
})

const logoutLink = onError(( { networkError }: ErrorResponse ) => {
	if (
		networkError &&
		'statusCode' in networkError &&
		networkError.statusCode === 401
	) {
		//logout();
		console.error('authorization error')
	}
})

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('token')
	console.warn('access token', token)

	return {
		headers: {
			...headers,
			'x-hasura-admin-secret': GQL_DEVKEY,
			// Authorization: token ? `Bearer ${token}` : '',
		},
	}
})

const client = new ApolloClient({
	ssrMode: true,
	link: from([ authLink, logoutLink, apiLink ]),
	cache: cache,
})

export const Apollo = ({ children }) => {

	const { state } = useContext( AppContext )
	const { GQL_URI } = state.config.data

	return (
		<ApolloProvider client={client}>
			{children}
		</ApolloProvider>
	)
}

export default Apollo
