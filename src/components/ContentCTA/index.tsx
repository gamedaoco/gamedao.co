import * as React from 'react'
import styled from 'styled-components'

import { Flex, Box, Card, Heading, Text } from 'rebass'
import { Border, H1, H3, Link, Space, Image, Container, Newsletter, Button } from 'components'

const TeaserText = styled.div`
	font-size: 15px;
	vertical-align: top;
`

interface ITeaserBox {
	children?: React.ReactNode //object | string
}

const TeaserBox: React.FunctionComponent<ITeaserBox> = ({ children }) => (
	<Box px={2} width={[1 / 2, 1 / 4]} pt={2} mb={1}>
		<TeaserText>{children}</TeaserText>
	</Box>
)

interface ITeaserImage {
	title?: string
}

const TeaserImage: React.FunctionComponent<ITeaserImage> = ({ title }) => (
	<Card width={'256px'} height={'256px'} color="white" bg="#eeeeee" px={4} py={6} mb={4}>
		{title && (
			<Heading
				style={{
					textShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
					fontWeight: 'bolder',
				}}
				textAlign="center"
				fontSize={[3, 3, 3, 4]}
			>
				{title}
			</Heading>
		)}
	</Card>
)

const ContentCTA: React.FunctionComponent = () => (
	<Flex flexDirection="row" flexWrap="wrap" p={'25px'}>
		<Box px={2} width={1} pt={2} mb={1}>
			<H1>Join now.</H1>
		</Box>

		<Box px={[4]} width={[1, 1, 1 / 2]} pt={3} pb={2} backgroundColor="#00ccff">
			<H1>Fund your next idea</H1>
			<Text>
				Our dedicated teams support you through all relevant steps, from initial assessment until your specific
				business goal.
			</Text>
			<Button bType="sm" href="#">
				{' '}
				Apply Now{' '}
			</Button>
		</Box>

		<Border color="0x00ffc" width="2 ">
			<Box px={[4]} width={[1, 1, 1 / 2]} pt={3} pb={2}>
				<H1>Fund your next idea</H1>
				<Text>
					Don't be just a user:
					<br />
					<br />
					Generate steady income as a gamer and investor with alternative investment and innovative
					participation opportunity
				</Text>
				<Button bType="sm" href="#">
					{' '}
					Apply Now{' '}
				</Button>
			</Box>
		</Border>

		<Box width={[1, 1 / 2]}>
			<Heading textAlign="left" fontSize={[3, 4, 5]} fontWeight={200}>
				Creators
			</Heading>
			<Text textAlign="left" fontSize={[3, 4]}>
				Apply new funding and participation mechanics to develop sustainable business models and realise your
				vision.
			</Text>
		</Box>

		<Box width={[1, 1 / 2]}>
			<Heading textAlign="left" fontSize={[3, 4, 5]} fontWeight={200}>
				Gamers
			</Heading>
			<Text textAlign="left" fontSize={[3, 4]}>
				Don't be just a user:
				<br />
				<br />
				Generate steady income as a gamer and investor with alternative investment and innovative participation
				opportunity
			</Text>
		</Box>
	</Flex>
)
export default ContentCTA
