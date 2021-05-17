export default {
	types: {
		SpaceId: 'Hash',
		ItemId: 'Hash',
		ItemInfo: {
			dob: 'u64',
			dna: 'Hash',
		},
		Item: {
			ItemId: 'ItemId',
			ItemInfo: 'ItemInfo',
		},
		HypaspaceInfo: 'Hash',
		HypaspaceMetadata: {
			name: 'Vec<u8>',
		},
	},
}
