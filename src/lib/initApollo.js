
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { split } from 'apollo-link'


import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

const uri = `http://localhost:9090/graphql`
const wsUri = `ws://localhost:9090/cable`
const ssrMode = !process.browser

if (ssrMode) global.fetch = fetch

function create (initialState) {

	const httpLink = createHttpLink({
		uri,
		fetch,
		credentials: 'same-origin'
	})

	if (!ssrMode) {
		const wsClient = new SubscriptionClient(wsUri, {
			reconnect: true
		})
		link = addGraphQLSubscriptions(
			link,
			wsClient
		)
	}

	let link = httpLink
	if (!ssrMode) {

		// Create a WebSocket link:
		const wsLink = new WebSocketLink({
			uri: WS_URL,
			options: {
				reconnect: true,
			},
			webSocketImpl: ws.client,
		})

    	link = split(
      		// split based on operation type
      		({ query }) => {
        		const { kind, operation } = getMainDefinition(query)
        		return kind === 'OperationDefinition' && operation === 'subscription'
      		},
      	wsLink,
      	httpLink
    )

	return new ApolloClient({
		link,
	    connectToDevTools: process.browser,
		ssrMode: true,
		cache: new InMemoryCache().restore(initialState),
	})
}

export default function initApollo (initialState) {
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	if (!process.browser) {
		return create(initialState)
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = create(initialState)
	}

	return apolloClient
}