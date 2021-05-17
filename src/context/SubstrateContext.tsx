import React, {
	createContext,
	useContext,
	useState,
	useReducer,
	useEffect,
	useCallback,
	// , Dispatch
} from 'react'
import { DEV, ENV, NETWORK_URL } from 'src/config'

// logging

import { Logger } from 'src/lib/log'
const log = Logger('$NET')

// app
import { useAppContext } from 'src/context/AppContext'

// substrate

import { ApiPromise, WsProvider } from '@polkadot/api'
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp'
import { DefinitionRpcExt, RegistryTypes } from '@polkadot/types/types'
import keyring, { Keyring } from '@polkadot/ui-keyring'
import { formatBalance } from '@polkadot/util'

import { getMetadata, cacheMetadata } from 'src/storage/substrate'

// type registry
// TODO: automate typegen / introspection
// -> typegen package

import jsonrpc from '@polkadot/types/interfaces/jsonrpc'
import definitions from 'src/interfaces/common/definitions'
import { TypeRegistry } from '@polkadot/types'

const registry = new TypeRegistry()
const types = Object.values({ definitions })
	.map(({ types }) => types)
	.reduce((all, types) => Object.assign(all, types), {})

//

const DEFAULT_DECIMALS = registry.createType('u32', 18)
const DEFAULT_SS58 = registry.createType('u32', 25)
const DEFAULT_TOKEN = registry.createType('Text', 'ZERO')

// local type / state definitions

type ActionType = 'RESET_SOCKET' | 'CONNECT' | 'CONNECT_SUCCESS' | 'CONNECT_ERROR' | 'KEYRING_SET' | 'KEYRING_ERROR'
type Action = {
	type: ActionType
	payload?: any
}
type ApiState = 'CONNECT' | 'READY' | 'ERROR'
type KeyringState = 'READY' | 'ERROR'
type JSONRPC = Record<string, Record<string, DefinitionRpcExt>>

export type State = {
	endpoint: string
	types: RegistryTypes
	rpc: JSONRPC
	api?: ApiPromise
	apiError?: Error
	apiState?: ApiState
	keyring?: Keyring
	keyringState?: KeyringState
	keyringError?: Error
}

// initial state
// TODO: pull from config provided by appcontext

const INITIAL_STATE: State = {
	endpoint: NETWORK_URL,
	types: types,
	rpc: { ...jsonrpc },
}

// assemble context

export type Dispatch = (action: Action) => void

const SubstrateContext = createContext<[State, Dispatch]>([INITIAL_STATE, () => null])

// const SubstrateContext = createContext<{
// 	state: State
// 	dispatch: React.Dispatch<any>
// }>({
// 	state: INITIAL_STATE,
// 	dispatch: () => null,
// })

// subsocial style
// export type Dispatch = (action: Action) => void
// type ContextValue = [ State, Dispatch ]
// const SubstrateContext = createContext<ContextValue>(undefined as unknown as ContextValue)

// reducer

const reducer = (state: State, action: Action): State => {
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

			if (state.apiState !== 'CONNECT') {
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

let _api: ApiPromise
export { _api as api }

// const SubstrateProvider: React.FC = (props: SubstrateProviderProps) => {
const SubstrateProvider = (props: SubstrateProviderProps) => {
	const {
		state: {
			net: { allowConnect },
		},
	} = useAppContext()

	const initState: State = {
		...INITIAL_STATE,
		endpoint: props.endpoint || INITIAL_STATE.endpoint,
		types: props.types || INITIAL_STATE.types,
	}

	const [state, dispatch] = useReducer(reducer, initState)
	const { rpc, types, apiState, api, endpoint } = state
	const [ss58Format, setSs58Format] = useState<number>(DEFAULT_SS58.toNumber())

	const connect = useCallback(async () => {
		if (api) return

		log.info(`Connecting to node ${endpoint} ...`)

		const connectTime = window.performance.now()
		const provider = new WsProvider(endpoint)

		const metadata = await getMetadata()
		let isMetadataCached = metadata !== undefined

		// console.log(`>>> METADATA key: ${Object.keys(metadata || {})}`)
		// const metadata = undefined

		const _api = new ApiPromise({ provider, types, rpc, metadata })

		const onConnectSuccess = async () => {
			dispatch({ type: 'CONNECT_SUCCESS', payload: connectTime })
			if (!isMetadataCached) {
				isMetadataCached = true
				await cacheMetadata(_api)
			}
		}

		const onReady = () => {
			dispatch({ type: 'CONNECT', payload: _api })
			onConnectSuccess()
		}

		const onConnect = () => {
			dispatch({ type: 'CONNECT', payload: _api })
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
			if (keyringState || !api) return

			try {
				await web3Enable('GameDAO')
				let allAccounts = await web3Accounts()
				allAccounts = allAccounts.map(({ address, meta }) => ({ address, meta: { ...meta, name: `${meta.name} (${meta.source})` } }))

				keyring.loadAll(
					{
						isDevelopment: DEV,
						ss58Format,
					},
					allAccounts
				)
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
		if (!allowConnect || !api) return
		api.isReady.then((api) => loadAccounts(api))
	}, [allowConnect, api, keyring, loadAccounts])

	// metadata

	useEffect(() => {
		if (apiState !== 'READY' || !api) return

		const setupTokenProps = async () => {
			const properties = await api.rpc.system.properties()

			registry.setChainProperties(properties)

			const tokenSymbol = properties.tokenSymbol.unwrapOr('ZERO').toString()
			const tokenDecimals = properties.tokenDecimals.unwrapOr(18) as number
			log.info(`tokenSymbol: ${tokenSymbol}, tokenDecimals: ${tokenDecimals}`)

			formatBalance.setDefaults({
				unit: tokenSymbol,
				decimals: tokenDecimals,
			})

			const ss58Format = properties.ss58Format.unwrapOr(undefined)
			ss58Format && setSs58Format(ss58Format.toNumber())
		}

		setupTokenProps()
	}, [api])

	return <SubstrateContext.Provider value={[state, dispatch]}>{props.children}</SubstrateContext.Provider>
}

// const useSubstrate = () => useContext(SubstrateContext)[0]

const useSubstrate = (): State & { dispatch: Dispatch } => {
	const [state, dispatch] = React.useContext(SubstrateContext)
	return { ...state, dispatch }
}

export { SubstrateContext, SubstrateProvider, useSubstrate }
export default SubstrateProvider
