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

import { useEffect, useContext, useState } from 'react'
import App from 'next/app'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { AppProvider, useAppContext } from 'src/context/AppContext'
import { useSubstrate } from 'src/context/SubstrateContext'

import * as Fathom from 'fathom-client'
import { IconContext } from 'react-icons/lib'
// import { PageTransition } from 'next-page-transitions'
import { Loader, Message } from 'components'

// TODO: replace with material-ui
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, TIMEOUT } from 'src/themes/global'
import preset from '@rebass/preset'
import base from 'src/themes/base'
import dark from 'src/themes/dark'
import light from 'src/themes/light'
const theme = { ...preset, ...base, ...light }

// SSR
const isServer = () => typeof window === 'undefined'

const SubzeroProvider = dynamic(() => import('../context/SubstrateContext') as any, { ssr: false })

const Wrapper = ({ children }) => {
	if (isServer()) return <>{children}</>

	const { state } = useAppContext()
	const { allowConnect } = state.net
	const { apiState, apiError, keyring, keyringState, keyringError } = useSubstrate()

	useEffect(() => {
		if (apiState === 'ERROR') return <Message content={apiError} />
		else if (apiState !== 'READY') return <Loader content="Connecting to ZERO.IO" />
	}, [apiState])

	useEffect(() => {
		if (!allowConnect) return
		if (keyringState === 'ERROR') return <Message content={keyringError} />
		if (keyringState !== 'READY') return <Loader content={`Loading accounts — please review any extension's authorization`} />
	}, [allowConnect])

	if (!isServer()) return <SubzeroProvider>{children}</SubzeroProvider>
	return <>{children}</>
}

const Application = ({ Component, pageProps }) => {
	const router = useRouter()

	const [accountPair, setAccountPair] = useState(null)
	const [accountAddress, setAccountAddress] = useState(null)
	const [connected, setConnected] = useState(false)
	const [accountContext, setAccountContext] = useState({})

	useEffect(() => {
		setAccountContext({
			accountPair,
			setAccountPair,
			accountAddress,
			setAccountAddress,
			connected,
			setConnected,
		})
	}, [])

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
		<AppProvider key={1} accountContext={accountContext}>
			<GlobalStyle />
			<ThemeProvider theme={theme} key="theme">
				{/*				<PageTransition
					timeout={TIMEOUT}
					classNames="page-transition"
					loadingComponent={<Loader />}
					loadingDelay={5000}
					loadingTimeout={{
						enter: TIMEOUT,
						exit: 0,
					}}
					loadingClassNames="loading-indicator"
				>*/}
				<IconContext.Provider value={{ style: { marginTop: '-3px', verticalAlign: 'middle' } }}>
					<Wrapper>
						<Component {...pageProps} />
					</Wrapper>
				</IconContext.Provider>
				{/*				</PageTransition>
				 */}{' '}
			</ThemeProvider>
		</AppProvider>
	)
}

export default Application
