import React, { useContext, useEffect } from 'react'
import { AppContext } from 'src/context/AppContext'
import fetch from 'isomorphic-unfetch'

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
  // onError,
  // ErrorResponse,
  split
} from '@apollo/client'

import { setContext } from '@apollo/link-context'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/link-ws'

// import { ApolloLink, from } from 'apollo-link'
// import { onError, ErrorResponse } from 'apollo-link-error';

const initialState = {}

export const Apollo = ({ children }) => {

	const { state } = useContext( AppContext )
	const { GQL_URI, GQL_KEY } = state.config.data

	const cache = new InMemoryCache().restore( initialState || {} )

	const authLink = setContext((_, { headers }) => {
		const token = localStorage.getItem('zero-token');
		return {
			headers: {
				...headers,
				authorization: token ? `bearer ${token}` : null
			}
		}
	})

	const httpLink = new HttpLink({
		uri: GQL_URI,
		fetch,
		credentials: 'same-origin', // include, *same-origin, omit
	})

	const wsLink = new WebSocketLink({
		uri: GQL_URI,
		options: { reconnect: true },
	})

	// const logoutLink = onError(( { networkError }: ErrorResponse ) => {
	// 	if (
	// 		networkError &&
	// 		'statusCode' in networkError &&
	// 		networkError.statusCode === 401
	// 	) {
	// 		//logout();
	// 		console.error('authorization error')
	// 	}
	// })

	const splitLink = split(
		({ query }) => {
			const definition = getMainDefinition(query);
			return (
				definition.kind === 'OperationDefinition' &&
				definition.operation === 'subscription'
			)
		},
		wsLink,
		authLink.concat(httpLink)
	)

	let client = new ApolloClient({
		ssrMode: true,
		link: splitLink,
		cache: cache,
	})

	return (
		<ApolloProvider client={ client }>
		{ children }
		</ApolloProvider>
	)

}

export default Apollo
