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

import { useAppContext } from 'src/context/AppContext'
import { useSubstrate } from 'src/context/SubstrateContext'

// ui

import styled from 'styled-components'
import { Dimmer, Loader, Sticky, Message, Grid } from 'semantic-ui-react'
import { Flex, Box } from 'rebass/styled-components'
import { Navigation, Link, Divider } from 'components'
import { RatesWrapper, Container, MetaLink, User, Task, Right } from './styles'
import logo from 'public/z-ctrl-45-col.svg'
import img from 'public/stripes-s.png'

//

import AccountSelector from 'src/components/substrate/AccountSelector'

const loader = (text) => (
	<Dimmer active>
		<Loader size="small">{text}</Loader>
	</Dimmer>
)

const message = (err) => (
	<div>
		<Message negative compact floating header="Error connecting to Network" content={`${JSON.stringify(err)}`} />
	</div>
)

const ConnectBtn = styled.div`
	padding: 10px;
	background: #ff0000;
	color: #ffffff;
`

const Header = () => {
	// app state

	const { state } = useAppContext()
	const { user } = state
	const { SHOW_CONTACT, SHOW_CAMPAIGNS, SHOW_APPLY, SHOW_FX, SHOW_SIGNIN } = state.features.data

	// connectivity & user

	const { CONNECTED } = state.net
	const hasUser = user.state === 'SIGNEDIN' ? true : false
	if (hasUser) log.info(user)
	else log.info('no user')

	// const [ showAccountSelector, toggleAccountSelector ] = useState( false )
	// const [ accountAddress, setAccountAddress ] = useState( null )

	// const { api, apiState, keyring, keyringState, apiError } = useSubstrate()

	// const accountPair = accountAddress && keyringState === 'READY' && keyring.getPair(accountAddress)

	// useEffect(() => {

	// 	if (apiState !== 'READY' || !api) return
	// 	if (apiState === 'ERROR') return message('Error')
	// 	else if (apiState !== 'READY') return loader('Connecting to Network')
	// 	if (keyringState !== 'READY')
	// 	return loader("Loading accounts (please review any extension's authorization)")

	// }, [])

	const router = useRouter()
	// const showContactView = router.pathname == '/contact' ? false : true

	return (
		<Container>
			{/*<Divider sm />*/}

			<Flex flexDirection="row" flexWrap="wrap">
				{/* LOGO */}

				<Box order={[1]} pt={4} px={4} py={3} width={[1, 1 / 4]}>
					<Link href="/">
						<img src={logo} height="50px" alt="GameDAO" />
					</Link>
				</Box>

				<Box order={[2, 3]} pt={4} px={4} width={[1, 3 / 4]}>
					<MetaLink>
						{hasUser && <Link href="/account">Account</Link>}

						{SHOW_APPLY && <Link href="/apply">Apply</Link>}
						{SHOW_CAMPAIGNS && <Link href="/campaigns">Campaigns</Link>}

						{hasUser && <Link href="/doc/help">Helpdesk</Link>}
						{!hasUser && SHOW_CONTACT && <Link href="/contact">Contact</Link>}

						{!hasUser && <ConnectBtn>Sign In</ConnectBtn>}
						{!hasUser && <Link href="/account/signup">Sign Up</Link>}
						{hasUser && <Link href="/account/signout">Sign&nbsp;Out</Link>}

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
