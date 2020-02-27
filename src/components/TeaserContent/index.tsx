import * as React from 'react'
import styled from 'styled-components'

import { Flex, Box, Card, Heading, Text } from 'rebass'
import { Border, H1, H3, Link, Space, Image, Container, Newsletter, Button } from 'components'

const GridContent = styled.div`
	font-size: 15px;
	vertical-align: top;
`

interface IGridItem {
	imageURL?: string
	headline?: string
	text?: string
	tags?: string[]
	id?: string
}

const GridItem: React.FC<IGridItem> = ({ imageURL, headline, text, tags, id }) => (
	<Box width={[1, 1 / 2]} p={4}>
		<ItemImage />
		<Heading>Bingo Bongo Land</Heading>
		<Text>Explore the island of Bingo Bongo Land with a growing commnuity of more than 250K players!</Text>
		<div>
			<Tag>INDIE</Tag>
			<Tag>NEWCOMER</Tag>
			<Tag>LENDING</Tag>
			<Tag>MMORPG</Tag>
		</div>
		<br />
		<Button bType="sm" href="#">
			{' '}
			Pitch{' '}
		</Button>{' '}
		<Button bType="sm" href="#">
			{' '}
			Try{' '}
		</Button>
	</Box>
)

interface IItemImage {
	title?: string
}

const ItemImage: React.FC<IItemImage> = ({ title }) => {
	return (
		<Box
			width={1}
			height={1}
			sx={{
				backgroundImage: `url(https://source.unsplash.com/random/800x600?jungle&k=${Math.random()})`,
				backgroundSize: 'cover',
				borderRadius: 3,
			}}
			bg={bgColor()}
			color="white"
			px={4}
			py={6}
			mb={4}
		>
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
		</Box>
	)
}

const bgColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16)

const Tag = styled.button`
	float: left;
	margin-top: 5px;
	margin-right: 5px;
	align: center;
	height: 12px;
	width: auto;
	padding: 2px 4px;
	font-weight: 400;
	font-size: 7px;
	text-styling: uppercase;
	letter-spacing: 1px;
	color: black;
	background-color: ${() => bgColor()};
	border: none;
	border-radius: 2px;
	:hover {
		background-color: white;
	}
`

const TeaserContent: React.FC = () => (
	<Flex flexDirection="row" flexWrap="wrap">
		<Box width={1} p={4}>
			<H1>Open Campaigns</H1>
		</Box>

		<GridItem />
		<GridItem />
		<GridItem />
		<GridItem />
	</Flex>
)
export default TeaserContent
