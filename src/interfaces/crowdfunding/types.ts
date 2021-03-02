// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct, u64, u8 } from '@polkadot/types'
import type { AccountId, Balance, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime'

/** @name Campaign */
export interface Campaign extends Struct {
	readonly id: Hash
	readonly manager: AccountId
	readonly deposit: Balance
	readonly expiry: BlockNumber
	readonly cap: Balance
	readonly name: Bytes
	readonly protocoL: u8
	readonly status: u8
	readonly nonce: u64
}

/** @name EventMessage */
export interface EventMessage extends Bytes {}

/** @name Nonce */
export interface Nonce extends u64 {}

export type PHANTOM_CROWDFUNDING = 'crowdfunding'
