export default {
	types: {
		Governance: {
			proposal_id: 'Hash',
			campaign_id: 'Hash',
			purpose: 'Vec<u8>',
			cid: 'Vec<u8>',
			amount: 'Balance',
			expiry: 'BlockNumber',
			status: 'u8',
		},
	},
}
