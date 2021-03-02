import React, { useState, useEffect } from 'react'
import { useSubstrate } from 'src/context/SubstrateContext'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Menu, Button, Dropdown, Container, Icon, Image, Label } from 'semantic-ui-react'

const Component = (props) => {
	const { api, keyring } = useSubstrate()
	const { setAccountAddress } = props
	const [accountSelected, setAccountSelected] = useState('')

	// Get the list of accounts we possess the private key for
	const keyringOptions = keyring && keyring.getPairs().map((account) => ({
		key: account.address,
		value: account.address,
		// text: account.meta.name.toUpperCase(),
		icon: 'user',
	}))

	const initialAddress = keyringOptions && keyringOptions.length > 0 ? keyringOptions[0].value : ''

	// Set the initial address
	useEffect(() => {
		setAccountSelected(initialAddress)
		setAccountAddress(initialAddress)
	}, [setAccountAddress, initialAddress])

	const onChange = (address) => {
		// Update state with new account address
		setAccountAddress(address)
		setAccountSelected(address)
	}

	return (
		<Container>
			{!accountSelected ? (
				<span>
					Add your account with the{' '}
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/polkadot-js/extension">
						Polkadot JS Extension
					</a>
				</span>
			) : null}
			{/*
			<CopyToClipboard text={accountSelected}>
				<Button basic circular size="large" icon="user" color={accountSelected ? 'green' : 'red'} />
			</CopyToClipboard>
*/}
			<Dropdown
				icon="account"
				search
				selection
				clearable
				placeholder="Select an account"
				options={keyringOptions}
				onChange={(_, dropdown) => {
					onChange(dropdown.value)
				}}
				value={accountSelected}
			/>
			{api && api.query.balances && api.query.balances.freeBalance ? <BalanceAnnotation accountSelected={accountSelected} /> : null}
		</Container>
	)
}

const BalanceAnnotation = (props) => {
	const { accountSelected } = props
	const { api } = useSubstrate()
	const [accountBalance, setAccountBalance] = useState(0)

	// When account address changes, update subscriptions
	useEffect(() => {
		let unsubscribe

		// If the user has selected an address, create a new subscription
		accountSelected &&
			api.query.system
				.account(accountSelected, (balance) => {
					setAccountBalance(balance.data.free.toHuman())
				})
				.then((unsub) => {
					unsubscribe = unsub
				})
				.catch(console.error)

		return () => unsubscribe && unsubscribe()
	}, [accountSelected, api])

	return accountSelected ? (
		<Label pointing="left">
			<Icon name="money bill alternate" color={accountBalance > 0 ? 'green' : 'red'} />
			{accountBalance}
		</Label>
	) : null
}

const AccountSelector = (props) => {
	const { api, keyring } = useSubstrate()
	const [ready, setReady] = useState(false)

	useEffect(() => {
		if (keyring && keyring.getPairs && api.query) setReady(true)
	}, [])

	return ready ? <Component {...props} /> : null
}

export default AccountSelector
