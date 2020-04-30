import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Header, Footer } from 'components'

import { DEV, SITE_DESCRIPTION, SITE_IMAGE, SITE_NAME, SITE_TITLE, TW_SITE_NAME, TW_SITE_CREATOR } from '../config/env'

const Wrapper = styled.div`
	margin: 0;
	padding: 0;
	width: 100%;
	min-height: 100vh;
`

const Container = styled.div`
	margin: 0;
	padding: 0;
	min-width: 100%;
	max-width: 1200px;
	min-height: 100vh;
`

const Layout = (props) => {
	const router = useRouter()
	const path = router.pathname.substr(1, 1).toUpperCase() + router.pathname.substr(2)

	return (
		<Wrapper>
			<Head>
				<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,shrink-to-fit=no" />

				<meta property="og:type" content="website" />
				<meta property="og:site_name" content={SITE_NAME} />

				<meta property="og:title" content={SITE_TITLE} />
				<meta property="og:description" content={SITE_DESCRIPTION} />
				<meta property="og:image" content={SITE_IMAGE} />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content={TW_SITE_CREATOR} />
				<meta name="twitter:site" content={TW_SITE_NAME} />
				<meta name="twitter:title" content={SITE_TITLE} />
				<meta name="twitter:description" content={SITE_DESCRIPTION} />
				<meta property="twitter:image" content={SITE_IMAGE} />

				<meta name="format-detection" content="telephone=no, address=no, email=no" />
				<link rel="shortcut icon" href="public/z-control-45-full.png" />
				<title>
					{path || 'GameDAO'} | {SITE_TITLE}
				</title>
			</Head>
			<Container>
				{!props.noHeader && <Header />}
				{props.children}
				{!props.noFooter && <Footer />}
			</Container>
		</Wrapper>
	)
}

export default Layout
