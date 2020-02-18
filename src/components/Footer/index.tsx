import * as React from 'react'
import styled from 'styled-components'

import { Flex, Box } from 'rebass'
import { H3, H4, Text, SmallText, Link, Newsletter, Divider } from '../'

import logo from 'public/z-h-col.svg'
import img from 'public/stripes-s.png'

import { FaGitlab, FaDiscord, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa'

// const Divider = styled.div`
// 	min-width:100%;
// 	height:16px;
// 	background: repeat-x url('${img}');
// 	margin-bottom:1em;
// `

const Container = styled.div`
	// * { border: 1px dotted red; }

	margin: 0;
	padding: 0;
	background: black;
	color: #eee;
	width: 100%;
	height: auto;
	#a {
		fill: white;
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
				<Box px={4} pt={4} width={[1, 1, 1 / 3, 2 / 5]}>
					<Text>
						<Link href="/">
							<img src={logo} height="20px" alt="ecvan" />
						</Link>
					</Text>
				</Box>
			</Flex>

			<Divider sm />

			<Flex flexDirection="row" flexWrap="wrap">
				{/*				<Box px={4} width={[1, 1, 1/3, 2 / 5]}>
					<Text>
						<img src={logo} height="25px" alt="ecvan" />
					</Text>						
				</Box>*/}

				<Box px={4} width={[1, 1, 1 / 2, 3 / 5]}>
					<Text>
						zero.io is building gameDAO, a distributed autonomous organisation,
						summoned to solve the problems of sustainability and
						financing in videogames, creative content,
						digital arts, e-sports and gaming as a profession.
						<br />
						<br />
						we provide matchmaking and crowd based funding instruments,
						connecting and empowering loyal investors, gamers, creators and publishers.
						<br />
						<br />
{/*
						<Box width={[1, 1 / 2, 1]} color="#ff00ff">
							<H4>Sign Up here to stay in touch:</H4>
							<Newsletter />
						</Box>
						<br />
*/}
					</Text>
				</Box>
			</Flex>
			{/*

*/}
			<Flex flexDirection="row" flexWrap="wrap">


				<Box px={4} width={[1 / 2, 1 / 2, 1 / 3, 1 / 5]} color="#ccff00">
					<Text>
						<H3>
							Join us
							<br />
							<br />
						</H3>

						<a href="https://github.com/playzero" target="_blank">
							<FaGitlab /> GitLab
						</a>
						<br />
						<a href="https://discord.gg/rhwtr7p" target="_blank">
							<FaDiscord /> Discord
						</a>
						<br />
						<a href="https://twitter.com/zerodotio" target="_blank">
							<FaTwitter /> Twitter
						</a>
						<br />
						<a href="https://facebook.com/zerodotio" target="_blank">
							<FaFacebook /> Facebook
						</a>
						<br />
						<br />

						{/*
						<Link href="/dao/culture">How we work</Link>
						<br />
						<Link href="/doc/how-to-dao">How to DAO</Link>
						<br />
						<Link href="/dao/team">Team</Link>
						<br />
						<br />
						<Link href="/team#product">Product</Link>
						<br />
						<Link href="/team#design">Design</Link>
						<br />
						<Link href="/team#software">Software</Link>
						<br />
						<Link href="/team#biz">Business Development</Link>
						<br />
						<Link href="/team#community">Community</Link>
						<br />
*/}
						{/*<Link href="/dao/invest">gameDAO</Link>*/}
					</Text>
				</Box>
			</Flex>

			<Flex flexDirection="row" flexWrap="wrap">
				{/*
				<Box px={4} py={1} width={[1]}>
					<Text>
						<FaGithub/> <Link href="https://github.com/playzero">GitHub</Link> —
						<FaDiscord /> <Link href="https://discord.gg/rhwtr7p">Discord</Link> —
						<FaTwitter/> <Link href="https://twitter.com/zerodotio">Twitter</Link> —
						<FaFacebook/> <Link href="https://facebook.com/zerodotio">Facebook</Link>
					</Text>
				</Box>
*/}
				<Box px={4} py={1} width={[1]}>
					<SmallText>
						© 2019 gameDAO — zero.io.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;made on earth.
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/imprint">Imprint</Link>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/imprint">Privacy</Link>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/imprint">Terms of Use</Link>
					</SmallText>
				</Box>
			</Flex>
		</Container>
	)
}

export default Footer
