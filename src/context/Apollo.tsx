import React, { useContext, useEffect } from 'react'
import { AppContext } from 'src/context/AppContext'
import fetch from 'isomorphic-unfetch'

import {
	ApolloClient,
	ApolloLink,
	ApolloProvider,
	InMemoryCache,
	NormalizedCacheObject,
	HttpLink,
	from,
	split,
	// onError,
	// ErrorResponse,
} from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'
import { setContext } from '@apollo/link-context'

const initialState = {}

export const Apollo = ({ children }) => {
	const { state } = useContext(AppContext)
	const { GQL_URI, GQL_KEY } = state.config.data

	const cache = new InMemoryCache().restore(initialState || {})

	// TODO: auth + deauth

	// const authLink = setContext((_, { headers }) => {
	// 	// const token = localStorage.getItem('zero-token')
	// 	return {
	// 		headers: {
	// 			...headers,
	// 			Authorization: `Bearer ${GQL_KEY}`,
	// 			'x-hasura-admin-secret': GQL_KEY
	// 		},
	// 	}
	// })

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

	const httpLink = new HttpLink({
		uri: GQL_URI,
		fetch,
		credentials: 'same-origin', // include, *same-origin, omit
	})

	const wsLink = new WebSocketLink({
		uri: GQL_URI.replace('https://', 'wss://'),
		options: {
			reconnect: true,
			connectionParams: {
				headers: {
					// Authorization: `Bearer ${GQL_KEY}`,
					'x-hasura-admin-secret': GQL_KEY,
				},
			},
		},
		// eslint not seeing WebSocket definition in typescript package. need to fix eslint rules
		// eslint-disable-next-line no-undef
		webSocketImpl: WebSocket,
	})

	const customHeader = new ApolloLink((operation, forward) => {
		operation.setContext(({ headers = {} }) => ({
			headers: {
				...headers,
				'x-hasura-admin-secret': GQL_KEY,
			},
		}))
		return forward(operation)
	})

	const link = split(
		({ query }) => {
			const definition = getMainDefinition(query)
			return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
		},
		wsLink,
		httpLink
	)

	const ssrMode = !process.browser
	console.log('ssrMode', ssrMode)

	let client = new ApolloClient({
		ssrMode,
		connectToDevTools: !ssrMode,
		link: from([customHeader, link]),
		cache,
	})

	return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default Apollo
