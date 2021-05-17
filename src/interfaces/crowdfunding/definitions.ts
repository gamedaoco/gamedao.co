export default {
	types: {
		Campaign: {
			id: 'Hash',
			owner: 'AccountId',
			admin: 'AccountId',
			deposit: 'Balance',
			expiry: 'BlockNumber',
			cap: 'Balance',
			name: 'Vec<u8>',
			protocol: 'u8',
			governance: 'u8',
			cid: 'Vec<u8>',
			created: 'Timestamp'
		}
	}
};
