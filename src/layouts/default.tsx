import * as React from 'react'
import Head from 'next/head'

import styled from 'styled-components'
import { Header, Footer } from 'components'

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

const Layout: React.FC = props => (
	<Wrapper>
		<Container>
			<Header />
			{props.children}
			<Footer />
		</Container>
	</Wrapper>
)

export default Layout
