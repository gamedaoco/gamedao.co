import React, { useState, createRef } from 'react'

import { useSubstrate } from 'src/context/SubstrateContext'
import { SubstrateConsole } from 'src/lib/substrate'

import { Dimmer, Loader, Sticky, Message, Grid } from 'semantic-ui-react'
import { Container, Button } from 'src/components'

import Balances from './Balances'
import BlockNumber from './BlockNumber'

// import Events from './Events'
// import Interactor from './Interactor'
// import Metadata from './Metadata'
// import NodeInfo from './NodeInfo'
// import Transfer from './Transfer'
// import Upgrade from './Upgrade'

const Wrapper = (props) => <div>{props.children}</div>

function Main() {
	const [accountAddress, setAccountAddress] = useState(null)
	const { apiState, keyring, keyringState, apiError } = useSubstrate()
	const accountPair = accountAddress && keyringState === 'READY' && keyring.getPair(accountAddress)

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

	const contextRef = createRef<typeof Wrapper>()

	return (
		<Wrapper ref={contextRef}>
			<Container>
				<Grid stackable columns="equal">
					<Grid.Row stretched>
						{/*
						<NodeInfo />
						<Metadata />
*/}
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

					<Grid.Row>
						<Interactor accountPair={accountPair} />
						<Events />
					</Grid.Row>
*/}
				</Grid>
			</Container>
			<SubstrateConsole />
		</Wrapper>
	)
}
// <SubstrateContextProvider>
// </SubstrateContextProvider>

export const Root = function Root() {
	return <Main />
}

export default Root
