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

import { useSubstrate } from 'src/context/SubstrateContext'
// import { TxButton } from '../../substrate-lib/components'
import React, { useEffect, useState } from 'react'
import { Container, Segment, Tab, Form, Input, Grid, Card, Statistic, Divider } from 'semantic-ui-react'

//
//
//

export const Create = props => {

	const { accountPair, accountAddress } = props
	const { api } = useSubstrate()
	const [ status, setStatus ] = useState( null )

	const [eventFeed, setEventFeed] = useState([]);

	const FILTERED_EVENTS = [
		'system:ExtrinsicSuccess:: (phase={"ApplyExtrinsic":0})',
		'system:ExtrinsicSuccess:: (phase={"ApplyExtrinsic":1})'
	]
	const WHITELIST_EVENTS = [
		'crowdfunding:CampaignCreated::',
	]

	useEffect(() => {

		let unsub = null;

		const allEvents = async () => {

			unsub = await api.query.system.events( events => {

				// loop through the Vec<EventRecord>
				events.forEach(record => {

					// extract the phase, event and the event types
					const { event, phase } = record;
					const types = event.typeDef;

					// show what we are busy with
					const eventName = `${event.section}:${event.method }:: (phase=${phase.toString()})`;

					// console.log( 'whitelisted event', eventName )
					// if (!WHITELIST_EVENTS.includes(eventName)) return;

					// loop through each of the parameters, displaying the type and data
					const params = event.data.map(
						(data, index) => `${types[index].type}: ${data.toString()}`
					);

					setEventFeed(e => [{
						icon: 'bell',
						summary: `${eventName}-${e.length}`,
						extraText: event.meta.documentation.join(', ').toString(),
						content: params.join(', ')
					}, ...e]);

				});

			});
		};

		allEvents();
		return () => unsub && unsub();

	}, [api.query.system]);

	const { feedMaxHeight = 250 } = props;

	// form state

	const [ _form, _setForm ] = useState({
		campaign_name: null,
		applicant_name: null,
		applicant_body: null,
		country: null,
		usage: null,
		protocol: null,
		deposit: 100,
		target: 1000,
		duration: null,
		description: null,
		accept: null,
	})

	const { campaign_name, deposit, target, duration } = _form

	const onChange = ( _, data ) => _setForm( prev => {
		return ({ ...prev, [ data.state ]: data.value })
	})

	// dropdown content

	const legal_entities = [
		{ key: '0', text: 'DAO / DAC / LAO', value: 'dao' },
		{ key: '1', text: 'Cooperative / LVC', value: 'coop' },
		{ key: '2', text: 'AG / SA', value: 'ag' },
		{ key: '3', text: 'GmbH / SARL / LLC', value: 'gmbh' },
		{ key: '4', text: 'Individual', value: 'individual' },
		{ key: '5', text: 'other', value: 'other' },
	]

	const application_entities = [
		{ key: '0', text: 'Game', value: 'game' },
		{ key: '1', text: 'Content', value: 'content' },
		{ key: '2', text: 'Team', value: 'team' },
		{ key: '3', text: 'Other', value: 'other' },
	]

	const protocol_types = [
		{ key: '0', text: 'Grant', value: 'grant' },
		{ key: '1', text: 'Prepaid', value: 'prepaid' },
		{ key: '2', text: 'Loan', value: 'loan' },
		{ key: '3', text: 'Shares', value: 'shares' },
	]

	const countries = [
		{ key: '0', text: 'Europe', value: 'eu' },
		{ key: '1', text: 'Germany', value: 'de' },
		{ key: '2', text: 'Switzerland', value: 'ch' },
		{ key: '3', text: 'Liechtenstein', value: 'li' },
		{ key: '4', text: 'Austria', value: 'at' },
	]

	// listen to account changes
	// useEffect(() => {
	// 	console.log('> accountAddress', accountAddress)
	// 	console.log('> accountPair', accountPair)
	// },[ accountAddress, accountPair ])

	return (
		<>
			<h1>Create Campaign</h1>

			<Form>

				{/* campaign name to be listed as */}

				<Form.Input fluid label='Campaign name' placeholder='Campaign name' onChange={onChange} state={_form.campaign_name} />

				{/* legal body applying for the funding */}

				<Form.Group widths='equal'>
					<Form.Input fluid label='Applicant Name' placeholder='Applicant Name' onChange={onChange} state={_form.applicant_name} />
					<Form.Select
						fluid
						label='Applicant Type'
						options={legal_entities}
						placeholder='Applicant Type'
						onChange={onChange}
						state={_form.applicant_body}
						/>
					<Form.Select
						fluid
						label='Country'
						selected={0}
						options={countries}
						placeholder='Country'
						onChange={onChange}
						state={_form.country}
						/>
				</Form.Group>

				{/* usage of funding and protocol to initiate after successfully raising */}

				<Form.Group widths='equal'>
					<Form.Select
						fluid
						label='Usage'
						options={application_entities}
						placeholder='Usage'
						onChange={onChange}
						state={_form.usage}
						/>
					<Form.Select
						fluid
						label='Protocol'
						options={protocol_types}
						placeholder='Protocol'
						state={_form.protocol}
						/>
				</Form.Group>

				{/*  */}

				<Form.Group widths='equal'>
					<Form.Input fluid label='Deposit (PLAY)' placeholder='Deposit' onChange={onChange} state={_form.deposit} />
					<Form.Input fluid label='Funding Target (PLAY)' placeholder='Cap' onChange={onChange} state={_form.target} />
					<Form.Input fluid label='Campaign Duration (blocks)' placeholder='blocks' onChange={onChange} state={_form.duration} />
				</Form.Group>

				<Form.TextArea label='Campaign Description' placeholder='Tell us more about your idea...' onChange={onChange} state={_form.description}/>

				<Form.Checkbox label='I agree to the Terms and Conditions' onChange={onChange} state={_form.accept}/>

				<Container textAlign='right'>

					<Form.Button>Submit</Form.Button>

					{

						<TxButton
							accountPair={ accountPair }
							label='Create'
							type='SIGNED-TX'
							setStatus={ setStatus }
							attrs={{
								palletRpc: 'crowdfunding',
								callable: 'create',
								inputParams: [
									"another hello",
									10000,
									10,
									400000,
									// _form.campaign_name,
									// _form.target,
									// _form.deposit,
									// _form.duration,
								],
								paramFields: [true,true,true,true]
							}}
							/>
					}

				</Container>

			</Form>

		</>
	)

}

export default Create

//
//
//
