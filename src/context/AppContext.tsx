import { createContext, useContext, useReducer, useEffect } from 'react'
import { DEV, ENV, HOST } from 'src/config'

// logging

import { Logger } from 'src/lib/log'
const log = Logger('$APP')

// hacky type introspection

import configJSON from 'data/config.json'
import featuresJSON from 'data/features.json'

const defaultConfig = configJSON.global
type ConfigTypes = typeof configJSON

const defaultFeatures = featuresJSON.global
type FeatureTypes = typeof defaultFeatures

// data loader

const loadData = async (resource, env) => {
	try {
		let data = await fetch(HOST + resource, {
			method: 'POST',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ key: 'hello', env }),
		})
		data = await data.json()
		return data
	} catch (error) {
		console.error(error)
	}
}

// type / state definitions

export type ActionTypes =
	| 'INIT'
	| 'CONFIG_LOAD'
	| 'CONFIG_UPDATE'
	| 'FEATURES_LOAD'
	| 'FEATURES_UPDATE'
	| 'CONTENT_LOAD'
	| 'CONTENT_UPDATE'
	| 'NET_CONNECT'
	| 'NET_READY'
	| 'NET_ERROR'
	| 'NET_RESET'
	| 'KEYRING_UPDATE'
	| 'KEYRING_ERROR'

export type Action = {
	type: ActionTypes
	payload?: object | null
}

export type AppState = 'INIT' | 'SETUP' | 'READY'
export type NotificationType = {
	type?: number
	code?: number
	time?: number
	message: string
}

export type Web3State = 'INIT' | 'CONNECTING' | 'CONNECT'
export type ConfigState = 'WAIT' | 'LOAD' | 'READY' | 'ERROR'
export type FeatureState = 'WAIT' | 'LOAD' | 'READY' | 'ERROR'
export type NetworkState = 'WAIT' | 'CONNECT' | 'READY' | 'ERROR'
export type KeyringState = 'WAIT' | 'READY' | 'ERROR'

export type UserState = 'NOUSER' | 'SIGNEDIN'
export type UserAuthMethod = 'EMPA' | 'SS58' | 'ETH'
export type UserTypes = {
	id: number // uuid
	nick: string // public nick
	pic: string // url to img
	method: UserAuthMethod
	key: string // key used to signin, oneof type UserAuthMethod
	ttl: number // lifetime
	language: string // should be iso string
	alive: boolean
}

export type State = {
	app: {
		state: AppState
		notifications: NotificationType[] | undefined
		DEV: boolean
		ENV: string
	}
	net: {
		state: Web3State
		URL: string
		CONNECTED: boolean
	}
	config: {
		state: ConfigState
		data: ConfigTypes
	}
	features: {
		state: FeatureState
		data: FeatureTypes
	},
	user: {
		state: UserState
		data: UserTypes | undefined
	}
}

const INITIAL_STATE: State = {
	app: { state: 'INIT', notifications: [], DEV, ENV },
	net: { state: 'INIT', URL: '', CONNECTED: false },
	config: { state: 'WAIT', data: defaultConfig },
	features: { state: 'WAIT', data: defaultFeatures },
	user: { state: 'NOUSER', data: undefined }
}

// assemble context

const AppContext = createContext<{
	state: State
	dispatch: React.Dispatch<any>
}>({
	state: INITIAL_STATE,
	dispatch: () => null,
})

// reducer

const reducer: React.Reducer<State, Action> = (state, action) => {
	switch (action.type) {
		case 'CONFIG_LOAD':
			log.info(`⏳ load config...`)
			return {
				...state,
				app: { ...state.app, state: 'INIT' },
				config: { ...state.config, state: 'LOAD' },
			}

		case 'CONFIG_UPDATE':
			log.info(`⚙️ update config`)
			return {
				...state,
				app: { ...state.app, state: 'SETUP' },
				config: { data: action.payload },
			}

		case 'FEATURES_LOAD':
			log.info(`⏳ load features...`)
			return {
				...state,
				config: { ...state.config, state: 'READY' },
				features: { ...state.features, state: 'LOAD' },
			}

		case 'FEATURES_UPDATE':
			log.info(`⚙️ update features`)
			return {
				...state,
				app: { ...state.app, state: 'READY' },
				features: {
					state: 'READY',
					data: action.payload,
				},
			}

		case 'CONTENT_LOAD':
			log.info(`⏳ loading content...`)
			return {
				...state,
				features: { ...state.features, state: 'LOAD' },
			}

		case 'CONTENT_UPDATE':
			log.info(`❤️ content loaded`)
			return {
				...state,
				content: {
					state: 'READY',
					data: action.payload,
				},
			}

		default:
			throw new Error(`Unknown type: ${action.type}`)
	}
}

const AppProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
	const READY = state.app.state == 'READY' ? true : false

	// load config to enable core functionality

	useEffect(() => {
		dispatch({ type: 'CONFIG_LOAD' })
		let isMounted = true
		const loadConfig = async () => await loadData('config', ENV)
		loadConfig().then((data) => {
			if (isMounted) dispatch({ type: 'CONFIG_UPDATE', payload: data })
		})
		return () => { isMounted = false }
	}, [])

	// load features

	useEffect(() => {
		let isMounted = true
		// if (state.config.state !== 'READY') return
		dispatch({ type: 'FEATURES_LOAD' })
		const loadFeatures = async () => await loadData('features', ENV)
		loadFeatures().then((data) => {
			if (isMounted) dispatch({ type: 'FEATURES_UPDATE', payload: data })
		})
		return () => { isMounted = false }
	}, [])

	return READY ? <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider> : null
}

const useAppContext = () => useContext(AppContext)

export { AppContext, AppProvider, useAppContext }
