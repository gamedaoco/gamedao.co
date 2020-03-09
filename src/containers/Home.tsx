import * as React from 'react'
import styled from 'styled-components'

import { useTrail, animated } from 'react-spring'

import { Flex, Box, Heading, Text } from 'rebass'
import { Border, H1, H2, Link, Intro, Space, Image, Container, Newsletter, Button, TeaserContent } from 'components'

import img from 'public/img/1.png'
import logo from 'public/z-ctrl-45-wht.svg'

import { IoIosArrowRoundDown } from 'react-icons/io'

const LogoWrapper = styled.div``

interface FadeProps {
	delay?: number
	duration?: number
	children?: React.ReactNode
}

const Fade: React.FunctionComponent<FadeProps> = ({ delay = 250, duration = 500, ...props }) => <>{props.children}</>

interface Props {}

interface State {
	user: {
		name: string
		email: string
		phone?: string
		firstname?: string
		lastname?: string
		middlename?: string
		country?: string
	}
}

const Items = [
	<Text textAlign="left" fontSize={[5, 6, 7]} fontWeight={800} pb={2}>
		GameDAO is a cooperative creating crowdfinance tools for video game creators, publishers, investors and gamers.
	</Text>,
	<Box width={[1, 1, 3 / 4]} pt={4}>
		<Text fontSize={[4, 5]} pb={12}>
			Finance is the hard part in creating games, creative content or becoming a professional gamer.
		</Text>
	</Box>,
	<Box width={[1, 1, 3 / 4]}>
		<Text fontSize={[4, 5]} pb={12}>
			Gamers and creators deserve better than fast paced invest and release cycles.
		</Text>
	</Box>,
	<Box width={[1, 1, 3 / 4]}>
		<Text fontSize={[4, 5]} pb={12}>
			Long gone seem the times where gamers were not degraded to swipe monkeys or a meaningless daily active user metric.
		</Text>
	</Box>,
	<Box width={[1, 1, 3 / 4]}>
		<Text fontSize={[4, 5]} pb={12}>
			Our tools empower creators and communities to run projects they love in a cooperative way.
		</Text>
	</Box>,
	<Box width={[1, 1 / 2]} pt={4}>
		<Text textAlign="left" fontSize={[2]} fontWeight={600}>
			Get an invite before we launch:
		</Text>
		<Newsletter />
	</Box>,
	<Box width={1}>
		<Heading textAlign="center" fontSize={[3]} pt={5}>
			<Link href="/#info">
				<IoIosArrowRoundDown size="48" />
			</Link>
		</Heading>
	</Box>,
]

const Home = () => {
	const config = { mass: 5, tension: 2000, friction: 200 }
	const toggle = 1
	const trail = useTrail(Items.length, {
		config,
		opacity: toggle ? 1 : 0,
		from: { opacity: 0 },
	})

	return (
		<Container>
			{/* I N T R O ———— */}

			<Intro>
				<Flex flexDirection="row" flexWrap="wrap">
					<Box width={[1]} px={[4, 6]} pt={[2, 4]}>
						<Box width={[1]} p={[4]}>
							{trail.map(({ ...rest }, index) => (
								<animated.div key={Math.random() * 1337} style={{ ...rest }}>
									<animated.div style={{}}>{Items[index]}</animated.div>
								</animated.div>
							))}
						</Box>
					</Box>
				</Flex>
			</Intro>
		</Container>
	)
}
export default Home
