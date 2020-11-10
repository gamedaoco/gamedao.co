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
import { useRouter } from 'next/router'

import { Apollo } from 'src/lib/Apollo'
import { AppProvider } from 'src/hooks/AppContext'
import { SubstrateProvider } from 'src/hooks/SubstrateContext'

import * as Fathom from 'fathom-client'

import { IconContext } from 'react-icons/lib'
import { PageTransition } from 'next-page-transitions'
import { Loader } from 'components'

import { ThemeProvider } from 'styled-components'
import preset from '@rebass/preset'
import { GlobalStyle, TIMEOUT } from 'src/themes/global'
import base from 'src/themes/base'
import dark from 'src/themes/dark'
import light from 'src/themes/light'

// TODO: currently this breaks the app css:
// import 'semantic-ui-css/semantic.min.css'

const theme = {
	...preset,
	...base,
	...light,
}

const Application = ({ Component, pageProps }) => {
	const router = useRouter()

	useEffect(() => {
		Fathom.load('XLUUAYWU', {
			url: '//scorpion.gamedao.co/script.js',
		})

		function onRouteChangeComplete() {
			Fathom.trackPageview()
		}

		router.events.on('routeChangeComplete', onRouteChangeComplete)

		return () => {
			router.events.off('routeChangeComplete', onRouteChangeComplete)
		}
	}, [])

	return (
		<ThemeProvider theme={theme} key="key">
			<GlobalStyle />
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
				<AppProvider key={1}>
					<SubstrateProvider>
						<Apollo>
							<IconContext.Provider value={{ style: { marginTop: '-3px', verticalAlign: 'middle' } }}>
								<Component {...pageProps} />
							</IconContext.Provider>
						</Apollo>
					</SubstrateProvider>
				</AppProvider>
			</PageTransition>
		</ThemeProvider>
	)
}

export default Application
