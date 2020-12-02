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

import React, { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// logging

import { Logger } from 'src/lib/log'
const log = Logger('$HEADER')

// context

import { AppContext } from 'src/context/AppContext'
import { useSubstrate } from 'src/context/SubstrateContext'
import { useQuery } from '@apollo/react-hooks'
import { GET_FX } from 'src/queries'

// ui

import styled from 'styled-components'
import { Dimmer, Loader, Sticky, Message, Grid } from 'semantic-ui-react'
import { Flex, Box } from 'rebass/styled-components'
import { Navigation, Link, Divider } from 'components'
import { RatesWrapper, Container, MetaLink, User, Task, Right } from './styles'
import logo from 'public/z-ctrl-45-col.svg'
import img from 'public/stripes-s.png'

// import AccountSelector from 'src/components/substrate/AccountSelector'

// const Rates = () => {
// 	const { loading, error, data } = useQuery(GET_FX)

// 	if (loading) return <RatesWrapper>Loading...</RatesWrapper>
// 	if (error) return null // <RatesWrapper>Error: ${error.message}</RatesWrapper>

// 	const fx = data.fx
// 	console.log(data)

// 	return (
// 		<RatesWrapper>
// 			{fx.map((rate) => (
// 				<Link key={rate.id} href="/account/wallet">
// 					{rate.name}&nbsp;{rate.askQuote || 0}
// 				</Link>
// 			))}
// {/*
// 			{<Link href="/account/wallet#xp">XP&nbsp;{ token.XP || 0 }</Link>}
// 			{<Link href="/account/wallet#rep">REP&nbsp;{ token.REP || 0 }</Link>}
// 			{<Link href="/account/wallet#play">PLAY&nbsp;{ token.PLAY || 0 }</Link>}
// */}
// 		</RatesWrapper>
// 	)
// }

// const loader = (text) => (
// 	<Dimmer active>
// 		<Loader size="small">{text}</Loader>
// 	</Dimmer>
// )

// const message = (err) => (
// 	<div>
// 		<Message negative compact floating header="Error connecting to Network" content={`${JSON.stringify(err)}`} />
// 	</div>
// )

type HeaderProps = {
	// email?: string
	message?: string
	loggedIn?: boolean
	showContactView?: boolean
}

const Header: React.FC<HeaderProps> = ({ loggedIn }) => {
	const { state } = useContext(AppContext)
	const { SHOW_CAMPAIGNS, SHOW_APPLY, SHOW_FX, SHOW_SIGNIN } = state.features.data

	// const [showAccountSelector, setAccountSelector] = useState(false)
	// const [accountAddress, setAccountAddress] = useState(null)

	// const { apiState, keyring, keyringState, apiError } = useSubstrate()
	// const accountPair = accountAddress && keyringState === 'READY' && keyring.getPair(accountAddress)

	// useEffect(() => {
	// 		if (apiState === 'ERROR') return message('Error')
	// 		else if (apiState !== 'READY') return loader('Connecting to Network')
	// 		if (keyringState !== 'READY') {
	// 			return loader("Loading accounts (please review any extension's authorization)")
	// 		}
	// }, [])

	// const token = {
	// 	XP: 1337,
	// 	REP: 49152,
	// 	PLAY: 13.37,
	// 	ZERO: 1000,
	// 	GAME: 1000,
	// 	// exchange rates
	// 	// stable rate should be 1 EUR == 1 PLAY
	// 	EUR_PLAY: 1,
	// 	// current exchange rate for ETH to PLAY via Exchange
	// 	DAI_PLAY: 0.92,
	// 	// current exchange rate for ETH to EUR via Exchange
	// 	ETH_EUR: 321.02,
	// }

	const router = useRouter()
	// const showContactView = router.pathname == '/contact' ? false : true

	return (
		<Container>
			{/*<Divider sm />*/}

			<Flex flexDirection="row" flexWrap="wrap">
				{/* TOP */}

				<Box order={[1]} pt={4} px={4} py={3} width={[1, 1 / 4]}>
					<Link href="/">
						<img src={logo} height="50px" alt="GameDAO" />
					</Link>
				</Box>

				<Box order={[3, 2]} pt={[0, 4]} px={4} width={[1, 1 / 4]}>
					<MetaLink>{/* {SHOW_FX && <Rates />} */}</MetaLink>
				</Box>

				<Box order={[2, 3]} pt={4} px={4} width={[1, 1 / 4]}>
					<MetaLink>
						{loggedIn && <Link href="/account">Account</Link>}

						{SHOW_APPLY && <Link href="/apply">Apply</Link>}
						{SHOW_CAMPAIGNS && <Link href="/campaigns">Campaigns</Link>}

						{loggedIn && <Link href="/doc/help">Helpdesk</Link>}
						{!loggedIn && <Link href="/contact">Contact</Link>}

						{!loggedIn && <Link href="/account/signup">Sign Up</Link>}
						{loggedIn && <Link href="/account/signout">Sign&nbsp;Out</Link>}

						{/*<Link onClick={setAccountSelector(true)}>Sign In</Link>*/}
						{/*{showAccountSelector && <AccountSelector setAccountAddress={setAccountAddress} />}*/}
					</MetaLink>
				</Box>

				{/* MESSAGE */}

				{/*
				<Box order={[4, 3]} px={4} width={[1, 1 / 2]}>
					{!loggedIn && (
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
