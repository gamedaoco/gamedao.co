export const DEV = process.env.NODE_ENV !== 'production'
export const HOST = DEV ? 'http://localhost:3030/api/' : 'https://gamedao.com/api/'
export const ENV = DEV ? 'dev' : 'production'
export const KEY = 'hello'
