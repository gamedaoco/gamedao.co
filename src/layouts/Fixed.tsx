import * as React from 'react'
import Head from 'next/head'

import styled from 'styled-components'
import { Header, Footer } from 'components'

import { SITE_TITLE } from 'config/env'

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

interface ILayoutProps {
	title?: string
}

const Layout: React.FC<ILayoutProps> = ({ title, ...props }) => (
	<Wrapper>
		<Head>
			<title>
				{title || 'GameDAO'} | {SITE_TITLE}
			</title>
		</Head>
		<Container>
			<Header />
			{props.children}
			<Footer />
		</Container>
	</Wrapper>
)

export default Layout
