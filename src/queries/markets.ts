import gql from 'graphql-tag'

export const GET_FX = gql`
	query {
		getFX {
			id
			askQuote
			askCurrency
			bidQuote
			bidCurrency
		}
	}
`
