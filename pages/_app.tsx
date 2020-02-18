import * as React from 'react'
import NextApp, { AppContext } from 'next/app'

import { IconContext } from 'react-icons/lib'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { PageTransition } from 'next-page-transitions'
import { Loader } from '../src/components'

import theme from '../src/components/Theme'

const TIMEOUT = 500

const grid = {
	bgcol:		'#000000',
	dotcol:		'#ff00ff',
	dotsize:	1,
	space:		128,
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
	}

	div#__next, html, body {
		margin: 0;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		// background-color: #000000;
		color: #eeeeee;
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
			linear-gradient( 90deg, ${grid.bgcol} ${ grid.space-grid.dotsize }px, transparent 1%) center,
			linear-gradient( ${grid.bgcol} ${ grid.space-grid.dotsize }px, transparent 1%) center,
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
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		background: rgba( 255, 0, 255, 1 );
	}

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
							<Component {...pageProps} />
						</IconContext.Provider>
					</ThemeProvider>
				</PageTransition>
		)
	}

}

export default Application
