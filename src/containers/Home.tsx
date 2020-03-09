import React from 'react'
import styled from 'styled-components'

import { Flex, Box, Heading, Text } from 'rebass'
import { Link, Intro, Container, Newsletter } from 'components'

import img from 'public/img/1.png'
import logo from 'public/z-ctrl-45-wht.svg'

import { IoIosArrowRoundDown } from 'react-icons/io'

const Items = () => (
	<Box width={[1]} p={[4]}>
		<Text textAlign="left" fontSize={[5, 6, 7]} fontWeight={800} pb={2}>
			GameDAO is a cooperative creating crowdfinance tools for video game creators, publishers, investors and gamers.
		</Text>
		<Box width={[1, 1, 3 / 4]} pt={4}>
			<Text fontSize={[4, 5]} pb={12}>
				Finance is the hard part in creating games, creative content or becoming a professional gamer.
			</Text>
		</Box>
		<Box width={[1, 1, 3 / 4]}>
			<Text fontSize={[4, 5]} pb={12}>
				Gamers and creators deserve better than fast paced invest and release cycles.
			</Text>
		</Box>
		<Box width={[1, 1, 3 / 4]}>
			<Text fontSize={[4, 5]} pb={12}>
				Long gone seem the times where gamers were not degraded to swipe monkeys or a meaningless daily active user metric.
			</Text>
		</Box>
		<Box width={[1, 1, 3 / 4]}>
			<Text fontSize={[4, 5]} pb={12}>
				Our tools empower creators and communities to run projects they love in a cooperative way.
			</Text>
		</Box>
		<Box width={[1, 1 / 2]} pt={4}>
			<Text textAlign="left" fontSize={[2]} fontWeight={600}>
				Get an invite before we launch:
			</Text>
			<Newsletter />
		</Box>
		<Box width={1}>
			<Heading textAlign="center" fontSize={[3]} pt={5}>
				<Link href="/#info">
					<IoIosArrowRoundDown size="48" />
				</Link>
			</Heading>
		</Box>
	</Box>
)

const Home = () => (
	<Container>
		<Intro>
			<Flex flexDirection="row" flexWrap="wrap">
				<Box width={[1]} px={[4, 6]} pt={[2, 4]}>
					<Items />
				</Box>
			</Flex>
		</Intro>
	</Container>
)

export default Home
