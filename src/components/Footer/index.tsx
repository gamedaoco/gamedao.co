import * as React from 'react'
import styled from 'styled-components'

import { Flex, Box, Text } from 'rebass/styled-components'
import { FaGitlab, FaDiscord, FaTwitter } from 'react-icons/fa'
import { H3, H4, SmallText, Link, Newsletter, Divider } from 'components'

import logo from 'public/z-h-col.svg'
import img from 'public/stripes-s.png'

const Container = styled.div`
	// * { border: 1px dotted red; }

	margin: 0;
	padding: 0;
	background: black;
	width: 100%;
	height: auto;
	a {
		fill: white;
	}
	.icon {
		margin-right: 25px;
	}
`

const FooterBox: React.FC = ({ children }) => (
	<Box px={4} width={[1, 1 / 2, 1 / 2, 1 / 5]}>
		{children}
	</Box>
)

const Footer: React.FC = ({}) => {
	return (
		<Container id="info">
			<Flex flexDirection="row" flexWrap="wrap">
				<Box px={4} pt={4} pb={3} width={[1, 1, 1 / 3, 2 / 5]}>
					<Text>
						<Link href="/">
							<img src={logo} height="20px" alt="zero" />
						</Link>
					</Text>
				</Box>
			</Flex>

			<Divider sm />

			<Flex flexDirection="row" flexWrap="wrap">
				<Box px={4} width={[1, 1, 1 / 2, 3 / 5]}>
					<Text>
						zero.io is building gameDAO, a decentralised autonomous organisation, summoned to foster
						sustainability and improve financing in videogames, creative content, digital arts, e-sports and
						gaming as a profession.
						<br />
						<br />
						gameDAO provides matchmaking and crowd based funding instruments, connecting and empowering
						loyal gamers, creators, publishers and investors.
					</Text>
				</Box>
			</Flex>

			<Flex flexDirection="row" flexWrap="wrap">
				<Box p={4} width={[1]} color="#ccff00">
					<a className="icon" href="https://discord.gg/rhwtr7p" target="_blank">
						<FaDiscord size={25} />
					</a>
					&nbsp;
					<a className="icon" href="https://twitter.com/zerodotio" target="_blank">
						<FaTwitter size={25} />
					</a>
					<a className="icon" href="https://github.com/playzero" target="_blank">
						<FaGitlab size={25} />
					</a>
					&nbsp;
				</Box>
			</Flex>

			<Flex flexDirection="row" flexWrap="wrap">
				<Box px={4} py={1} width={[1, 1 / 2]}>
					<SmallText>
						©&nbsp;2019&nbsp;gameDAO&nbsp;—&nbsp;zero.io.&nbsp;&nbsp;&nbsp;made&nbsp;on&nbsp;earth.&nbsp;&nbsp;&nbsp;
						<Link href="/imprint">Imprint</Link>&nbsp;&nbsp;&nbsp;
						<Link href="/imprint">Privacy</Link>&nbsp;&nbsp;&nbsp;
						{/*<Link href="/imprint">Terms</Link>*/}
					</SmallText>
				</Box>
			</Flex>
		</Container>
	)
}

export default Footer
