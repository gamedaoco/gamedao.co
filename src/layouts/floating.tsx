import * as React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import { Header, Footer, Content, H1 } from 'components'

const Wrapper = styled.div`
	margin: 0;
	padding: 0;
	width: 100%;
	min-height: 100vh;
`

const Viewport = styled.div`
	margin: 0;
	padding: 0;
	min-width: 100%;
	max-width: 1200px;
	min-height: 100vh;
`

const Layout = props => (
	<Wrapper>
		<Viewport>
			<Header />
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
			<Footer />
		</Viewport>
	</Wrapper>
)

export default Layout
