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
import NextLink from 'next/link'

// logging

import { Logger } from 'src/lib/log'
const log = Logger('$HEADER')

// context

import { useAppContext } from 'src/context/AppContext'
import { useSubstrate } from 'src/context/SubstrateContext'

// ui

import styled from 'styled-components'
import { Flex, Box, Button } from 'rebass/styled-components'
import { Label, Select } from '@rebass/forms'

import { Dimmer, Sticky, Grid } from 'semantic-ui-react'
import { Navigation, Link, Loader, Message } from 'components'
import { RatesWrapper, Container, MetaLink, User, Task, Right, SmallType } from './styles'
import logo from 'public/gamedao_tangram.svg'
import img from 'public/stripes-s.png'

import { TiPower } from 'react-icons/ti'

//

const isServer = () => typeof window === 'undefined'

const Connect = () => {
	if (isServer()) return null

	const { state, dispatch } = useAppContext()
	const { allowConnect } = state.net

	const onConnect = (e) => dispatch({ type: 'CONNECT' })
	const onDisconnect = (e) => dispatch({ type: 'DISCONNECT' })

	if (!allowConnect)
		return (
			<Button variant="outline" onClick={onConnect}>
				Connect
			</Button>
		)
	else
		return (
			<Button variant="outline" onClick={onDisconnect}>
				{' '}
				<TiPower size="1em" />
			</Button>
		)
}

const Accounts = () => {
	const { state, dispatch } = useAppContext()
	const { allowConnect } = state.net
	const { account } = state.net || ''

	const { api, apiState, keyring } = useSubstrate()
	const [accountPair, setAccountPair] = useState()
	const [accountAddress, setAccountAddress] = useState('')

	//	ui

	const [accountSelected, setAccountSelected] = useState('')
	const [balances, setBalances] = useState({ zero: '0', play: '0', game: '0', zeur: '0' })

	//

	const keyringOptions =
		keyring &&
		keyring.getPairs().map((account) => ({
			key: account.address,
			value: account.address,
			// text: account.meta.name.toUpperCase(),
			icon: 'user',
		}))

	const initialAddress = keyringOptions && keyringOptions.length > 0 ? keyringOptions[0].value : ''

	useEffect(() => {
		if (!allowConnect) return
		setAccountSelected(initialAddress)
		setAccountAddress(initialAddress)
		dispatch({ type: 'SET_ACCOUNT', payload: initialAddress })
	}, [setAccountAddress, initialAddress, dispatch])

	useEffect(() => {
		if (!allowConnect) return
		if (apiState !== 'READY' || !api) return
		let unsubscribeAll

		api.query.system
			.account(account, ({ nonce, data: balance }) => {
				setBalances({ ...balances, zero: balance.free.toString() })
				console.log(`free balance is ${balance.free}`, `with ${balance.reserved} reserved`, `and a nonce of ${nonce}`)
			})
			.then((unsub) => {
				unsubscribeAll = unsub
			})
			.catch(console.error)

		return () => unsubscribeAll && unsubscribeAll()
	}, [apiState, accountSelected])

	useEffect(() => {
		if (!allowConnect) return
		if (apiState !== 'READY' || !account || !api) return

		const query = async () => {
			let unsubscribe
			const context = api.query.assets.account
			api.queryMulti(
				[
					[context, [Number(0), account.toString()]],
					[context, [Number(1), account.toString()]],
					[context, [Number(2), account.toString()]],
				],
				([_play, _game, _zeur]) => {
					setBalances({
						...balances,
						play: JSON.parse(_play.toString()).balance.toString(),
						game: JSON.parse(_game.toString()).balance.toString(),
						zeur: JSON.parse(_zeur.toString()).balance.toString(),
					})
				}
			)
				.then((unsub) => {
					unsubscribe = unsub
				})
				.catch(console.error)

			return () => unsubscribe && unsubscribe()
		}
		query()
	}, [account, apiState, api])

	if (!api) return null
	if (!allowConnect) return null

	const handleAccountClick = () => {
		console.log('account', account, balances)
	}

	return (
		<Link>
			<SmallType onClick={handleAccountClick}>{`${balances.zero} ZERO`}</SmallType>
			<SmallType onClick={handleAccountClick}>{`${balances.game} GAME`}</SmallType>
		</Link>
	)
}

const Network = () => {
	const { api, apiState } = useSubstrate()
	const [version, setVersion] = useState('')
	const [blockNumber, setBlockNumber] = useState(0)
	const [blockNumberTimer, setBlockNumberTimer] = useState(0)
	const [bestNumber, setBestNumber] = useState()

	useEffect(() => {
		if (apiState !== 'READY' || !api) return
		const versionString = `${api.runtimeVersion.implName.toString()} ${api.runtimeVersion.specVersion.toNumber()}.${api.runtimeVersion.implVersion.toNumber()}`
		setVersion(versionString)
	}, [apiState])

	useEffect(() => {
		if (apiState !== 'READY' || !api) return
		let unsubscribeAll

		api.derive.chain
			.bestNumberFinalized((number) => {
				setBlockNumber(number.toNumber())
				setBlockNumberTimer(0)
			})
			.then((unsub) => {
				unsubscribeAll = unsub
			})
			.catch(console.error)

		return () => unsubscribeAll && unsubscribeAll()
	}, [apiState])

	const timer = () => {
		setBlockNumberTimer((time) => time + 1)
	}

	useEffect(() => {
		const id = setInterval(timer, 1000)
		return () => clearInterval(id)
	}, [])

	if (!api || blockNumber === 0) return null

	return (
		<Link>
			<SmallType>{version && `Network ${version}`}</SmallType>
			<SmallType>{blockNumber && `Blocktime ${blockNumber} / ${blockNumberTimer}s`}</SmallType>
		</Link>
	)
}

const Sense = () => {
	const {
		state: {
			net: { allowConnect, account },
		},
	} = useAppContext()
	const { api, apiState } = useSubstrate()
	const [sense, setSense] = useState({
		xp: 0,
		rep: 0,
		trust: 0,
	})

	useEffect(() => {
		if (!allowConnect) return
		if (apiState !== 'READY' || !account || !api) return

		const query = async () => {
			let unsubscribe
			const context = api.query.zeroSense

			api.queryMulti(
				[
					[context.senseXP, account.toString()],
					[context.senseREP, account.toString()],
					[context.senseTrust, account.toString()],
				],
				([_xp, _rep, _trust]) => {
					setSense({
						xp: JSON.parse(_xp.toString()).value,
						rep: JSON.parse(_rep.toString()).value,
						trust: JSON.parse(_trust.toString()).value,
					})
				}
			)
				.then((unsub) => {
					unsubscribe = unsub
				})
				.catch(console.error)

			return () => unsubscribe && unsubscribe()
		}
		query()
	}, [account, apiState, api, sense, setSense])

	if (!allowConnect) return null
	if (!api) return null

	return (
		<Link>
			<SmallType>{`XP ${sense.xp} / REP ${sense.rep}`}</SmallType>
			<SmallType>{`TRUST ${sense.trust}`}</SmallType>
		</Link>
	)
}

//

const Header = (props) => {
	const router = useRouter()
	const { state, dispatch } = useAppContext()
	const {
		user,
		features: {
			data: { SHOW_CONTACT, SHOW_CAMPAIGNS, SHOW_APPLY, SHOW_FX, SHOW_SIGNIN },
		},
	} = state

	// const hasUser = user.state === 'SIGNEDIN' ? true : false
	// const showContactView = router.pathname == '/contact' ? false : true

	return (
		<Container>
			<Flex flexDirection="row" flexWrap="wrap">
				<Box order={[1]} px={4} py={4} width={[1, 1 / 6]}>
					<Link href="/">
						<img src={logo} height="40px" alt="GameDAO" />
					</Link>
				</Box>

				<Box order={[2]} pt={4} width={[1, 2 / 6]}>
					<Box pt={2} pr={4}>
						{SHOW_APPLY && <Link href="/apply">Apply</Link>}
					</Box>
					<Box pt={2} pr={4}>
						{SHOW_CAMPAIGNS && <Link href="/campaigns">Campaigns</Link>}
					</Box>
					<Box pt={2} pr={4}>
						{SHOW_CONTACT && <Link href="/contact">Contact</Link>}
					</Box>
				</Box>

				<Box order={[2]} py={4} px={4} width={[1, 3 / 6]}>
					<Flex flexDirection="row" flexWrap="wrap" justifyContent="right">
						<Box pt={2} pr={4}>
							<Network />
						</Box>
						<Box pt={2} pr={4}>
							<Sense />
						</Box>
						<Box pt={2} pr={4}>
							<Accounts />
						</Box>
						<Box pr={4}>
							<Connect />
						</Box>
						{/*
						 */}
					</Flex>
				</Box>

				{/*
				{hasUser && <Link href="/doc/help">Helpdesk</Link>}
				{!hasUser && <Link href="/account/signup">Sign In / Connect</Link>}
				{hasUser && <Link href="/account/signout">Sign&nbsp;Out</Link>}

				<Box order={[2]} pt={4} px={4} width={[1, 3 / 4]}>
					<AccountSelector setAccountAddress={setAccountAddress} />
				<Box>
				<Box order={[4, 3]} px={4} width={[1, 1 / 2]}>
					{!hasUser && (
						<User>
							Welcome, <Link href="/account">User</Link>.
						</User>
					)}
				</Box>
				<Box order={[3, 4]} px={4} width={[1, 1 / 2]}>
					{hasUser && (
						<Task>
							<Right>{'Phase 1 / 3'}</Right>
						</Task>
					)}
				</Box>
				<Box>
					<Navigation />
				</Box>
				*/}
			</Flex>
		</Container>
	)
}

export default Header
