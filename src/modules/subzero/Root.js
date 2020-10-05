import React, { useState, createRef } from 'react'
import { Dimmer, Loader, Sticky, Message } from 'semantic-ui-react'

import { Container, Row, Col, Button } from '../../lib/atomiclit'

import { SubstrateContextProvider, useSubstrate } from './substrate-lib'
import { DeveloperConsole } from './substrate-lib/components'

import AccountSelector from './AccountSelector'
import Balances from './Balances'
import BlockNumber from './BlockNumber'
import Events from './Events'
import Interactor from './Interactor'
import Metadata from './Metadata'
import NodeInfo from './NodeInfo'
import TemplateModule from './TemplateModule'
import Transfer from './Transfer'
import Upgrade from './Upgrade'

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
		<Col>
			<Message negative compact floating header="Error Connecting to Substrate" content={`${JSON.stringify(err)}`} />
		</Col>
	)

	if (apiState === 'ERROR') return message(apiError)
	else if (apiState !== 'READY') return loader('Connecting to Substrate')

	if (keyringState !== 'READY') {
		return loader("Loading accounts (please review any extension's authorization)")
	}

	const contextRef = createRef()

	return (
		<div ref={contextRef}>
			<Sticky context={contextRef}>
				<AccountSelector setAccountAddress={setAccountAddress} />
			</Sticky>
			<Container>
				<Row>
					<Col w="12">
						<Button>TEST</Button>
					</Col>
					<Col>
						<NodeInfo />
						<Metadata />
						<BlockNumber />
						<BlockNumber finalized />
					</Col>
					<Col>
						<Balances />
					</Col>
					<Col>
						<Transfer accountPair={accountPair} />
						<Upgrade accountPair={accountPair} />
					</Col>
					<Col>
						<Interactor accountPair={accountPair} />
						<Events />
					</Col>
					<Col>
						<TemplateModule accountPair={accountPair} />
					</Col>
				</Row>
			</Container>
			<DeveloperConsole />
		</div>
	)
}

export const Root = function Root() {
	return (
		<SubstrateContextProvider>
			<Main />
		</SubstrateContextProvider>
	)
}

export default Root
