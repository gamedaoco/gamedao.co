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

/** @name BConfig */
export interface BConfig extends Struct {
  readonly fee_model: ControlFeeModel;
  readonly fee: Balance;
  readonly gov_asset: u8;
  readonly pay_asset: u8;
  readonly access: ControlAccessModel;
  readonly member_limit: u64;
}

/** @name Body */
export interface Body extends Struct {
  readonly id: Hash;
  readonly index: u128;
  readonly creator: AccountId;
  readonly name: Bytes;
  readonly cid: Bytes;
  readonly body: ControlType;
  readonly created: BlockNumber;
  readonly mutated: BlockNumber;
}

/** @name BurnedIndex */
export interface BurnedIndex extends u128 {}

/** @name Campaign */
export interface Campaign extends Struct {
  readonly id: Hash;
  readonly org: Hash;
  readonly name: Bytes;
  readonly owner: AccountId;
  readonly admin: AccountId;
  readonly deposit: Balance;
  readonly expiry: BlockNumber;
  readonly cap: Balance;
  readonly protocol: FlowProtocol;
  readonly governance: FlowGovernance;
  readonly cid: Bytes;
  readonly token_symbol: Bytes;
  readonly token_name: Bytes;
  readonly created: Timestamp;
}

/** @name campaign_id */
export interface campaign_id extends Hash {}

/** @name CID */
export interface CID extends Bytes {}

/** @name ClassIndex */
export interface ClassIndex extends u64 {}

/** @name contribution */
export interface contribution extends Balance {}

/** @name ControlAccessModel */
export interface ControlAccessModel extends u8 {}

/** @name ControlFeeModel */
export interface ControlFeeModel extends u8 {}

/** @name ControlMemberState */
export interface ControlMemberState extends u8 {}

/** @name ControlState */
export interface ControlState extends u8 {}

/** @name ControlType */
export interface ControlType extends u8 {}

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

/** @name FlowGovernance */
export interface FlowGovernance extends u8 {}

/** @name FlowProtocol */
export interface FlowProtocol extends u8 {}

/** @name FlowState */
export interface FlowState extends u8 {}

/** @name ItemIndex */
export interface ItemIndex extends u64 {}

/** @name LookupSource */
export interface LookupSource extends MultiAddress {}

/** @name MomentOf */
export interface MomentOf extends Moment {}

/** @name Nonce */
export interface Nonce extends u64 {}

/** @name Proposal */
export interface Proposal extends Struct {
  readonly proposal_id: Hash;
  readonly context_id: Hash;
  readonly proposal_type: ProposalType;
  readonly voting_type: VotingType;
  readonly start: BlockNumber;
  readonly expiry: BlockNumber;
}

/** @name ProposalMetadata */
export interface ProposalMetadata extends Struct {
  readonly title: Bytes;
  readonly cid: Bytes;
  readonly amount: Balance;
}

/** @name ProposalState */
export interface ProposalState extends u8 {}

/** @name ProposalType */
export interface ProposalType extends u8 {}

/** @name RealmIndex */
export interface RealmIndex extends u64 {}

/** @name State */
export interface State extends FlowState {}

/** @name TangramClass */
export interface TangramClass extends Struct {
  readonly id: Hash;
  readonly realm: Hash;
  readonly org: Hash;
  readonly index: u128;
  readonly cid: Bytes;
}

/** @name TangramClassMetadata */
export interface TangramClassMetadata extends Struct {
  readonly id: Hash;
  readonly name: Bytes;
  readonly cid: Bytes;
  readonly created: BlockNumber;
  readonly mutated: BlockNumber;
}

/** @name TangramId */
export interface TangramId extends Hash {}

/** @name TangramItem */
export interface TangramItem extends Struct {
  readonly dob: MomentOf;
  readonly dna: Hash;
}

/** @name TangramItemOf */
export interface TangramItemOf extends TangramItem {}

/** @name TangramMetadata */
export interface TangramMetadata extends Struct {
  readonly realm: RealmIndex;
  readonly class: ClassIndex;
  readonly name: Bytes;
  readonly cid: Bytes;
}

/** @name TangramRealm */
export interface TangramRealm extends Struct {
  readonly id: Hash;
  readonly org: Hash;
  readonly index: u128;
}

/** @name TangramRealmMetadata */
export interface TangramRealmMetadata extends Struct {
  readonly id: Hash;
  readonly name: Bytes;
  readonly cid: Bytes;
  readonly created: BlockNumber;
  readonly mutated: BlockNumber;
}

/** @name Timestamp */
export interface Timestamp extends Moment {}

/** @name TitleText */
export interface TitleText extends Bytes {}

/** @name TotalIndex */
export interface TotalIndex extends u128 {}

/** @name VotingType */
export interface VotingType extends u8 {}

export type PHANTOM_COMMON = 'common';
