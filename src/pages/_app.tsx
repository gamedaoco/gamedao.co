import React from 'react'
import NextApp from 'next/app'

import Router, { useRouter } from 'next/router'
import mixpanel from 'mixpanel-browser'
import { Tracker } from 'src/lib/tracker'

import fetch from 'isomorphic-unfetch'

import Apollo from 'src/lib/Apollo'

// import { ApolloProvider } from '@apollo/react-hooks'
// import { ApolloClient } from 'apollo-client'
// import { HttpLink } from 'apollo-link-http'
// import { setContext } from 'apollo-link-context'
// import { InMemoryCache } from 'apollo-cache-inmemory'
import { GQL_URI, GQL_DEVKEY, DEV } from 'src/config/env'

import { ThemeProvider } from 'styled-components'
import { IconContext } from 'react-icons/lib'
import { PageTransition } from 'next-page-transitions'
import { Loader } from 'components'
import preset from '@rebass/preset'
import { GlobalStyle, TIMEOUT } from 'src/themes/global'
import base from 'src/themes/base'
import dark from 'src/themes/dark'
import light from 'src/themes/light'

const defaultContext = {
	light: true,
	toggle: () => {},
}
const theme = {
	...preset,
	...base,
	...light,
}

// const initialState = {}

// const uri = GQL_URI
// const httpLink = HttpLink({
// 	uri,
// 	fetch,
// 	credentials: 'same-origin', // include, *same-origin, omit
// })
// const authLink = setContext((_, { headers }) => {
// 	const token = localStorage.getItem('token')
// 	console.warn('access token', token)
// 	console.warn('headers', headers)
// 	return {
// 		headers: {
// 			...headers,
// 			'x-hasura-admin-secret': DEV ? GQL_DEVKEY : '',
// 			// authorization: token ? `Bearer ${token}` : '',
// 		},
// 	}
// })
// const client = new ApolloClient({
// 	ssrMode: true,
// 	link: authLink.concat(httpLink),
// 	cache: new InMemoryCache().restore(initialState),
// })

interface IApplication {
	pageProps: any
}

class Application extends NextApp<IApplication> {
	componentDidMount() {
		// Tracker.init()
		// Router.events.on('routeChangeComplete', () => {
		// 	const path = Router.pathname.substr(1, 1).toUpperCase() + Router.pathname.substr(2)
		// 	Tracker.track('page', { path: path || 'Index' })
		// })
	}

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
						<Apollo>
							<Component {...pageProps} />
						</Apollo>
					</IconContext.Provider>
				</ThemeProvider>
			</PageTransition>
		)
	}
}

export default Application
