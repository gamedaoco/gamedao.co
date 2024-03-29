import React, { useContext } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { PageTransition } from 'next-page-transitions'
import { AppContext } from 'src/context/AppContext'
import styled from 'styled-components'
import { Loader } from 'components'
import { Header, Footer, Notification } from 'components'

const Wrapper = styled.div`
	margin: 0;
	padding: 0;
	width: 100%;
	min-height: 100vh;
`

const Container = styled.div`
	margin: 0;
	padding: 0;
	width: 100%;
	min-height: 100vh;
`
const Content = styled.div`
	margin: 0;
	padding: 0;
	// min-width: 100%;
	max-width: 1280px;
	min-height: calc(100vh-100px);
`

const Layout = (props) => {
	const { state } = useContext(AppContext)
	const { notifications, READY } = state.app
	const { SITE_NAME, SITE_TITLE, SITE_DESCRIPTION, SITE_IMAGE, TW_SITE_CREATOR, TW_SITE_NAME } = state.config.data
	const { SHOW_HEADER, SHOW_FOOTER } = state.features.data
	const SHOW_NOTE = notifications != undefined
	const url = state.net.URL
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
				<link rel="shortcut icon" href="gamedao_tangram_color_2048.png" />
				<link rel="icon" type="image/png" href="gamedao_tangram_color_2048.png" />

				<title>
					{path || 'GameDAO'} | {SITE_TITLE}
				</title>
			</Head>
			<Container>
				{SHOW_HEADER && <Header />}
				{SHOW_NOTE && <Notification />}
				<Content>{props.children}</Content>
				{!props.noFooter && SHOW_FOOTER && <Footer />}
			</Container>
		</Wrapper>
	)
}

export default Layout
