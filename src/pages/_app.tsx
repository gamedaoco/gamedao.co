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

const Application = ({ Component, pageProps }) => {
	useEffect(() => {
		if (process.env.NODE_ENV !== 'production') {
			Fathom.load('//scorpion.gamedao.co')
			Fathom.setSiteId('XLUUAYWU')
			Fathom.trackPageview()
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
					<Apollo>
						<IconContext.Provider value={{ style: { marginTop: '-3px', verticalAlign: 'middle' } }}>
							<Component {...pageProps} />
						</IconContext.Provider>
					</Apollo>
				</AppProvider>
			</PageTransition>
		</ThemeProvider>
	)
}

export default Application
