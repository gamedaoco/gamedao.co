import * as React from 'react'
//import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

import { Flex, Box, Heading, Text } from 'rebass'
import { Border, H1, H2, Link, Intro, Space, Image, Container, Newsletter, Button, TeaserContent } from 'components'

import img from 'public/img/1.png'
import logo from 'public/z-ctrl-45-wht.svg'

import { FaChevronDown } from 'react-icons/fa'

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

const Home = () => {
	return (
		<Container>
			{/* I N T R O ———— */}

			<Intro>
				<Flex flexDirection="row" flexWrap="wrap">
					<Box width={[1]} px={[4, 6]} pt={[4, 6]}>
						<Box width={[1]} p={[4]} bg="rgba(0,0,0,0.5)">
							{/*<img src={logo} height={100} />*/}

							<Heading textAlign="left" fontSize={[1, 2]} fontWeight={200}>
								<i>G A M E D A O —</i>
							</Heading>

							<Heading textAlign="left" fontSize={[3, 4, 5]} fontWeight={200} pb={2}>
								<i>
									rebooting videogames funding.
									<br />
									and gaming as a profession.
								</i>
							</Heading>

							<Box width={[1, 1, 1 / 2]} pt={4}>
								<Heading fontSize={[2, 2, 3]} fontWeight={200} pb={12}>
									<i>
										Gamers and creators deserve better than fast paced
										invest and release cycles.
										<br />
										<br />
										Long gone seem the times where gamers were not degraded to swipe monkeys or a
										meaningless daily active user metric.
									</i>
								</Heading>

								<Heading fontSize={[2, 2, 3]} fontWeight={200} pb={12}>
									<i>
										Common understanding and mutual benefit of lasting game economics seem
										unreachable.
									</i>
								</Heading>
							</Box>

							<Box width={[1, 1 / 2]} pt={4}>
								<Heading textAlign="left" fontSize={[2, 3]} fontWeight={200}>
									<i>Get an invite before we launch</i>
								</Heading>

								<Newsletter />
							</Box>

							<Box width={1}>
								<Heading textAlign="center" fontSize={[3]} pt={5}>
									<Link href="/#info"><FaChevronDown/></Link>
								</Heading>
							</Box>

						</Box>
					</Box>
				</Flex>
			</Intro>

		</Container>
	)
}
export default Home
