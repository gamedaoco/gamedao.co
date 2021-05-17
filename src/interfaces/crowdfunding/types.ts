// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct, u8 } from '@polkadot/types'
import type { AccountId, Balance, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime'

/** @name Campaign */
export interface Campaign extends Struct {
	readonly id: Hash
	readonly owner: AccountId
	readonly admin: AccountId
	readonly deposit: Balance
	readonly expiry: BlockNumber
	readonly cap: Balance
	readonly name: Bytes
	readonly protocol: u8
	readonly governance: u8
	readonly cid: Bytes
	readonly created: Timestamp
}

export type PHANTOM_CROWDFUNDING = 'crowdfunding'
