export const DEV = process.env.VERCEL_GITLAB_COMMIT_REF !== 'production'
export const ENV = DEV ? 'dev' : 'production'
export const KEY = 'hello'
export const HOST =
	typeof window !== 'undefined'
		? window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/api/'
		: '/api/'

console.log(DEV, ENV, process.env.NODE_ENV)
