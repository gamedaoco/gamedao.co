export const DEV = process.env.NODE_ENV !== 'production'
export const ENV = DEV ? 'dev' : 'production'
export const KEY = 'hello'
export const HOST =
	typeof window !== 'undefined'
		? window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/api/'
		: '/api/'

console.log(DEV, ENV, process.env.NODE_ENV)
