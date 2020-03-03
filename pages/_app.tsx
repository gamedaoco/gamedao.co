import * as React from 'react'
import NextApp, { AppContext } from 'next/app'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { IconContext } from 'react-icons/lib'
import { PageTransition } from 'next-page-transitions'

import { Loader } from 'components'
import preset from '@rebass/preset'
import base from 'src/themes/base'

const theme = {
	...preset,
	...base,
}
// graphql config
// import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-unfetch'
// graphql subscription for ticker data

// import { WebSocketLink } from 'apollo-link-ws'
// import { SubscriptionClient } from 'subscriptions-transport-ws'
// import ws from 'ws'

const initialState = {}
const uri = `http://localhost:9090/graphql`
// const wsUri = `ws://localhost:9090/cable`

// import { ApolloLink } from 'apollo-link'
// import ActionCable from '@rails/actioncable'
// import { ActionCableLink } from 'graphql-ruby-client'

// const cable = ActionCable.createConsumer()

const link = createHttpLink({
	uri,
	fetch,
	credentials: 'same-origin',
})

// const wsClient = new SubscriptionClient(wsUri, { reconnect: true }, ws);
// const wsLink = new WebSocketLink(wsClient);

// const hasSubscriptionOperation = ({ query: { definitions } }) => {
// 	return definitions.some(
// 		({ kind, operation }) => kind === 'OperationDefinition' && operation === 'subscription'
// 	)
// }

// const link = ApolloLink.split(
// 	hasSubscriptionOperation,
// 	new ActionCableLink({cable}),
// 	httpLink
// )

const client = new ApolloClient({
	ssrMode: true,
	link: link,
	cache: new InMemoryCache().restore(initialState),
})

//

const TIMEOUT = 500

const col = () => {
	const colors = ['#00ADEE', '#EC297B', '#F6921E', '#37B34A']
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}

const grid = {
	bgcol: '#000000',
	dotcol: col(),
	dotsize: 1,
	space: 128,
}

const GlobalStyle = createGlobalStyle`

	/*
		reset base styles
	 */

	*, div {
		font-family: ${theme.fonts.sans};
		font-weight: 400;
		font-size: 15px;
		box-sizing: border-box;
		color: rgba(255,255,255,.75);

		&:hover {
			text-decoration: none;
			color: rgba(255,255,255,1);
			transition-duration:250ms;
		}
	}

	div#__next, html, body {
		margin: 0;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		scroll-behavior: smooth;

	}

	a {
		text-decoration: none;
		color: rgba(255,255,255,.5);
		transition-duration:150ms;
	}

	a:hover {
		text-decoration: none;
		color: rgba(255,255,255,1);
		transition-duration:150ms;
	}

	body {
		background:
			linear-gradient( 90deg, ${grid.bgcol} ${grid.space - grid.dotsize}px, transparent 1%) center,
			linear-gradient( ${grid.bgcol} ${grid.space - grid.dotsize}px, transparent 1%) center,
			${grid.dotcol};
		background-size: ${grid.space}px ${grid.space}px;
	}

	/*
		scrollbar
	 */

	html {
		overflow: scroll;
		overflow-x: hidden;
		scroll-behavior: smooth;
		scrollbar-width: thin;
		scrollbar-color: rgba( 255, 0, 255, 1 );
	}
	::-webkit-scrollbar {
		width: 2px;
		background: black;
	}
	::-webkit-scrollbar-thumb {
		background: rgba( 255, 0, 255, 1 );
	}

	textarea, select, input, button { outline: none; }

	/*
		page transitions
	 */

	.page-transition-enter {
		opacity: 0;
		transform: translate3d(0, 0px, 0);
	}
	.page-transition-enter-active {
		opacity: 1;
		transform: translate3d(0, 0, 0);
		transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
	}
	.page-transition-exit {
		opacity: 1;
	}
	.page-transition-exit-active {
		opacity: 0;
		transition: opacity ${TIMEOUT}ms;
	}

	/*
		loader
	 */

	.loading-indicator-appear,
	.loading-indicator-enter {
		opacity: 0;
	}
	.loading-indicator-appear-active,
	.loading-indicator-enter-active {
		opacity: 1;
		transition: opacity ${TIMEOUT}ms;
	}
`

interface IApplication {
	pageProps: any
}

class Application extends NextApp<IApplication> {
	render() {
		const { Component, pageProps } = this.props

		return (
			<PageTransition
				timeout={TIMEOUT}
				classNames="page-transition"
				loadingComponent={<Loader />}
				loadingDelay={5000}
				loadingTimeout={{
					enter: TIMEOUT,
					exit: 0,
				}}
				loadingClassNames="loading-indicator"
			>
				<ThemeProvider theme={theme} key="key">
					<IconContext.Provider value={{ style: { marginTop: '-3px', verticalAlign: 'middle' } }}>
						<GlobalStyle />
						<ApolloProvider client={client}>
							<Component {...pageProps} />
						</ApolloProvider>
					</IconContext.Provider>
				</ThemeProvider>
			</PageTransition>
		)
	}
}

export default Application
