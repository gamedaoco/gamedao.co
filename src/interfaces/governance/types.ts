// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct, u8 } from '@polkadot/types'
import type { Balance, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime'

/** @name Governance */
export interface Governance extends Struct {
	readonly proposal_id: Hash
	readonly campaign_id: Hash
	readonly purpose: Bytes
	readonly cid: Bytes
	readonly amount: Balance
	readonly expiry: BlockNumber
	readonly status: u8
}

export type PHANTOM_GOVERNANCE = 'governance'
