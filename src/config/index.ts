import configCommon from './common.json'
// import types from './types.json'
// Using `require` as `import` does not support dynamic loading (yet).
const configEnv = require(`./${process.env.NODE_ENV}.json`)

// Accepting React env vars and aggregating them into `config` object.
const envVarNames = ['REACT_APP_PROVIDER_SOCKET', 'REACT_APP_DEVELOPMENT_KEYRING']
const envVars = envVarNames.reduce((mem, n) => {
	// Remove the `REACT_APP_` prefix
	if (process.env[n] !== undefined) mem[n.slice(10)] = process.env[n]
	return mem
}, {})

const config = {
	...configCommon,
	...configEnv,
	...envVars,
	// ...types
}
export default config

export const DEV = process.env.VERCEL_GITLAB_COMMIT_REF !== 'production'
export const ENV = DEV ? 'dev' : 'production'
export const KEY = 'gamedao'
export const HOST =
	typeof window !== 'undefined'
		? window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/api/'
		: '/api/'

// export const NETWORK_URL = ( ENV === 'dev' ) ? 'ws://localhost:9944' : 'wss://alphaville.zero.io'
export const NETWORK_URL = 'wss://alphaville.zero.io'
