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
					nick: 'Anonymous',
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
					name: 'EURPLAY',
					bid_name: 'Euro',
					bid_quote: 1,
					ask_name: 'PLAY',
					ask_quote: 1.1,
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
