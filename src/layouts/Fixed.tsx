import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import styled from 'styled-components'
import { Header, Footer } from 'components'
import { SITE_TITLE, DEV } from 'src/config/env'

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
