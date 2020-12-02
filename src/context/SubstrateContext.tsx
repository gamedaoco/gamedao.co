import { createContext, useContext, useState, useReducer, useEffect, useCallback, Dispatch } from 'react'
import { DEV, ENV, SUBZERO } from 'src/config'

// logging

import { Logger } from 'src/lib/log'
const log = Logger('$ZERO')

// substrate

import { ApiPromise, WsProvider } from '@polkadot/api'
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp'
import { DefinitionRpcExt, RegistryTypes } from '@polkadot/types/types'
import keyring, { Keyring } from '@polkadot/ui-keyring'
import { formatBalance } from '@polkadot/util'

// TODO: replace with generated interfaces...
import jsonrpc from '@polkadot/types/interfaces/jsonrpc'

// type registry

import { TypeRegistry } from '@polkadot/types'
export const registry = new TypeRegistry()
const DEFAULT_DECIMALS = registry.createType('u32', 18)
const DEFAULT_SS58 = registry.createType('u32', 24)
const DEFAULT_TOKEN = registry.createType('Text', 'PLAY')

// type / state definitions

type ActionType = 'RESET_SOCKET' | 'CONNECT' | 'CONNECT_SUCCESS' | 'CONNECT_ERROR' | 'KEYRING_SET' | 'KEYRING_ERROR'

type Action = {
	type: ActionType
	payload?: object
}

type ApiState = 'CONNECTING' | 'READY' | 'ERROR'

type KeyringState = 'READY' | 'ERROR'

type JSONRPC = Record<string, Record<string, DefinitionRpcExt>>

export type State = {
	endpoint: string | string[]
	types?: RegistryTypes
	rpc: JSONRPC
	api?: ApiPromise
	apiError?: any
	apiState?: ApiState
	keyring?: Keyring
	keyringState?: KeyringState
	keyringError?: Error
}

// initial state
// TODO: pull from config provided by appcontext

const INITIAL_STATE: State = {
	endpoint: 'wss://alphaville-0.zero.io',
	rpc: { ...jsonrpc },
}

// assemble context

const SubstrateContext = createContext<{
	state: State
	dispatch: React.Dispatch<any>
}>({
	state: INITIAL_STATE,
	dispatch: () => null,
})

// reducer

const reducer = (state: State, action: Action) => {
	// const reducer: React.Reducer<State, Action> = (state, action) => {
	switch (action.type) {
		case 'RESET_SOCKET':
			log.info(`🧹 reset network`)
			const endpoint = action.payload || state.endpoint
			return {
				...state,
				endpoint,
			}

		case 'CONNECT':
			log.info(`🕸 connecting to network...`)
			return {
				...state,
				apiState: 'CONNECT',
				api: action.payload,
			}

		case 'CONNECT_SUCCESS': {
			log.info(`❤️ connected to subzero ${state.endpoint?.toString()}`)

			if (state.apiState !== 'CONNECTING') {
				// const { payload } = action
				// let tookTimeLog: string | undefined
				// if (isNum(payload)) {
				// 	const startTime = payload
				// 	const tookTime = window.performance.now() - startTime
				// 	tookTimeLog = `Took ${tookTime / 1000} seconds`
				// }
				log.info(`🕹 subzero api is ready`)
			}
			return { ...state, apiState: 'READY' }
		}

		case 'CONNECT_ERROR': {
			const err = action.payload
			log.error(`💔 Failed to connect to network ${state.endpoint?.toString()} . ${err}`)
			return { ...state, apiState: 'ERROR', apiError: err }
		}

		case 'KEYRING_SET':
			log.info(`✅ get accounts from keyring`)
			return {
				...state,
				keyringState: 'READY',
				keyring: action.payload,
			}

		case 'KEYRING_ERROR':
			const err = action.payload
			log.error(`❌ failed to load accounts from Keyring. ${err}`)
			return {
				...state,
				keyringState: 'ERROR',
				keyring: undefined,
				apiError: err,
			}

		default:
			throw new Error(`Unknown type: ${action.type}`)
	}
}

type SubstrateProviderProps = React.PropsWithChildren<{
	endpoint?: string
	types?: RegistryTypes
}>

// const SubstrateProvider: React.FC = (props: SubstrateProviderProps) => {
const SubstrateProvider: React.FC<SubstrateProviderProps> = (props) => {
	const initState: State = {
		...INITIAL_STATE,
		endpoint: props.endpoint || INITIAL_STATE.endpoint,
		types: props.types || INITIAL_STATE.types,
	}

	const [state, dispatch] = useReducer(reducer, initState)

	const [ss58Format, setSs58Format] = useState<number>(DEFAULT_SS58.toNumber())
	const { rpc, types, apiState, api, endpoint } = state

	const connect = useCallback(async () => {
		if (api) return

		log.info(`Connecting to Subzero node ${endpoint} ...`)
		const connectTime = window.performance.now()
		const provider = new WsProvider(endpoint)

		// const metadata = await getCachedSubstrateMetadata()
		// let isMetadataCached = isDef(metadata)
		// console.log(`>>> METADATA key: ${Object.keys(metadata || {})}`)

		const metadata = undefined

		const _api = new ApiPromise({ provider, types, rpc, metadata })

		const onConnectSuccess = async () => {
			dispatch({ type: 'CONNECT_SUCCESS', payload: connectTime })
			// 	if (!isMetadataCached) {
			// 		isMetadataCached = true
			// 		await cacheSubstrateMetadata(_api)
			// 	}
		}

		const onReady = () => {
			dispatch({ type: 'CONNECT', payload: _api })
			// onConnectSuccess()
		}

		const onConnect = () => {
			dispatch({ type: 'CONNECT', payload: _api })
			// `ready` event is not emitted upon reconnection. So we check explicitly here.
			_api.isReady.then((_api) => onConnectSuccess())
		}

		_api.on('connected', onConnect)
		_api.on('ready', onReady)
		_api.on('error', (err) => dispatch({ type: 'CONNECT_ERROR', payload: err }))
		_api.on('disconnected', () => log.info(`Disconnected from Substrate node ${endpoint}`))

		return () => _api?.disconnect()
	}, [api, endpoint, rpc, types, dispatch])

	// hook to get injected accounts

	const { keyringState } = state

	const loadAccounts = useCallback(
		async (api: ApiPromise) => {
			// Ensure the method only run once.
			if (keyringState || !api) return

			try {
				await web3Enable('GameDAO')
				let allAccounts = await web3Accounts()
				allAccounts = allAccounts.map(({ address, meta }) => ({ address, meta: { ...meta, name: `${meta.name} (${meta.source})` } }))

				keyring.loadAll({ isDevelopment: DEV, ss58Format }, allAccounts)
				dispatch({ type: 'KEYRING_SET', payload: keyring })
			} catch (err) {
				log.error(`Keyring failed to load accounts. ${err}`)
				dispatch({ type: 'KEYRING_ERROR', payload: err })
			}
		},
		[keyringState, dispatch]
	)

	// connect

	useEffect(() => {
		connect()
	}, [connect])

	// accounts

	useEffect(() => {
		if (!api) return

		api.isReady.then((api) => loadAccounts(api))
	}, [loadAccounts, api])

	// metadata

	useEffect(() => {
		if (apiState !== 'READY' || !api) return

		const setupTokensProps = async () => {
			const properties = await api.rpc.system.properties()
			registry.setChainProperties(properties)

			const tokenSymbol = properties.tokenSymbol.unwrapOr('PLAY').toString()
			const tokenDecimals = properties.tokenDecimals.unwrapOr('18').toNumber()
			formatBalance.setDefaults({
				decimals: tokenDecimals,
				unit: tokenSymbol,
			})

			const ss58Format = properties.ss58Format.unwrapOr(undefined)
			ss58Format && setSs58Format(ss58Format.toNumber())
		}

		setupTokensProps()
	}, [apiState])

	return <SubstrateContext.Provider value={[state, dispatch]}>{props.children}</SubstrateContext.Provider>
}

const useSubstrate = () => useContext(SubstrateContext)[0]

export { SubstrateContext, SubstrateProvider, useSubstrate }
