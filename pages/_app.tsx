import * as React from 'react'
import NextApp, { AppContext } from 'next/app'

import { IconContext } from 'react-icons/lib'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { PageTransition } from 'next-page-transitions'
import { Loader } from '../src/components'

const TIMEOUT = 500

const theme = {
	colors: {
		primary: '#0070f3',
	},
}

const GlobalStyle = createGlobalStyle`

	/*@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');*/

	html {
		overflow: scroll;
		overflow-x: hidden;
		scroll-behavior: smooth;
		scrollbar-width: thin;
		scrollbar-color: #ff00ff
	}
	::-webkit-scrollbar {
		width: 1px;
		background: transparent;  /* Optional: just make scrollbar invisible */
	}
	::-webkit-scrollbar-thumb {
		background: #FF00FF
	}

	div#__next, html, body {
		font-family: 'Helvetica Neue', Helvetica, sans-serif;
		font-weight: 400;
		font-size: 15px;
		margin: 0;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		background-color: #000000;
		color: #eeeeee;
	}

	* { box-sizing: border-box; }

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

interface AppProps {
	pageProps: any
}

class Application extends NextApp<AppProps> {
	// static async getInitialProps({ Component, ctx }: AppContext) {

	// 	const componentGetInitialProps = Component.getInitialProps || (() => Promise.resolve())
	// 	const [pageProps] = await Promise.all([
	// 		componentGetInitialProps(ctx),
	// 	])

	// 	return {
	// 		pageProps,
	// 	}
	// }

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
							<Component {...pageProps} />
						</IconContext.Provider>
					</ThemeProvider>
				</PageTransition>
		)
	}
}

export default Application
