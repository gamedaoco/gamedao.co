// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct, u64 } from '@polkadot/types';
import type { Hash } from '@polkadot/types/interfaces/runtime';

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

/** @name SpaceId */
export interface SpaceId extends Hash {}

export type PHANTOM_ITEM = 'item';
