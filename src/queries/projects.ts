import gql from 'graphql-tag'

export const GET_PROJECTS_TOP = gql`
	query getTopProjects {
		projects(order_by: { project_raise_amount: desc }, limit: 2) {
			project_name
			project_pitch
			project_id
			project_image
			project_raise_start
			project_pitch_key
			funding_wallet
		}
	}
`

export const GET_PROJECTS_ALL = gql`
	query getCurrentProjects($limit: Int!, $offset: Int!) {
		projects(order_by: { project_raise_start: desc }, limit: $limit, offset: $offset) {
			project_name
			project_pitch
			project_id
			project_image
			project_raise_start
			project_pitch_key
			funding_wallet
		}
	}
`

export const GET_OPEN_CAMPAIGNS = gql`
	query getCurrentProjects($limit: Int!, $offset: Int!) {
		projects(order_by: { project_raise_start: desc }, limit: $limit, offset: $offset) {
			project_name
			project_pitch
			project_id
			project_image
			project_raise_start
			project_pitch_key
			funding_wallet
		}
	}
`
