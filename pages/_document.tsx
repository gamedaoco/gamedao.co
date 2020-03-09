import * as React from 'react'
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

import { ServerStyleSheet } from 'styled-components'

import { DEV, FB_TRACKING_ID, SITE_DESCRIPTION, SITE_IMAGE, SITE_NAME, SITE_TITLE, SITE_TW_NAME } from 'config/env'

class CustomDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="viewport" key="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
					<meta httpEquiv="content-language" content="en" />

					<meta name="description" content={SITE_DESCRIPTION} />

					<meta property="og:type" content="website" />
					<meta property="og:site_name" content={SITE_NAME} />
					<meta property="og:title" content={SITE_TITLE} />
					<meta property="og:description" content={SITE_DESCRIPTION} />
					<meta property="og:image" content={SITE_IMAGE} />

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:site" content={SITE_TW_NAME} />
					<meta name="twitter:creator" content={SITE_TW_NAME} />
					<meta name="twitter:title" content={SITE_TITLE} />
					<meta name="twitter:description" content={SITE_DESCRIPTION} />
					<meta property="twitter:image" content={SITE_IMAGE} />

					<meta name="format-detection" content="telephone=no, address=no, email=no" />

					<link rel="shortcut icon" href={SITE_IMAGE} />
					<link rel="icon" type="image/png" href={SITE_IMAGE} />
					<link rel="apple-touch-icon" href={SITE_IMAGE} />

					{/*
						<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes,String.prototype.includes,Array.prototype.findIndex,Object.entries" />
					*/}

					{!DEV && FB_TRACKING_ID && (
						<script
							dangerouslySetInnerHTML={{
								__html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window,document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
								fbq('init', '${FB_TRACKING_ID}');
								fbq('track', 'PageView'); `,
							}}
						/>
					)}

					{!DEV && FB_TRACKING_ID && (
						<noscript>
							<img height="1" width="1" src={`//www.facebook.com/tr?id=${FB_TRACKING_ID}&ev=PageView&noscript=1`} />
						</noscript>
					)}
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default CustomDocument
