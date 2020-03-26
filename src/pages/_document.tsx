import * as React from 'react'
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

import { ServerStyleSheet } from 'styled-components'

import { DEV, SITE_DESCRIPTION, SITE_IMAGE, SITE_NAME, SITE_TITLE, SITE_TW_NAME } from 'src/config/env'

class CustomDocument extends Document {
	static async getStaticProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
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
