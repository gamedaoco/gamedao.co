import * as React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { Flex, Box } from 'rebass'
import { Navigation, Link, Divider } from 'components'

import logo from 'public/z-ctrl-45-col.svg'
import img from 'public/stripes-s.png'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FX = gql`
	query {
		fx {
			id
			name
			askQuote
			bidQuote
		}
	}
`

const Rates = () => (
	<Query query={FX}>
		{({ loading, error, data }) => {
			if (loading) return <div>Loading...</div>
			if (error) return null //<div>Error</div>

			const fx = data.fx

			return (
				<div>
					{fx.map(rate => (
						<Link key={rate.id} href="/account/wallet">
							{rate.name}&nbsp;{rate.askQuote || 0}
						</Link>
					))}
				</div>
			)
		}}
	</Query>
)

const Container = styled.div`
	// * { border: 1px dotted red; }

	margin: 0;
	padding: 0;
	width: 100%;
	height: auto;
	background: #000;

	* {
		// font-size: 10px;
		transition-duration: 100ms;
		transition-timing-function: ease-in-out;
	}
`

const MetaLink = styled.div`
	text-align: right;
	color: white;
	a {
		font-size: 10px;
		color: rgba(255, 255, 255, 0.5);
		margin-left: 25px;
	}
	a,
	a: visited {
		text-decoration: none;
		color: rgba(255, 255, 255, 1);
	}
	a:hover {
		color: rgba(255, 255, 255, 1);
		border-bottom: 1px dotted;
	}
`

const User = styled.div`
	color: white;
	height: 100px;
	display: flex;
	align-items: flex-end;
	a,a: visited {
		text-decoration: none;
		color: white;
	}
	a:hover {
		color: white;
		border-bottom: 1px dotted;
	}
`
const Task = styled.div`
	color: white;
	height: 50px;
	display: flex;
	align-items: flex-end;
`
const Right = styled.div`
	font-size: 40px;
	width: 100%;
	text-align: right;
`

interface IHeader {
	email?: string
	message?: string
	loggedIn?: boolean
	showContactView?: boolean
}

const Header: React.FC<IHeader> = ({ loggedIn }) => {
	const height = '100px'
	const logoHeight = '50px'
	const logoAlt = 'zero'
	const logoHref = '/'

	const token = {
		XP: 1337,
		REP: 49152,
		PLAY: 13.37,
		// exchange rates
		// stable rate should be 1 EUR == 1 PLAY
		EUR_PLAY: 1,
		// current exchange rate for ETH to PLAY via Exchange
		ETH_PLAY: 0.05,
		// current exchange rate for ETH to EUR via Exchange
		ETH_EUR: 222.02,
	}

	const router = useRouter()
	const showContactView = router.pathname == '/contact' ? false : true

	return (
		<Container>
			{/*<Divider sm />*/}

			<Flex flexDirection="row" flexWrap="wrap">
				{/* TOP */}

				<Box order={[1, 1]} pt={4} px={4} py={3} width={[1 / 3, 1 / 8]}>
					<Link href="/">
						<img src={logo} height={logoHeight} alt={logoAlt} />
					</Link>
				</Box>

				<Box order={[3, 2]} pt={[0, 4]} px={4} width={[1, 3 / 8]}>
					<MetaLink>
						{loggedIn && <Rates />}
						{
							// {loggedIn && <Link href="/account/wallet#xp">XP&nbsp;{ token.XP || 0 }</Link>}
							// {loggedIn && <Link href="/account/wallet#rep">REP&nbsp;{ token.REP || 0 }</Link>}
							// {loggedIn && <Link href="/account/wallet#play">PLAY&nbsp;{ token.PLAY || 0 }</Link>}
						}
					</MetaLink>
				</Box>

				<Box order={[2, 3]} pt={4} px={4} width={[2 / 3, 4 / 8]}>
					<MetaLink>
						{loggedIn && <Link href="/account">Account</Link>}

						{loggedIn && <Link href="/doc/help">Helpdesk</Link>}
						{!loggedIn && showContactView && <Link href="/contact">Contact</Link>}

						{/*!loggedIn && <Link href="/account/signin">Sign In</Link>*/}
						{/*!loggedIn && <Link href="/account/signup">Sign Up</Link>*/}
						{loggedIn && <Link href="/account/signout">Sign&nbsp;Out</Link>}
					</MetaLink>
				</Box>

				{/* MESSAGE */}

				{/*
									<Box order={[4, 3]} px={4} width={[1, 1 / 2]}>
										{loggedIn && (
											<User>
												Welcome, <Link href="/account">User</Link>.
											</User>
										)}
									</Box>

									<Box order={[3, 4]} px={4} width={[1, 1 / 2]}>
										{loggedIn && (
											<Task>
												<Right>{'Phase 1 / 3'}</Right>
											</Task>
										)}
									</Box>
*/}

				{/* NAVBAR */}
				{/*
				<Box order={5} width={[1]}>
					<Navigation />
				</Box>
*/}
			</Flex>
		</Container>
	)
}

export default Header
