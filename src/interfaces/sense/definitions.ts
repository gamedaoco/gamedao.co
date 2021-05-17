export default {
	types: {
		Entity: {
			account: 'AccountId',
			index: 'u128',
			cid: 'Vec<u8>',
			created: 'BlockNumber',
			mutated: 'BlockNumber',
		},
		EntityProperty: {
			value: 'u64',
			mutated: 'BlockNumber',
		},
	},
}
