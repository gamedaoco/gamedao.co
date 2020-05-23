/**
           _______________________________ ________
           \____    /\_   _____/\______   \\_____  \
             /     /  |    __)_  |       _/ /   |   \
            /     /_  |        \ |    |   \/    |    \
           /_______ \/_______  / |____|_  /\_______  /
                   \/        \/         \/         \/
           Z  E  R  O  .  I  O     N  E  T  W  O  R  K
           © C O P Y R I O T   2 0 7 5   Z E R O . I O
**/

import React, { useContext } from 'react'
import { AppContext } from 'src/hooks/AppContext'

import styled from 'styled-components'
import { Flex, Box, Text } from 'rebass/styled-components'
import { FaGitlab, FaDiscord, FaTwitter } from 'react-icons/fa'
import { H3, H4, SmallText, Link, Newsletter, Divider } from 'components'

import logo from 'public/z-h-col.svg'
import img from 'public/stripes-s.png'

const Container = styled.div`
	margin: 0;
	padding: 0;
	width: 100%;
	height: auto;

	background: black;
	// background: linear-gradient(
	// 	rgba(2,0,36,1) 0%,
	// 	rgba(9,9,121,1) 35%,
	// 	rgba(0,212,255,1) 100%
	// );

	color: rgba(255, 255, 255, 0.65);
	transition-duration: 250ms;

	// > :hover {
	// 	color: rgba(255, 255, 255, 1);
	// 	transition-duration: 250ms;
	// }

	a {
		fill: white;
	}

	.icon {
		margin-right: 25px;
	}
`
const FooterNav = () => {
	return (
		<Flex flexDirection="row" flexWrap="wrap">
			<Box px={4} pt={4} width={[1 / 2, 1 / 2, 1 / 3, 1 / 5]} color="#00ffcc">
				<Text>
					<H3>
						Investor +<br />
						Gamer
					</H3>
					<Link href="/invest">Invest now</Link>
					<br />
					<Link href="/invest#match">Find a match</Link>
					<br />
					<Link href="/invest#tribe">Join a tribe</Link>
					<br />
					<Link href="/doc/how-to-invest">How to invest</Link>
				</Text>
			</Box>

			<Box px={4} pt={4} width={[1 / 2, 1 / 2, 1 / 3, 1 / 5]} color="#00ccff">
				<Text>
					<H3>
						Creator +<br />
						Publisher
					</H3>
					<Link href="/wizard">Get funding</Link>
					<br />
					<Link href="/pro/requirements">Requirements</Link>
					<br />
					<Link href="/doc/fees">Fees</Link>
					<br />
					<Link href="/doc/how-to-get-funding">How to Get funding</Link>
				</Text>
			</Box>

			{/*<Box px={4} width={[1, 1, 1 / 3, 2 / 5]}></Box>*/}

			<Box px={4} pt={4} width={[1 / 2, 1 / 2, 1 / 3, 1 / 5]} color="#ff00cc">
				<Text>
					<H3>
						Products +<br />
						Services
					</H3>
					<Link href="/products#crowdshare">Crowd Shares</Link>
					<br />
					<Link href="/products#crowdlend">Crowd Lending</Link>
					<br />
					<Link href="/products#funding-tribes">Funding Tribes</Link>
					<br />
					<Link href="/products#staking">Staking + Validation</Link>
					<br />
					<br />
				</Text>
			</Box>

			<Box px={4} pt={4} width={[1 / 2, 1 / 2, 1 / 3, 1 / 5]} color="#ffcc00">
				<Text>
					<H3>
						Account
						<br />
						<br />
					</H3>
					{/* show this only when logged in */}
					<Link href="/account">Dashboard</Link>
					<br />
					<Link href="/account/portfolio">Portfolio</Link>
					<br />
					<Link href="/account/settings">Settings</Link>
					<br />
					{/* show this only when not logged in */}
					<Link href="/account/signup">Sign Up</Link>
				</Text>
			</Box>

			{/*
		<Box px={4} pt={4} width={[1, 1/2, 1/3, 1/5]}>
			<Text>
				<H3>Invest in us.</H3>
				<Link href="/account/signup">Accreditation</Link>
				<br /><br />
				<Link href="/dao">DAO</Link>
				<br />
				<Link href="/dao/portfolio">Portfolio</Link>
				<br />
				<Link href="/dao/invest">Invest</Link>
				<br /><br />
			</Text>
		</Box>
*/}

			<Box px={4} pt={4} width={[1 / 2, 1 / 2, 1 / 3, 1 / 5]} color="#ccff00">
				<Text>
					<H3>
						Join the DAO
						<br />
						<br />
					</H3>
					<a href="https://medium.com/gamedao" target="_blank">
						The Story
					</a>
					<br />
					<Link href="/dao/neonpaper">Neonpaper</Link>
					<br />
					<Link href="/dao/tokensale">Tokensale</Link>
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
				</Text>
			</Box>
		</Flex>
	)
}

const FooterBox: React.FC = ({ children }) => (
	<Box px={4} width={[1, 1 / 2, 1 / 2, 1 / 5]}>
		{children}
	</Box>
)

const Footer: React.FC = ({}) => {
	const { state } = useContext(AppContext)
	const { SHOW_FOOTER_NAV } = state.features.data

	return (
		<Container id="info">
			<Flex flexDirection="row" flexWrap="wrap">
				<Box px={4} py={4} width={[1, 1, 1 / 3, 2 / 5]}>
					<Text>
						<Link href="/">
							<img src={logo} height="20px" alt="zero" />
						</Link>
					</Text>
				</Box>
			</Flex>

			<Divider sm />

			<Flex flexDirection="row" flexWrap="wrap">
				<Box px={4} pt={4} width={[1, 1, 1 / 2, 3 / 5]}>
					<Text>
						zero.io is building GameDAO, a decentralised autonomous cooperative, summoned to foster sustainability and improve financing in video
						games, creative content, digital arts, e-sports and gaming as a profession.
						<br />
						<br />
						GameDAO provides matchmaking and crowd based funding instruments, connecting and empowering loyal gamers, creators, publishers and
						investors.
					</Text>
				</Box>
			</Flex>

			{SHOW_FOOTER_NAV && <FooterNav />}

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
						©&nbsp;{new Date().getFullYear()}&nbsp;
						<a href="https://zero.io" target="_blank">
							zero technologies
						</a>
						.&nbsp;&nbsp;&nbsp;made&nbsp;on&nbsp;earth.&nbsp;&nbsp;&nbsp;
						<Link href="/imprint">Imprint</Link>&nbsp;&nbsp;&nbsp;
						<Link href="/imprint">Privacy</Link>&nbsp;&nbsp;&nbsp;
						{/*<Link href="/imprint">Terms</Link>*/}
					</SmallText>
				</Box>
				<Box mx="auto" />
				<Box px={4} py={1}>
					<SmallText>
						{process.env.APP_VERSION} — {process.env.BUILD_TIME} — {process.env.VERCEL_GITLAB_COMMIT_REF || 'local'}
					</SmallText>
				</Box>
			</Flex>
		</Container>
	)
}

export default Footer
