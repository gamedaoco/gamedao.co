export default {
	types: {
		Address: 'AccountId',
		LookupSource: 'AccountId',
		Campaign: {
			id: 'Hash',
			manager: 'AccountId',
			deposit: 'Balance',
			expiry: 'BlockNumber',
			cap: 'Balance',
			name: 'Vec<u8>',
			protocoL: 'u8',
			status: 'u8',
			nonce: 'u64'
		},
		EventMessage: 'Vec<u8>',
		Nonce: 'u64'
	}
}
