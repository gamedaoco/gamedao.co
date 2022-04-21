import gql from 'graphql-tag'

export const GET_PROFILE = gql`
	query getProfile {
		id
		name
		contact
		balances
	}
`
