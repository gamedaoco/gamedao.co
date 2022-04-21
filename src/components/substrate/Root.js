import React, { useEffect, useState, createRef, forwardRef } from 'react'

import { useSubstrate } from 'src/context/SubstrateContext'
import { SubstrateConsole } from 'src/lib/substrate'

import { Dimmer, Loader, Sticky, Message, Grid } from 'semantic-ui-react'
import { Container, Button } from 'src/components'

import Balances from './Balances'
import BlockNumber from './BlockNumber'

import Events from './Events'
// import Interactor from './Interactor'
import Metadata from './Metadata'
import NodeInfo from './NodeInfo'
// import Transfer from './Transfer'
// import Upgrade from './Upgrade'

const Wrapper = (props) => <div>{props.children}</div>

export const Dashboard = (props) => {
	const [accountPair, setAccountPair] = useState()
	const [accountAddress, setAccountAddress] = useState()
	const { apiState, keyring, keyringState, apiError } = useSubstrate()

	// const accountPair =
	// 	accountAddress !== undefined &&
	// 	keyringState === 'READY' &&
	// 	keyring &&
	// 	keyring.getPair(accountAddress);

	// useEffect(() => {
	// 	console.log('accountPair')
	// 	if ( accountAddress && keyringState === 'READY' && keyring ) {
	// 		setAccountPair( keyring.getPair(accountAddress) )
	// 		console.log('!app accountAddress', accountAddress)
	// 		console.log('!app accountPair', accountPair)
	// 	}
	// },[ accountAddress ])

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

	if (apiState === 'ERROR') return message('Error')
	else if (apiState !== 'READY') return loader('Connecting to Substrate')

	if (keyringState !== 'READY') {
		return loader("Loading accounts (please review any extension's authorization)")
	}

	// const contextRef = createRef<typeof Wrapper>()
	// const contextRef = forwardRef<typeof Wrapper>()
	// 	<Wrapper ref={contextRef}>

	return (
		<Container>
			<Grid stackable columns="equal">
				<Grid.Row stretched>
					<NodeInfo />
					<Metadata />
					<BlockNumber />
					<BlockNumber finalized />
				</Grid.Row>

				<Grid.Row stretched>
					<Balances />
				</Grid.Row>

				{/*
					<Grid.Row>
						<Transfer accountPair={accountPair} />
						<Upgrade accountPair={accountPair} />
					</Grid.Row>
*/}
				<Grid.Row>
					{/*<Interactor accountPair={accountPair} />*/}
					<Events />
				</Grid.Row>
			</Grid>
		</Container>
	)
	// {/*<SubstrateConsole />*/}
	// </Wrapper>
}

export default Dashboard
