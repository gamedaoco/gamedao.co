import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
	type Query {
		users: [User!]!
		fx: [Pair!]!
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

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
	api: {
		bodyParser: false,
	},
}

export default apolloServer.createHandler({
	path: '/api/graphql',
})
