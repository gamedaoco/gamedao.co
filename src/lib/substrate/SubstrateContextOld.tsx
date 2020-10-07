import React, { useReducer } from 'react'

import jsonrpc from '@polkadot/types/interfaces/jsonrpc'
import queryString from 'query-string'
import config from '../../config'

import { ApiPromise, WsProvider } from '@polkadot/api'
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp'
// import { keyring } from '@polkadot/keyring'
import keyring from '@polkadot/ui-keyring'

const parsedQuery = queryString.parse(window.location.search)
const connectedSocket = parsedQuery.rpc || config.PROVIDER_SOCKET
console.log(`Connected socket: ${connectedSocket}`)


export type StateProps = {
	socket: string
	jsonrpc: Record<string, Record<string, any>>
	types: typeof config.CUSTOM_TYPES
	keyring: typeof keyring
	keyringState: object
	api: typeof ApiPromise
	apiError: object,
	apiState: object
}


const INIT_STATE: StateProps = {
	socket: connectedSocket,
	jsonrpc: { ...jsonrpc, ...config.RPC },
	types: config.CUSTOM_TYPES,
	keyring: null,
	keyringState: null,
	api: null,
	apiError: null,
	apiState: null,
}

// export type StateProps = typeof INIT_STATE

//

export type ActionType = {
	type: 'CONNECT_INIT' | 'LOAD_KEYRING' | 'RESET_SOCKET' | 'CONNECT' | 'CONNECT_SUCCESS' | 'CONNECT_ERROR' | 'SET_KEYRING' | 'KEYRING_ERROR'
	payload?: object | null
}

const reducer = (state, action: ActionType) => {

	let socket = null

	switch (action.type) {
		case 'CONNECT_INIT':
			return { ...state, apiState: 'CONNECT_INIT' }

		case 'CONNECT':
			return { ...state, api: action.payload, apiState: 'CONNECTING' }

		case 'CONNECT_SUCCESS':
			return { ...state, apiState: 'READY' }

		case 'CONNECT_ERROR':
			return { ...state, apiState: 'ERROR', apiError: action.payload }

		case 'LOAD_KEYRING':
			return { ...state, keyringState: 'LOADING' }

		case 'SET_KEYRING':
			return { ...state, keyring: action.payload, keyringState: 'READY' }

		case 'KEYRING_ERROR':
			return { ...state, keyring: null, keyringState: 'ERROR' }

		default:
			throw new Error(`Unknown type: ${action.type}`)

	}

}


export interface ContextInterface {
	state: StateProps
	dispatch: Function
}

export const SubstrateContext = React.createContext<ContextInterface>(undefined!)

export const SubstrateContextProvider = ({ socket, types }: StateProps, props) => {

	const initState = {
		...INIT_STATE,
		socket,
		types
	}

	// const requiredPropNames = ['socket', 'types']
	// requiredPropNames.forEach((key) => {
	// 	initState[key] = typeof props[key] === 'undefined' ? initState[key] : props[key]
	// })

	const [state, dispatch] = useReducer(reducer, initState)

	return <SubstrateContext.Provider value={{ state, dispatch }}>
		{props.children}
	</SubstrateContext.Provider>

}

