import React from 'react'
import NextApp, { AppContext } from 'next/app'

import { GQL_URI } from 'config/env'

import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-unfetch'

import { ThemeProvider } from 'styled-components'
import { IconContext } from 'react-icons/lib'
import { PageTransition } from 'next-page-transitions'
import { Loader } from 'components'
import { GlobalStyle, TIMEOUT } from 'src/themes/global'
import preset from '@rebass/preset'
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

const initialState = {}

const uri = GQL_URI
const httpLink = createHttpLink({
	uri,
	fetch,
	credentials: 'same-origin',
})
const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('token')
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	}
})

const client = new ApolloClient({
	ssrMode: true,
	link: authLink.concat(httpLink),
	cache: new InMemoryCache().restore(initialState),
})

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
