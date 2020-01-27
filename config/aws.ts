export const aws = {
	Auth: {
		identityPoolId: process.env.AWS_IDENTITYPOOL_ID || null,
		region: process.env.AWS_REGION || null,
		userPoolId: process.env.AWS_USERPOOL_ID || null,
		userPoolWebClientId: process.env.AWS_USERPOOL_WEBCLIENT_ID || null,

		authenticationFlowType: 'USER_PASSWORD_AUTH',

		// OPTIONAL - Configuration for cookie storage
		// Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
		cookieStorage: {
			// REQUIRED - Cookie domain (only required if cookieStorage is provided)
			domain: 'zero.io',
			// OPTIONAL - Cookie path
			path: '/',
			// OPTIONAL - Cookie expiration in days
			expires: 365,
			// OPTIONAL - Cookie secure flag
			// Either true or false, indicating if the cookie transmission requires a secure protocol (https).
			secure: true,
		},
	},
	API: {
		graphql_endpoint: process.env.NODE_ENV === 'production' ? process.env.API_DEV : process.env.API_PROD,
	},
}

export default aws
