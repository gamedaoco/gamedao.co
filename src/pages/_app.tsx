import { useEffect, useContext } from 'react'
import App from 'next/app'
import Router from 'next/router'

import { Apollo } from 'src/lib/Apollo'
import { AppProvider, AppContext } from 'src/hooks/AppContext'
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

	useEffect(() => {
		if (process.env.NODE_ENV === 'production') {
			Fathom.load()
			Fathom.setSiteId('XLUUAYWU')
			Fathom.trackPageview()
		}
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
