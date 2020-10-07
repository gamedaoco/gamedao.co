import { useContext, useEffect, useCallback } from 'react'

import { ApiPromise, WsProvider } from '@polkadot/api'
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp'
import keyring from '@polkadot/ui-keyring'

import config from '../../config'
import { SubstrateContext, ContextInterface, StateProps } from './SubstrateContext'

export const useSubstrate = () => {

	const { state, dispatch } = useContext<ContextInterface>(SubstrateContext)

	console.log(state)

	// `useCallback` so that we return a memoized function
	// and not created everytime, and thus re-render.

	const { api, socket, jsonrpc, types } = state

	const connect = useCallback(async () => {

		if (api) return

		dispatch({ type: 'CONNECT_INIT' })

		const provider = new WsProvider(socket)
		const _api = new ApiPromise({ provider, types, rpc: jsonrpc })

		// Set listeners for disconnection and reconnection event.
		_api.on('connected', () => {
			dispatch({ type: 'CONNECT', payload: _api })
			// `ready` event is not emitted upon reconnection and is checked explicitly here.
			_api.isReady.then((_api) => dispatch({ type: 'CONNECT_SUCCESS' }))
		})
		_api.on('ready', () => dispatch({ type: 'CONNECT_SUCCESS' }))
		_api.on('error', (err) => dispatch({ type: 'CONNECT_ERROR', payload: err }))

	}, [api, socket, types, jsonrpc, dispatch])

	//
	//

	const { keyringState } = state

	const loadAccounts = useCallback(async () => {

		dispatch({ type: 'LOAD_KEYRING' })

		if (keyringState) return

		try {
			await web3Enable(config.APP_NAME)
			let allAccounts = await web3Accounts()
			allAccounts = allAccounts.map(({ address, meta }) => ({
				address,
				meta: { ...meta, name: `${meta.name} (${meta.source})` },
			}))

			keyring.loadAll({ isDevelopment: config.DEVELOPMENT_KEYRING }, allAccounts)
			dispatch({ type: 'SET_KEYRING', payload: keyring })
		} catch (e) {
			console.error(e)
			dispatch({ type: 'KEYRING_ERROR' })
		}

	}, [keyringState, dispatch])

	//
	//

	useEffect(() => {
		console.log('connect')
		connect()
	}, [connect])

	//
	//

	useEffect(() => {
		console.log('loadAccounts')
		loadAccounts()
	}, [loadAccounts])

	return { ...state, dispatch }

}

export default useSubstrate
