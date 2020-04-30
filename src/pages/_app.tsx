import React from 'react'
import NextApp from 'next/app'

import Router, { useRouter } from 'next/router'
import mixpanel from 'mixpanel-browser'
import { Tracker } from 'src/lib/tracker'

import fetch from 'isomorphic-unfetch'

import { Apollo } from 'src/lib/Apollo'

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
