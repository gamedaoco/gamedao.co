// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct, u128, u64 } from '@polkadot/types'
import type { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime'

/** @name Entity */
export interface Entity extends Struct {
	readonly account: AccountId
	readonly index: u128
	readonly cid: Bytes
	readonly created: BlockNumber
	readonly mutated: BlockNumber
}

/** @name EntityProperty */
export interface EntityProperty extends Struct {
	readonly value: u64
	readonly mutated: BlockNumber
}

export type PHANTOM_SENSE = 'sense'
