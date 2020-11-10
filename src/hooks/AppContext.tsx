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

type AppState = 'INIT' | 'SETUP' | 'READY'

type ConfigState = 'WAIT' | 'LOAD' | 'READY' | 'ERROR'

type FeatureState = 'WAIT' | 'LOAD' | 'READY' | 'ERROR'

type NetworkState = 'WAIT' | 'CONNECT' | 'READY' | 'ERROR'

type KeyringState = 'WAIT' | 'READY' | 'ERROR'

export type State = {
	app: {
		state: AppState
		DEV: boolean
		ENV: string
	}
	config: {
		state: ConfigState
		data: ConfigTypes
	}
	features: {
		state: FeatureState
		data: FeatureTypes
	}
}

const INITIAL_STATE: State = {
	app: { state: 'INIT', DEV, ENV },
	config: { state: 'WAIT', data: defaultConfig },
	features: { state: 'WAIT', data: defaultFeatures },
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
				config: {
					state: 'READY',
					data: action.payload,
				},
			}

		case 'FEATURES_LOAD':
			log.info(`⏳ load features...`)
			return {
				...state,
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
		const loadConfig = async () => await loadData('config', ENV)
		loadConfig().then((data) => {
			dispatch({ type: 'CONFIG_UPDATE', payload: data })
		})
	}, [])

	// load features

	useEffect(() => {
		if (state.config.state === 'READY') return
		dispatch({ type: 'FEATURES_LOAD' })
		const loadFeatures = async () => await loadData('features', ENV)
		loadFeatures().then((data) => {
			dispatch({ type: 'FEATURES_UPDATE', payload: data })
		})
	}, [])

	return READY ? <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider> : null
}

const useAppContext = () => useContext(AppContext)

export { AppContext, AppProvider, useAppContext }
