import { useEffect } from 'react'
import Head from 'next/head'
import { AppProps, NextWebVitalsMetric } from 'next/app'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'
import { Providers } from 'src/providers'

import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'src/theme/createEmotionCache'
import { ThemePrimaryColor } from 'src/components/ThemePrimaryColor/themePrimaryColor'

import config from '../data/config.json'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
	Component: any
	emotionCache: EmotionCache
	pageProps: object
}

export function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
	const router = useRouter()
	useEffect(() => {
		Fathom.load('XLUUAYWU', {
			url: 'https://brilliant-truthful.gamedao.co/script.js',
			includedDomains: ['gamedao.co'],
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
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,shrink-to-fit=no"
				/>
				<meta name="format-detection" content="telephone=no, address=no, email=no" />
				<link rel="shortcut icon" href="/v3/png/GameDAO-color.png" />
				<link rel="icon" type="image/png" href="/v3/png/GameDAO-color.png" />

				<meta property="og:type" content="website" />
				<meta property="og:site_name" content={config.global.SITE_NAME} />
				<meta property="og:title" content={config.global.SITE_TITLE} />
				<meta property="og:description" content={config.global.SITE_DESCRIPTION} />
				<meta property="og:image" content={config.global.SITE_IMAGE} />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content={config.global.TW_SITE_CREATOR} />
				<meta name="twitter:site" content={config.global.TW_SITE_NAME} />
				<meta name="twitter:title" content={config.global.SITE_TITLE} />
				<meta name="twitter:description" content={config.global.SITE_DESCRIPTION} />
				<meta property="twitter:image" content={config.global.SITE_IMAGE} />
			</Head>
			<CacheProvider value={emotionCache}>
				<Providers>
					<Component {...pageProps} />
				</Providers>
			</CacheProvider>
		</>
	)
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
	// console.log(metric)
}

export default MyApp
