import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { AppContext } from 'src/hooks/AppContext'
import Image from 'next/image'

import styled from 'styled-components'
import { Flex, Box } from 'rebass/styled-components'
import { Navigation, Link, Divider } from 'components'
import { RatesWrapper, Container, MetaLink, User, Task, Right } from './styles'
import logo from 'public/z-ctrl-45-col.svg'
import img from 'public/stripes-s.png'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const GET_FX = gql`
	query {
		fx {
			id
			askQuote
			askCurrency
			bidQuote
			bidCurrency
		}
	}
`

const Rates = () => {
	const { loading, error, data } = useQuery(GET_FX)

	if (loading) return <RatesWrapper>Loading...</RatesWrapper>
	if (error) return null // <RatesWrapper>Error: ${error.message}</RatesWrapper>

	const fx = data.fx
	console.log(data)

	return (
		<RatesWrapper>
			{fx.map((rate) => (
				<Link key={rate.id} href="/account/wallet">
					{rate.name}&nbsp;{rate.askQuote || 0}
				</Link>
			))}
			{/*
			{<Link href="/account/wallet#xp">XP&nbsp;{ token.XP || 0 }</Link>}
			{<Link href="/account/wallet#rep">REP&nbsp;{ token.REP || 0 }</Link>}
			{<Link href="/account/wallet#play">PLAY&nbsp;{ token.PLAY || 0 }</Link>}
*/}
		</RatesWrapper>
	)
}

interface IHeader {
	email?: string
	message?: string
	loggedIn?: boolean
	showContactView?: boolean
}

const Header: React.FC<IHeader> = ({ loggedIn }) => {
	const height = '100px'
	const logoHeight = '200'
	const logoAlt = 'zero'
	const logoHref = '/'

	const { state } = useContext(AppContext)
	const { SHOW_CAMPAIGNS, SHOW_APPLY } = state.features.data

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
	// const showContactView = router.pathname == '/contact' ? false : true

	return (
		<Container>
			{/*<Divider sm />*/}

			<Flex flexDirection="row" flexWrap="wrap">
				{/* TOP */}

				<Box order={[1, 1]} pt={4} px={4} py={3} width={[1 / 3, 1 / 8]}>
					<Link href="/">
						<Image src={logo} fill alt={logoAlt} />
					</Link>
				</Box>

				<Box order={[3, 2]} pt={[0, 4]} px={4} width={[1, 3 / 8]}>
					<MetaLink>{loggedIn && <Rates />}</MetaLink>
				</Box>

				<Box order={[2, 3]} pt={4} px={4} width={[2 / 3, 4 / 8]}>
					<MetaLink>
						{loggedIn && <Link href="/account">Account</Link>}

						{SHOW_APPLY && <Link href="/apply">Apply</Link>}
						{SHOW_CAMPAIGNS && <Link href="/campaigns">Campaigns</Link>}

						{loggedIn && <Link href="/doc/help">Helpdesk</Link>}

						{!loggedIn && <Link href="/contact">Contact</Link>}

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
