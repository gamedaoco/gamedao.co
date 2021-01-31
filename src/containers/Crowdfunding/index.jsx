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

import React, { useEffect, useState } from 'react'
import { Container, Menu, Label, Segment, Tab, Form, Input, Grid, Card, Statistic, Divider } from 'semantic-ui-react'
import { Dimmer, Loader, Sticky, Message } from 'semantic-ui-react'

import { useSubstrate } from 'src/context/SubstrateContext'
// import { TxButton } from '../substrate-lib/components'

import Stats from './components/Stats'
import CampaignsAll from './components/CampaignsAll'
import CampaignsContributed from './components/CampaignsAll'
import CampaignsOwned from './components/CampaignsAll'
import Create from './components/Create'

const Crowdfunding = props => {

	const [ accountPair, setAccountPair ] = useState()
	const [ accountAddress, setAccountAddress ] = useState()
	const { api, apiState, apiError, keyring, keyringState } = useSubstrate()

	const [ data, setData ] = useState({
		all: 0,
		owned: 0,
		contributed: 0,
		campaigns: {},
	})

	const loader = (text) => (
		<Dimmer active>
			<Loader size="small">{text}</Loader>
		</Dimmer>
	)

	const message = (err) => (
		<div>
			<Message negative compact floating header="Error Connecting to Substrate" content={`${JSON.stringify(err)}`} />
		</div>
	)

	useEffect(() => {

		if ( apiState !== keyringState !== 'READY' ) return

		const getStats = async () => {

			console.log('getStats')

			try {

				const [
					all,
					owned,
					contributed,
					// campaigns
				] = await Promise.all([
					api.query.crowdfunding.allCampaignsCount(),
					api.query.crowdfunding.ownedCampaignsCount([accountAddress,0]),
					api.query.crowdfunding.contributedCampaignsCount([accountAddress,0]),
					// api.query.crowdfunding.campaigns([]),
					// api.query.crowdfunding.allCampaignsArray(),
				])

				console.log(
					contributed.toString(),
					owned.toString(),
					)

				const _data = {
					...data,
					all:all.toNumber(),
					owned:owned.toNumber(),
					contributed:contributed.toNumber(),
					// campaigns: campaigns.toJSON()
				}
				setData(_data)

			} catch ( err ) {
				console.error( err )
			}

			console.log('data', data)

		}
		getStats()


	}, [accountAddress, apiState])

	//
	//	loader / error
	//

	if (apiState === 'ERROR') return message('Error')
	else if (apiState !== 'READY') return loader('Connecting to Substrate')

	if (keyringState !== 'READY') {
		return loader("Loading accounts (please review any extension's authorization)")
	}



		// const getCampaigns = async () => {

		// 	if ( accountAddress === null || !api ) return

		// 	try {

		// 		const allCampaigns = await Promise.all([
		// 			api.query.crowdfunding.campaigns([accountAddress,1])
		// 		])

		// 		console.log( allCampaigns )

		// 		const _data = {
		// 			...data,
		// 			campaigns: allCampaigns
		// 		}
		// 		setData(_data)

		// 	} catch ( err ) {
		// 		console.error( err )
		// 	}

		// 	console.log('data', data)

		// }
		// getCampaigns()




// 	const panes = [
// 		{
// 			menuItem: (
// 				<Menu.Item key='campaigns'>
// 					All Campaigns<Label>{data.all}</Label>
// 				</Menu.Item>
// 			),
// 			pane: (
// 				<Tab.Pane key="campaigns">
// {/*					<CampaignsAll />
// */}				</Tab.Pane>
// 			),
// 		},
// 		{
// 			menuItem: (
// 				<Menu.Item key='contributions'>
// 					My Contributions<Label>{data.contributed}</Label>
// 				</Menu.Item>
// 			),
// 			pane: (
// 				<Tab.Pane key="contributions">
// {/*					<CampaignsContributed />
// */}				</Tab.Pane>
// 			),
// 		},
// 		{
// 			menuItem: (
// 				<Menu.Item key=''>
// 					My Campaigns<Label>{data.owned}</Label>
// 				</Menu.Item>
// 			),
// 			pane: (
// 				<Tab.Pane key="requests">
// {/*					<CampaignsOwned />*/}
// 				</Tab.Pane>
// 			),
// 		},
// 		{	menuItem: 'Create Campaign',
// 			pane: (
// 				<Tab.Pane key="create">
// 					<Create />
// 				</Tab.Pane>
// 			),
// 		},
// 	]

	return (
		<Container>
			{/*<Stats { ...props }/>*/}
			<h2>
				Connected with {accountAddress}<br/>
				{/*Free Balance {balances && balances[accountAddress]}*/}
			</h2>
			{/*<Tab panes={ panes }/>*/}
		</Container>
	)

}

export default Crowdfunding

//
//
//
