export const DEV = process.env.NODE_ENV !== 'production'
export const ENV = DEV ? 'dev' : 'production'
export const HOST = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api/` : 'http://localhost:3030/api/'
export const KEY = 'hello'
