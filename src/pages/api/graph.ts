/**
           _______________________________ ________
           \____    /\_   _____/\______   \\_____  \
             /     /  |    __)_  |       _/ /   |   \
            /     /_  |        \ |    |   \/    |    \
           /_______ \/_______  / |____|_  /\_______  /
                   \/        \/         \/         \/
           Z  E  R  O  .  I  O     N  E  T  W  O  R  K
           © C O P Y R I O T   2 0 7 5   Z E R O . I O
**/

import { ApolloServer, gql } from 'apollo-server-micro'
import GraphQLJSON from 'graphql-type-json'

import { DEV } from 'config'
import configData from 'data/config.json'
import featuresData from 'data/features.json'

const typeDefs = gql`
	scalar JSON

	type Query {
		users: [User!]!
		fx: [Pair!]!
		config: [Config!]!
	}

	type Config {
		config: JSON
	}

	type Features {
		features: JSON
	}

	type Content {
		features: JSON
	}

	type User {
		nick: String
		firstname: String
		lastname: String
		email: String
		email_verified: Boolean
		rep: Float
		xp: Float
		play: Float
	}

	type Pair {
		name: String
		bid_name: String
		bid_quote: Float
		ask_name: String
		ask_quote: Float
	}
`

const resolvers = {
	Query: {
		config(parent, args, context) {
			const { env } = args
			const global = configData['global']
			const local = configData[env]
			const content = {
				...global,
				...local,
			}
			return { config: content }
		},

		features(parent, args, context) {
			const { env } = args
			const global = featuresData['global']
			const local = featuresData[env]
			const content = {
				...global,
				...local,
			}
			return { features: content }
		},

		users(parent, args, context) {
			return [
				{
					nick: 'Anonymouse',
					firstname: 'Anon',
					lastname: 'Ymous',
					email: 'm+anon@zero.io',
					rep: 49152,
					xp: 42,
					play: 13.37,
				},
			]
		},

		fx(parent, args, context) {
			return [
				{
					id: 101,
					name: 'EURPLAY',
					ask_currency: 'Euro',
					ask_quote: 1.1,
					bid_currency: 'PLAY',
					bid_quote: 0.9,
				},
				{
					id: 102,
					name: 'EURETH',
					ask_currency: 'Euro',
					ask_quote: 220,
					bid_currency: 'ETH',
					bid_quote: 1,
				},
				{
					id: 103,
					name: 'EURGAME',
					ask_currency: 'Euro',
					ask_quote: 1000,
					bid_currency: 'Game',
					bid_quote: 1,
				},
			]
		},
	},
}

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: DEV,
	context: () => {
		return {}
	},
})

export const config = {
	api: {
		bodyParser: false,
	},
}

export default apolloServer.createHandler({
	path: '/api/graph',
})
