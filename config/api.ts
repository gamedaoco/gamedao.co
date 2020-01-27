export const api = {
	server: {
		uri: process.env.NODE_ENV === 'production' ? process.env.API_DEV : process.env.API_PROD,
	},
}

export default api
