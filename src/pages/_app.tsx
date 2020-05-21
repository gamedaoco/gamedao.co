/**
           _______________________________ ________
           \____    /\_   _____/\______   \\_____  \
             /     /  |    __)_  |       _/ /   |   \
            /     /_  |        \ |    |   \/    |    \
           /_______ \/_______  / |____|_  /\_______  /
                   \/        \/         \/         \/
		   Z  E  R  O  .  I  O     N  E  T  W  O  R  K
		   © C O P Y R I O T   2 0 7 5   Z E R O . I O
**/

import { useEffect, useContext } from 'react'
import App from 'next/app'
import Router from 'next/router'

import { Apollo } from 'src/lib/Apollo'
import { AppProvider, AppContext } from 'src/hooks/AppContext'
import * as Fathom from 'src/lib/Fathom'

import { IconContext } from 'react-icons/lib'
import { PageTransition } from 'next-page-transitions'
import { Loader } from 'components'

import { ThemeProvider } from 'styled-components'
import preset from '@rebass/preset'
import { GlobalStyle, TIMEOUT } from 'src/themes/global'
import base from 'src/themes/base'
import dark from 'src/themes/dark'
import light from 'src/themes/light'

const theme = {
	...preset,
	...base,
	...light,
}

Router.events.on('routeChangeComplete', () => {
	Fathom.trackPageview()
})

const Application = ({ Component, pageProps, config }) => {
	const { state } = useContext(AppContext)
	const { READY } = state.app

	// useEffect(() => {
	// 	if ( window ) {
	// 		let tracker = window.document.createElement('script')
	// 		let firstScript = window.document.getElementsByTagName('script')[0]
	// 		tracker.defer = true
	// 		tracker.setAttribute('site', 'XLUUAYWU')
	// 		tracker.setAttribute('spa', 'auto')
	// 		tracker.src = 'https://cdn.usefathom.com/script.js'
	// 		if ( firstScript.parentNode ) firstScript.parentNode.insertBefore(tracker, firstScript)
	// 	}
	// }, []);

	useEffect(() => {
		// if (process.env.NODE_ENV === 'production') {
		Fathom.load()
		Fathom.trackPageview()
		// }
	}, [])

	return (
		<AppProvider>
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
		</AppProvider>
	)
}

export default Application
