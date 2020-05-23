export const DEV = process.env.NODE_ENV !== 'production'
export const ENV = DEV ? 'dev' : 'production'
export const KEY = 'hello'
export const HOST =
	typeof window !== 'undefined'
		? window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/api/'
		: '/api/'

// process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api/` : 'http://localhost:3030/api/'
