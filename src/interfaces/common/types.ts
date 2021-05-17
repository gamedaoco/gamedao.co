// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct, u128, u64, u8 } from '@polkadot/types';
import type { AccountData } from '@polkadot/types/interfaces/balances';
import type { AccountId, Balance, BlockNumber, Hash, Index, Moment, MultiAddress } from '@polkadot/types/interfaces/runtime';
import type { RefCount } from '@polkadot/types/interfaces/system';

/** @name AccountInfo */
export interface AccountInfo extends AccountInfoWithDualRefCount {}

/** @name AccountInfoWithDualRefCount */
export interface AccountInfoWithDualRefCount extends Struct {
  readonly nonce: Index;
  readonly consumers: RefCount;
  readonly providers: RefCount;
  readonly data: AccountData;
}

/** @name Address */
export interface Address extends MultiAddress {}

/** @name Campaign */
export interface Campaign extends Struct {
  readonly id: Hash;
  readonly owner: AccountId;
  readonly admin: AccountId;
  readonly deposit: Balance;
  readonly expiry: BlockNumber;
  readonly cap: Balance;
  readonly name: Bytes;
  readonly protocol: u8;
  readonly governance: u8;
  readonly cid: Bytes;
  readonly created: Timestamp;
}

/** @name CID */
export interface CID extends Bytes {}

/** @name Entity */
export interface Entity extends Struct {
  readonly account: AccountId;
  readonly index: u128;
  readonly cid: Bytes;
  readonly created: BlockNumber;
  readonly mutated: BlockNumber;
}

/** @name EntityProperty */
export interface EntityProperty extends Struct {
  readonly value: u64;
  readonly mutated: BlockNumber;
}

/** @name EventMessage */
export interface EventMessage extends Bytes {}

/** @name Governance */
export interface Governance extends Struct {
  readonly proposal_id: Hash;
  readonly campaign_id: Hash;
  readonly purpose: Bytes;
  readonly cid: Bytes;
  readonly amount: Balance;
  readonly expiry: BlockNumber;
  readonly status: u8;
}

/** @name HypaspaceInfo */
export interface HypaspaceInfo extends Hash {}

/** @name HypaspaceMetadata */
export interface HypaspaceMetadata extends Struct {
  readonly name: Bytes;
}

/** @name Item */
export interface Item extends Struct {
  readonly ItemId: ItemId;
  readonly ItemInfo: ItemInfo;
}

/** @name ItemId */
export interface ItemId extends Hash {}

/** @name ItemInfo */
export interface ItemInfo extends Struct {
  readonly dob: u64;
  readonly dna: Hash;
}

/** @name LookupSource */
export interface LookupSource extends MultiAddress {}

/** @name Nonce */
export interface Nonce extends u64 {}

/** @name SpaceId */
export interface SpaceId extends Hash {}

/** @name Timestamp */
export interface Timestamp extends Moment {}

export type PHANTOM_COMMON = 'common';
