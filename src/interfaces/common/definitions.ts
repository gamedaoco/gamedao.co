export default {
	types: {
		Address: 'MultiAddress',
		LookupSource: 'MultiAddress',
		AccountInfo: 'AccountInfoWithDualRefCount',
		AccountInfoWithDualRefCount: {
			nonce: 'Index',
			consumers: 'RefCount',
			providers: 'RefCount',
			data: 'AccountData'
		},
		EventMessage: 'Vec<u8>',
		Nonce: 'u64',
		CID: 'Vec<u8>',
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
		},
		Timestamp: 'Moment',
		Governance: {
			proposal_id: 'Hash',
			campaign_id: 'Hash',
			purpose: 'Vec<u8>',
			cid: 'Vec<u8>',
			amount: 'Balance',
			expiry: 'BlockNumber',
			status: 'u8'
		},
		SpaceId: 'Hash',
		ItemId: 'Hash',
		ItemInfo: {
			dob: 'u64',
			dna: 'Hash'
		},
		Item: {
			ItemId: 'ItemId',
			ItemInfo: 'ItemInfo'
		},
		HypaspaceInfo: 'Hash',
		HypaspaceMetadata: {
			name: 'Vec<u8>'
		},
		Entity: {
			account: 'AccountId',
			index: 'u128',
			cid: 'Vec<u8>',
			created: 'BlockNumber',
			mutated: 'BlockNumber'
		},
		EntityProperty: {
			value: 'u64',
			mutated: 'BlockNumber'
		}
	}
};