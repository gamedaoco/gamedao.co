import React, { useState, useEffect } from 'react'
import { useSubstrate } from 'src/context/SubstrateContext'
import styled from 'styled-components'

import { Flex, Box, Heading, Text } from 'rebass/styled-components'
import { Link, Intro, Container, Newsletter } from 'components'

import img from 'public/img/1.png'
import logo from 'public/z-ctrl-45-wht.svg'

import { IoIosArrowRoundDown } from 'react-icons/io'

import { useDecrypt } from 'src/lib/useDecrypt'

const Wrapper = styled.div`
	// pink
	// 0 0 70px rgba(192, 0, 96, 1);
	// blue
	// 0 0 70px rgba(0,96,192,1);

	text-shadow:
		0 0 20px rgba(255, 128, 0, .4),
		0 0 40px rgba(255, 0, 255, .4),
		0 0 10px rgba(192, 0, 96, .8);
	// > * {
	// 	transition-duration: 0ms;
	// }
	// :hover {
	// 	text-shadow: 0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1), 0 0 70px rgba(32, 255, 192, 1);
	// }
`
const hover = {
	transitionDuration: '250ms',
	opacity: '.75',
	':hover': { opacity: 1 },
}

const hoverStyle = {
	...hover,
	transitionDuration: '150ms',
	opacity: '.75',
	textShadow: '0 0 10px rgba(255, 255, 255, .5), 0 0 50px rgba(255, 64, 192, .5)',
	':hover': {
		opacity: 1,
		textShadow: '0 0 10px rgba(255, 255, 255, 1), 0 0 50px rgba(32, 255, 192, 1)',
	},
}

const Items = (title) => (
	<>
		<Box sx={hoverStyle} width={[1, 1, 3 / 4]} pt={4}>
			<Text fontSize={[4, 5]} pb={12}>
				Fundraising is one of the hardest parts in creating games, creative content or becoming a professional gamer.
			</Text>
		</Box>
		<Box sx={hoverStyle} width={[1, 1, 3 / 4]}>
			<Text fontSize={[4, 5]} pb={12}>
				Our tools empower creators and communities to fund and run projects they love in a cooperative way.
			</Text>
		</Box>
		<Box sx={hoverStyle} width={[1, 1, 3 / 4]}>
			<Text fontSize={[4, 5]} pb={12}>
				We offer fundraising protocols and governance tools to make your vision come true.
			</Text>
		</Box>

		{/*		<Box sx={hoverStyle} width={[1, 1, 3 / 4]}>
					<Text fontSize={[4, 5]} pb={12}>
						Gamers and creators deserve better than fast paced invest and release cycles.
					</Text>
				</Box>
				<Box sx={hoverStyle} width={[1, 1, 3 / 4]}>
					<Text fontSize={[4, 5]} pb={12}>
						Long gone seem the times where gamers were not degraded to swipe monkeys or a meaningless daily active user metric.
					</Text>
				</Box>
		*/}

		<Box sx={hover} width={[1, 1 / 2]} pt={4}>
			<Text textAlign="left" fontSize={[2]} fontWeight={600} color="#ff00cc">
				Get an invite before we launch.
			</Text>
			<Newsletter />
		</Box>
		<Box sx={hoverStyle} width={1}>
			<Heading textAlign="center" fontSize={[3]} py={5}>
				<Link href="/#info">
					<IoIosArrowRoundDown size="48" />
				</Link>
			</Heading>
		</Box>
	</>
)

const Home = () => {
	const { apiState } = useSubstrate()
	const { result, decrypt } = useDecrypt()
	const [ title, setTitle ] = useState('')

	const t =
		// 'GameDAO creates crowdfinance tools for video game creators, publishers, investors and gamers.'

		// 'GameDAO is the next generation democratic and transparent
		// crowdfunding platform for video game creators, publishers, gamers and investors.'

		// `GameDAO is a legal DAO wrapped in a cooperative body,
		// operating regulated finance protocols,
		// to create democratised organisations and businessmodels
		// through crowdfunding, tokenised ownership and governance
		// for video game creators, publishers, investors and gamers.`

		`GameDAO is a community owned cooperative providing
		fundraising, coordination and ownership protocols
		for the videogames economy.
		`
	// improving videogame economics for
	// the player, creator and funder by
	// increasing engagement and participation.`

	useEffect(() => {
		if(apiState!=='READY') return
		handleChangeTitle(t)
	}, [apiState])

	const handleChangeTitle = (title) => {
		decrypt(t)
		setTitle(t)
	}

	return (
		<Container>
			<Intro>
				<Flex flexDirection="row" flexWrap="wrap">
					<Box width={[1]} px={[4, 6]} pt={[2, 4]}>
						<Wrapper>
							<Box sx={hoverStyle} width={[1]} p={[4]}>
								<Text textAlign="left" fontSize={[4,5,6]} fontWeight={800} pb={2}>
									{result}
								</Text>
							</Box>
						</Wrapper>
						{/*
						 */}
						<Box width={1}>
							<Heading textAlign="center" fontSize={[3]} py={5}>
								<Link href="/#content">
									<IoIosArrowRoundDown size="48" />
								</Link>
							</Heading>
						</Box>
					</Box>
				</Flex>
			</Intro>
			<Flex id="content" flexDirection="row" flexWrap="wrap" color="rgba(255,255,255,.65)">
				<Box width={[1]} px={[4, 6]} py={[2, 4]}>
					<Items />
				</Box>
			</Flex>
		</Container>
	)
}

export default Home
