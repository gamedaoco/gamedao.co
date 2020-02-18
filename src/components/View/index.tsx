import * as React from 'react'
import styled from 'styled-components'

import { Flex, Box } from 'rebass'

const Wrapper = styled.div`
	margin: 0;
	padding: 0;
	width: 100%;
	min-height: 100vh;
`

interface IView {
	children?: string | React.ReactNodeArray | React.ReactNode
}

const View: React.FC<IView> = ({ children }, props) => (
	<Wrapper>
		<Flex flexDirection="row" flexWrap="wrap">
			<Box m={[2, 4]} {...props}>
				{children}
			</Box>
		</Flex>
	</Wrapper>
)

export default View
