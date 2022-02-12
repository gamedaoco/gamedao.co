export default {
	types: {
		"Address": "MultiAddress",
		"LookupSource": "MultiAddress",
		"AccountInfo": "AccountInfoWithDualRefCount",
		"AccountInfoWithDualRefCount": {
			"nonce": "Index",
			"consumers": "RefCount",
			"providers": "RefCount",
			"data": "AccountData"
		},
		"Body": {
			"id": "Hash",
			"index": "u128",
			"creator": "AccountId",
			"name": "Vec<u8>",
			"cid": "Vec<u8>",
			"body": "ControlType",
			"created": "BlockNumber",
			"mutated": "BlockNumber"
		},
		"BConfig": {
			"fee_model": "ControlFeeModel",
			"fee": "Balance",
			"gov_asset": "u8",
			"pay_asset": "u8",
			"access": "ControlAccessModel",
			"member_limit": "u64"
		},
		"ControlType": "u8",
		"ControlState": "u8",
		"ControlMemberState": "u8",
		"ControlFeeModel": "u8",
		"ControlAccessModel": "u8",
		"Proposal": {
			"proposal_id": "Hash",
			"context_id": "Hash",
			"proposal_type": "ProposalType",
			"voting_type": "VotingType",
			"start": "BlockNumber",
			"expiry": "BlockNumber"
		},
		"ProposalMetadata": {
			"title": "Vec<u8>",
			"cid": "Vec<u8>",
			"amount": "Balance"
		},
		"ProposalState": "u8",
		"ProposalType": "u8",
		"VotingType": "u8",
		"TitleText": "Vec<u8>",
		"CID": "Vec<u8>",
		"Campaign": {
			"id": "Hash",
	    "org": "Hash",
			"name": "Vec<u8>",
			"owner": "AccountId",
			"admin": "AccountId",
			"deposit": "Balance",
			"expiry": "BlockNumber",
			"cap": "Balance",
			"protocol": "FlowProtocol",
			"governance": "FlowGovernance",
			"cid": "Vec<u8>",
	    "token_symbol": "Vec<u8>",
	    "token_name": "Vec<u8>",
			"created": "Timestamp"
		},
		"EventMessage": "Vec<u8>",
		"Nonce": "u64",
		"FlowProtocol": "u8",
		"FlowGovernance": "u8",
		"FlowState": "u8",
		"State": "FlowState",
		"campaign_id": "Hash",
		"contribution": "Balance",
		"Timestamp": "Moment",
		"RealmIndex": "u64",
		"ClassIndex": "u64",
		"ItemIndex": "u64",
		"TotalIndex": "u128",
		"BurnedIndex": "u128",
		"TangramRealm": {
			"id": "Hash",
			"org": "Hash",
			"index": "u128"
		},
		"TangramRealmMetadata": {
			"id": "Hash",
			"name": "Vec<u8>",
			"cid": "Vec<u8>",
			"created": "BlockNumber",
			"mutated": "BlockNumber"
		},
		"TangramClass": {
			"id": "Hash",
			"realm": "Hash",
			"org": "Hash",
			"index": "u128",
			"cid": "Vec<u8>"
		},
		"TangramClassMetadata": {
			"id": "Hash",
			"name": "Vec<u8>",
			"cid": "Vec<u8>",
			"created": "BlockNumber",
			"mutated": "BlockNumber"
		},
		"MomentOf": "Moment",
		"TangramItem": {
			"dob": "MomentOf",
			"dna": "Hash"
		},
		"TangramMetadata": {
			"realm": "RealmIndex",
			"class": "ClassIndex",
			"name": "Vec<u8>",
			"cid": "Vec<u8>"
		},
		"TangramId": "Hash",
		"TangramItemOf": "TangramItem",
		"Entity": {
			"account": "AccountId",
			"index": "u128",
			"cid": "Vec<u8>",
			"created": "BlockNumber",
			"mutated": "BlockNumber"
		},
		"EntityProperty": {
			"value": "u64",
			"mutated": "BlockNumber"
		}
	}
}
