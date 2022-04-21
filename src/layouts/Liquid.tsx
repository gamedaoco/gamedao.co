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

import React, { useContext } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import { Header, Footer, Content, H1 } from 'components'

import { AppContext } from 'src/context/AppContext'

const Wrapper = styled.div`
	margin: 0;
	padding: 0;
	width: 100vw;
	min-height: 100vh;
`

const Viewport = styled.div`
	margin: 0;
	padding: 0;
	min-width: 100vw;
	max-width: 1200px;
	min-height: 100vh;
`

const Layout = (props) => {
	const router = useRouter()
	const { state } = useContext(AppContext)
	const { SITE_NAME, SITE_TITLE, SITE_DESCRIPTION, SITE_IMAGE, TW_SITE_CREATOR, TW_SITE_NAME } = state.config.data
	const { SHOW_HEADER, SHOW_FOOTER } = state.features.data

	const path = router.pathname.substr(1, 1).toUpperCase() + router.pathname.substr(2)
	const showDiscord = path === ''

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
				<link rel="shortcut icon" href="z-control-45-full.png" />

				<title>
					{path || 'GameDAO'} | {SITE_TITLE}
				</title>

				{showDiscord && (
					<script
						src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3"
						async
						defer
						dangerouslySetInnerHTML={{
							__html: `
								new Crate({
									server: '273529551483699200', // ZΞRO
									channel: '732569366431924248' // #🪐web
								})
							`,
						}}
					/>
				)}
			</Head>
			<Viewport>
				{SHOW_HEADER && <Header />}
				<Content>
					<Flex flexDirection="row" flexWrap="wrap" px={4}>
						<Box width={[0, 0, 1 / 4]} p={[2, 4]} />
						<Box width={[1, 1, 1 / 2]} p={[2, 4]}>
							{props.title && <H1>{props.title}</H1>}
							{props.children}
						</Box>
						<Box width={[0, 0, 1 / 4]} p={[2, 4]} />
					</Flex>
				</Content>
				{SHOW_FOOTER && <Footer />}
			</Viewport>
		</Wrapper>
	)
}

export default Layout
