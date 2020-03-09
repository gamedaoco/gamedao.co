import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Flex, Box, Heading, Text } from 'rebass'
import { Link, Intro, Container, Newsletter } from 'components'

import img from 'public/img/1.png'
import logo from 'public/z-ctrl-45-wht.svg'

import { IoIosArrowRoundDown } from 'react-icons/io'

import { useDecrypt } from 'src/lib/useDecrypt'

const Items = title => (
	<>
		<Box width={[1, 1, 3 / 4]} pt={4}>
			<Text fontSize={[4, 5]} pb={12}>
				Funding is one of the hardest parts in creating games, creative content or becoming a professional gamer.
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
			<Text textAlign="left" fontSize={[2]} fontWeight={600} color="#ff00cc">
				Get an invite before we launch.
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
	</>
)

const Home = () => {
	const { result, decrypt } = useDecrypt()
	const [title, setTitle] = useState('')

	const t = 'GameDAO creates crowdfinance tools for video game creators, publishers, investors and gamers.'

	useEffect(() => {
		handleChangeTitle(t)
	}, [])

	const handleChangeTitle = title => {
		decrypt(t)
		setTitle(t)
	}

	return (
		<Container>
			<Intro>
				<Flex flexDirection="row" flexWrap="wrap">
					<Box width={[1]} px={[4, 6]} pt={[2, 4]}>
						<Box width={[1]} p={[4]}>
							<Text textAlign="left" fontSize={[5, 6, 7]} fontWeight={800} pb={2}>
								{result}
							</Text>
						</Box>
						<Box width={1}>
							<Heading textAlign="center" fontSize={[3]} pt={5}>
								<Link href="/#content">
									<IoIosArrowRoundDown size="48" />
								</Link>
							</Heading>
						</Box>
					</Box>
				</Flex>
			</Intro>
			<Flex id="content" flexDirection="row" flexWrap="wrap">
				<Box width={[1]} px={[4, 6]} pt={[2, 4]}>
					<Items />
				</Box>
			</Flex>
		</Container>
	)
}

export default Home
