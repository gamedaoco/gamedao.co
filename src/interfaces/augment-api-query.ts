// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Data, Option, U8aFixed, Vec, bool, u128, u32, u64 } from '@polkadot/types';
import type { AnyNumber, ITuple, Observable } from '@polkadot/types/types';
import type { AssetBalance, AssetDetails, AssetMetadata } from '@polkadot/types/interfaces/assets';
import type { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import type { BabeAuthorityWeight, MaybeRandomness, NextConfigDescriptor, Randomness } from '@polkadot/types/interfaces/babe';
import type { AccountData, BalanceLock } from '@polkadot/types/interfaces/balances';
import type { ProposalIndex, Votes } from '@polkadot/types/interfaces/collective';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { CodeHash, ContractInfo, DeletedContract, PrefabWasmModule, Schedule } from '@polkadot/types/interfaces/contracts';
import type { PreimageStatus, PropIndex, Proposal, ReferendumIndex, ReferendumInfo, Voting } from '@polkadot/types/interfaces/democracy';
import type { VoteThreshold } from '@polkadot/types/interfaces/elections';
import type { SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import type { RegistrarInfo, Registration } from '@polkadot/types/interfaces/identity';
import type { AuthIndex } from '@polkadot/types/interfaces/imOnline';
import type { CallIndex, LotteryConfig } from '@polkadot/types/interfaces/lottery';
import type { DeferredOffenceOf, Kind, OffenceDetails, OpaqueTimeSlot, ReportIdOf } from '@polkadot/types/interfaces/offences';
import type { ProxyAnnouncement, ProxyDefinition } from '@polkadot/types/interfaces/proxy';
import type { ActiveRecovery, RecoveryConfig } from '@polkadot/types/interfaces/recovery';
import type { AccountId, AccountIndex, AssetId, Balance, BalanceOf, BlockNumber, Hash, KeyTypeId, Moment, OpaqueCall, Perbill, Releases, Slot, ValidatorId } from '@polkadot/types/interfaces/runtime';
import type { Scheduled, TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import type { Bid, BidKind, SocietyVote, StrikeCount, VouchingStatus } from '@polkadot/types/interfaces/society';
import type { ActiveEraInfo, ElectionResult, ElectionScore, ElectionStatus, EraIndex, EraRewardPoints, Exposure, Forcing, Nominations, RewardDestination, SeatHolder, SlashingSpans, SpanIndex, SpanRecord, StakingLedger, UnappliedSlash, ValidatorPrefs, Voter } from '@polkadot/types/interfaces/staking';
import type { AccountInfo, ConsumedWeight, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
import type { Bounty, BountyIndex, OpenTip, TreasuryProposal } from '@polkadot/types/interfaces/treasury';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type { Multisig } from '@polkadot/types/interfaces/utility';
import type { VestingInfo } from '@polkadot/types/interfaces/vesting';
import type { BConfig, Body, BurnedIndex, Campaign, ClassIndex, ControlAccessModel, ControlMemberState, ControlState, Entity, EntityProperty, FlowState, ItemIndex, ProposalMetadata, ProposalState, RealmIndex, TangramClass, TangramItem, TangramMetadata, TangramRealm, TotalIndex } from 'sample-polkadotjs-typegen/interfaces/common';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    assets: {
      /**
       * The number of units of assets held by any given account.
       **/
      account: AugmentedQuery<ApiType, (arg1: AssetId | AnyNumber | Uint8Array, arg2: AccountId | string | Uint8Array) => Observable<AssetBalance>, [AssetId, AccountId]> & QueryableStorageEntry<ApiType, [AssetId, AccountId]>;
      /**
       * Details of an asset.
       **/
      asset: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<Option<AssetDetails>>, [AssetId]> & QueryableStorageEntry<ApiType, [AssetId]>;
      /**
       * Metadata of an asset.
       **/
      metadata: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<AssetMetadata>, [AssetId]> & QueryableStorageEntry<ApiType, [AssetId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    authorship: {
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Whether uncles were already set in this block.
       **/
      didSetUncles: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Uncles
       **/
      uncles: AugmentedQuery<ApiType, () => Observable<Vec<UncleEntryItem>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    babe: {
      /**
       * Current epoch authorities.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Temporary value (cleared at block finalization) that includes the VRF output generated
       * at this block. This field should always be populated during block processing unless
       * secondary plain slots are enabled (which don't contain a VRF output).
       **/
      authorVrfRandomness: AugmentedQuery<ApiType, () => Observable<MaybeRandomness>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current slot number.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<Slot>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current epoch index.
       **/
      epochIndex: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The slot at which the first epoch actually started. This is 0
       * until the first block of the chain.
       **/
      genesisSlot: AugmentedQuery<ApiType, () => Observable<Slot>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Temporary value (cleared at block finalization) which is `Some`
       * if per-block initialization has already been called for current block.
       **/
      initialized: AugmentedQuery<ApiType, () => Observable<Option<MaybeRandomness>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * How late the current block is compared to its parent.
       * 
       * This entry is populated as part of block execution and is cleaned up
       * on block finalization. Querying this storage entry outside of block
       * execution context should always yield zero.
       **/
      lateness: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Next epoch authorities.
       **/
      nextAuthorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Next epoch configuration, if changed.
       **/
      nextEpochConfig: AugmentedQuery<ApiType, () => Observable<Option<NextConfigDescriptor>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Next epoch randomness.
       **/
      nextRandomness: AugmentedQuery<ApiType, () => Observable<Randomness>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The epoch randomness for the *current* epoch.
       * 
       * # Security
       * 
       * This MUST NOT be used for gambling, as it can be influenced by a
       * malicious validator in the short term. It MAY be used in many
       * cryptographic protocols, however, so long as one remembers that this
       * (like everything else on-chain) it is public. For example, it can be
       * used where a number is needed that cannot have been chosen by an
       * adversary, for purposes such as public-coin zero-knowledge proofs.
       **/
      randomness: AugmentedQuery<ApiType, () => Observable<Randomness>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Randomness under construction.
       * 
       * We make a tradeoff between storage accesses and list length.
       * We store the under-construction randomness in segments of up to
       * `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
       * 
       * Once a segment reaches this length, we begin the next one.
       * We reset all segments and return to `0` at the beginning of every
       * epoch.
       **/
      segmentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
       **/
      underConstruction: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Randomness>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    balances: {
      /**
       * The balance of an account.
       * 
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountData>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<BalanceLock>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Storage version of the pallet.
       * 
       * This is set to v2.0.0 for new networks.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<Balance>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    bounties: {
      /**
       * Bounties that have been made.
       **/
      bounties: AugmentedQuery<ApiType, (arg: BountyIndex | AnyNumber | Uint8Array) => Observable<Option<Bounty>>, [BountyIndex]> & QueryableStorageEntry<ApiType, [BountyIndex]>;
      /**
       * Bounty indices that have been approved but not yet funded.
       **/
      bountyApprovals: AugmentedQuery<ApiType, () => Observable<Vec<BountyIndex>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of bounty proposals that have been made.
       **/
      bountyCount: AugmentedQuery<ApiType, () => Observable<BountyIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The description of each bounty.
       **/
      bountyDescriptions: AugmentedQuery<ApiType, (arg: BountyIndex | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [BountyIndex]> & QueryableStorageEntry<ApiType, [BountyIndex]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    contracts: {
      /**
       * The subtrie counter.
       **/
      accountCounter: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A mapping between an original code hash and instrumented wasm code, ready for execution.
       **/
      codeStorage: AugmentedQuery<ApiType, (arg: CodeHash | string | Uint8Array) => Observable<Option<PrefabWasmModule>>, [CodeHash]> & QueryableStorageEntry<ApiType, [CodeHash]>;
      /**
       * The code associated with a given account.
       * 
       * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
       **/
      contractInfoOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<ContractInfo>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Current cost schedule for contracts.
       **/
      currentSchedule: AugmentedQuery<ApiType, () => Observable<Schedule>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Evicted contracts that await child trie deletion.
       * 
       * Child trie deletion is a heavy operation depending on the amount of storage items
       * stored in said trie. Therefore this operation is performed lazily in `on_initialize`.
       **/
      deletionQueue: AugmentedQuery<ApiType, () => Observable<Vec<DeletedContract>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A mapping from an original code hash to the original code, untouched by instrumentation.
       **/
      pristineCode: AugmentedQuery<ApiType, (arg: CodeHash | string | Uint8Array) => Observable<Option<Bytes>>, [CodeHash]> & QueryableStorageEntry<ApiType, [CodeHash]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    council: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Proposal>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Votes>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    democracy: {
      /**
       * A record of who vetoed what. Maps proposal hash to a possible existent block number
       * (until when it may not be resubmitted) and who vetoed it.
       **/
      blacklist: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<ITuple<[BlockNumber, Vec<AccountId>]>>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Record of all proposals that have been subject to emergency cancellation.
       **/
      cancellations: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<bool>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Those who have locked a deposit.
       * 
       * TWOX-NOTE: Safe, as increasing integer keys are safe.
       **/
      depositOf: AugmentedQuery<ApiType, (arg: PropIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[Vec<AccountId>, BalanceOf]>>>, [PropIndex]> & QueryableStorageEntry<ApiType, [PropIndex]>;
      /**
       * True if the last referendum tabled was submitted externally. False if it was a public
       * proposal.
       **/
      lastTabledWasExternal: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Accounts for which there are locks in action which may be removed at some point in the
       * future. The value is the block number at which the lock expires and may be removed.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<BlockNumber>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The lowest referendum index representing an unbaked referendum. Equal to
       * `ReferendumCount` if there isn't a unbaked referendum.
       **/
      lowestUnbaked: AugmentedQuery<ApiType, () => Observable<ReferendumIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The referendum to be tabled whenever it would be valid to table an external proposal.
       * This happens when a referendum needs to be tabled and one of two conditions are met:
       * - `LastTabledWasExternal` is `false`; or
       * - `PublicProps` is empty.
       **/
      nextExternal: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[Hash, VoteThreshold]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of hashes to the proposal preimage, along with who registered it and their deposit.
       * The block number is the block at which it was deposited.
       **/
      preimages: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<PreimageStatus>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * The number of (public) proposals that have been made so far.
       **/
      publicPropCount: AugmentedQuery<ApiType, () => Observable<PropIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The public proposals. Unsorted. The second item is the proposal's hash.
       **/
      publicProps: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[PropIndex, Hash, AccountId]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The next free referendum index, aka the number of referenda started so far.
       **/
      referendumCount: AugmentedQuery<ApiType, () => Observable<ReferendumIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Information concerning any given referendum.
       * 
       * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
       **/
      referendumInfoOf: AugmentedQuery<ApiType, (arg: ReferendumIndex | AnyNumber | Uint8Array) => Observable<Option<ReferendumInfo>>, [ReferendumIndex]> & QueryableStorageEntry<ApiType, [ReferendumIndex]>;
      /**
       * Storage version of the pallet.
       * 
       * New networks start with last version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Option<Releases>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * All votes for a particular voter. We store the balance for the number of votes that we
       * have recorded. The second item is the total amount of delegations, that will be added.
       * 
       * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
       **/
      votingOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Voting>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    elections: {
      /**
       * The present candidate list. A current member or runner-up can never enter this vector
       * and is always implicitly assumed to be a candidate.
       * 
       * Second element is the deposit.
       * 
       * Invariant: Always sorted based on account id.
       **/
      candidates: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId, BalanceOf]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The total number of vote rounds that have happened, excluding the upcoming one.
       **/
      electionRounds: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current elected members.
       * 
       * Invariant: Always sorted based on account id.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<SeatHolder>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current reserved runners-up.
       * 
       * Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
       * last (i.e. _best_) runner-up will be replaced.
       **/
      runnersUp: AugmentedQuery<ApiType, () => Observable<Vec<SeatHolder>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes and locked stake of a particular voter.
       * 
       * TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
       **/
      voting: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Voter>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    gameDaoControl: {
      /**
       * DAO by hash
       **/
      bodies: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Body>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Access model
       **/
      bodyAccess: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<ControlAccessModel>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * DAO by nonce
       **/
      bodyByNonce: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Hash>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
      /**
       * DAO mutable settings
       **/
      bodyConfig: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<BConfig>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Admin Controller of a body
       **/
      bodyController: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<AccountId>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Creator of a body
       **/
      bodyCreator: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<AccountId>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Membercount of a DAO
       **/
      bodyMemberCount: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<u64>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Members of a DAO
       **/
      bodyMembers: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<AccountId>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Member state for a DAO
       **/
      bodyMemberState: AugmentedQuery<ApiType, (arg: ITuple<[Hash, AccountId]> | [Hash | string | Uint8Array, AccountId | string | Uint8Array]) => Observable<ControlMemberState>, [ITuple<[Hash, AccountId]>]> & QueryableStorageEntry<ApiType, [ITuple<[Hash, AccountId]>]>;
      /**
       * Global DAO State
       **/
      bodyState: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<ControlState>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Treasury of a body
       **/
      bodyTreasury: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<AccountId>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * DAOs controlled by account
       **/
      controlledBodies: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<Hash>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Number of DAOs controlled by account
       **/
      controlledBodiesCount: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<u64>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * DAOs created by account
       **/
      createdBodies: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<Hash>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Number of DAOs created by account
       **/
      createdBodiesCount: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<u64>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Memberships by AccountId
       **/
      memberships: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<Hash>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * the goode olde nonce
       **/
      nonce: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    gameDaoCrowdfunding: {
      /**
       * Get Campaign Admin (supervision) by campaign id
       **/
      campaignAdmin: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<AccountId>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      campaignBalance: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Balance>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      campaignContribution: AugmentedQuery<ApiType, (arg: ITuple<[Hash, AccountId]> | [Hash | string | Uint8Array, AccountId | string | Uint8Array]) => Observable<Balance>, [ITuple<[Hash, AccountId]>]> & QueryableStorageEntry<ApiType, [ITuple<[Hash, AccountId]>]>;
      campaignContributors: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<AccountId>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      campaignContributorsCount: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<u64>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Max campaign block limit
       **/
      campaignMaxDuration: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Associated Body
       **/
      campaignOrg: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Hash>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Get Campaign Owner (body controller) by campaign id
       **/
      campaignOwner: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<AccountId>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Campaign
       **/
      campaigns: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Campaign>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      campaignsArray: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Hash>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * Campaigns ending in block x
       **/
      campaignsByBlock: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Vec<Hash>>, [BlockNumber]> & QueryableStorageEntry<ApiType, [BlockNumber]>;
      /**
       * campaigns related to an organisation
       **/
      campaignsByBody: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<Hash>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Get Campaigns for a certain state
       **/
      campaignsByState: AugmentedQuery<ApiType, (arg: FlowState | AnyNumber | Uint8Array) => Observable<Vec<Hash>>, [FlowState]> & QueryableStorageEntry<ApiType, [FlowState]>;
      /**
       * campaigns contributed by accountid
       **/
      campaignsContributed: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<Hash>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      campaignsContributedArray: AugmentedQuery<ApiType, (arg: ITuple<[AccountId, u64]> | [AccountId | string | Uint8Array, u64 | AnyNumber | Uint8Array]) => Observable<Hash>, [ITuple<[AccountId, u64]>]> & QueryableStorageEntry<ApiType, [ITuple<[AccountId, u64]>]>;
      campaignsContributedCount: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<u64>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      campaignsContributedIndex: AugmentedQuery<ApiType, (arg: ITuple<[AccountId, Hash]> | [AccountId | string | Uint8Array, Hash | string | Uint8Array]) => Observable<u64>, [ITuple<[AccountId, Hash]>]> & QueryableStorageEntry<ApiType, [ITuple<[AccountId, Hash]>]>;
      campaignsCount: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      campaignsIndex: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<u64>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      campaignsOwnedArray: AugmentedQuery<ApiType, (arg: ITuple<[AccountId, u64]> | [AccountId | string | Uint8Array, u64 | AnyNumber | Uint8Array]) => Observable<Hash>, [ITuple<[AccountId, u64]>]> & QueryableStorageEntry<ApiType, [ITuple<[AccountId, u64]>]>;
      campaignsOwnedCount: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<u64>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      campaignsOwnedIndex: AugmentedQuery<ApiType, (arg: ITuple<[AccountId, Hash]> | [AccountId | string | Uint8Array, Hash | string | Uint8Array]) => Observable<u64>, [ITuple<[AccountId, Hash]>]> & QueryableStorageEntry<ApiType, [ITuple<[AccountId, Hash]>]>;
      /**
       * Campaign state
       * 0 init, 1 active, 2 paused, 3 complete success, 4 complete failed, 5 authority lock
       **/
      campaignState: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<FlowState>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      nonce: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    gameDaoGovernance: {
      /**
       * The amount of currency that a project has used
       **/
      campaignBalanceUsed: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Balance>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      metadata: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<ProposalMetadata>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * The total number of proposals
       **/
      nonce: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      owners: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<AccountId>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * The number of people who approve a proposal
       **/
      proposalApprovers: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<u64>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * The number of people who deny a proposal
       **/
      proposalDeniers: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<u64>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Global status
       **/
      proposals: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Proposal>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * All proposals
       **/
      proposalsArray: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Hash>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * Proposals ending in a block
       **/
      proposalsByBlock: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Vec<Hash>>, [BlockNumber]> & QueryableStorageEntry<ApiType, [BlockNumber]>;
      /**
       * all proposals for a given context
       **/
      proposalsByContext: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<Hash>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Proposals by campaign / org
       **/
      proposalsByContextArray: AugmentedQuery<ApiType, (arg: ITuple<[Hash, u64]> | [Hash | string | Uint8Array, u64 | AnyNumber | Uint8Array]) => Observable<Hash>, [ITuple<[Hash, u64]>]> & QueryableStorageEntry<ApiType, [ITuple<[Hash, u64]>]>;
      proposalsByContextCount: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<u64>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      proposalsByContextIndex: AugmentedQuery<ApiType, (arg: ITuple<[Hash, Hash]> | [Hash | string | Uint8Array, Hash | string | Uint8Array]) => Observable<u64>, [ITuple<[Hash, Hash]>]> & QueryableStorageEntry<ApiType, [ITuple<[Hash, Hash]>]>;
      /**
       * Proposals by owner
       **/
      proposalsByOwnerArray: AugmentedQuery<ApiType, (arg: ITuple<[AccountId, u64]> | [AccountId | string | Uint8Array, u64 | AnyNumber | Uint8Array]) => Observable<Hash>, [ITuple<[AccountId, u64]>]> & QueryableStorageEntry<ApiType, [ITuple<[AccountId, u64]>]>;
      proposalsByOwnerCount: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<u64>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      proposalsByOwnerIndex: AugmentedQuery<ApiType, (arg: ITuple<[AccountId, Hash]> | [AccountId | string | Uint8Array, Hash | string | Uint8Array]) => Observable<u64>, [ITuple<[AccountId, Hash]>]> & QueryableStorageEntry<ApiType, [ITuple<[AccountId, Hash]>]>;
      /**
       * Proposals where voter participated
       **/
      proposalsByVoter: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<ITuple<[Hash, bool]>>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Total proposals voted on by voter
       **/
      proposalsByVoterCount: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<u64>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      proposalsCount: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Ack vs Nack
       **/
      proposalSimpleVotes: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<ITuple<[u64, u64]>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      proposalsIndex: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<u64>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Get the state of a proposal
       **/
      proposalStates: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<ProposalState>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Maximum time limit for a proposal
       **/
      proposalTimeLimit: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Voters per proposal
       **/
      proposalVoters: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<AccountId>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Voter count per proposal
       **/
      proposalVotes: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<u64>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Proposal voters and votes by proposal
       **/
      proposalVotesByVoters: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<ITuple<[AccountId, bool]>>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * User has voted on a proposal
       **/
      votedBefore: AugmentedQuery<ApiType, (arg: ITuple<[AccountId, Hash]> | [AccountId | string | Uint8Array, Hash | string | Uint8Array]) => Observable<bool>, [ITuple<[AccountId, Hash]>]> & QueryableStorageEntry<ApiType, [ITuple<[AccountId, Hash]>]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    gameDaoTangram: {
      /**
       * Owner of an Item
       **/
      accountForItem: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<AccountId>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Burned Token in system
       **/
      burned: AugmentedQuery<ApiType, () => Observable<BurnedIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Tangram Item
       **/
      item: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<TangramItem>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Retrieve an Item Hash by its indexes
       **/
      itemByIndex: AugmentedQuery<ApiType, (arg: ITuple<[RealmIndex, ClassIndex, ItemIndex]> | [RealmIndex | AnyNumber | Uint8Array, ClassIndex | AnyNumber | Uint8Array, ItemIndex | AnyNumber | Uint8Array]) => Observable<Hash>, [ITuple<[RealmIndex, ClassIndex, ItemIndex]>]> & QueryableStorageEntry<ApiType, [ITuple<[RealmIndex, ClassIndex, ItemIndex]>]>;
      /**
       * Tangram Class
       **/
      itemClass: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<TangramClass>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Metadata for an Item
       **/
      itemMetadata: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<TangramMetadata>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * All Items associated with an account
       **/
      itemsForAccount: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<Hash>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Max Items for respective Class
       **/
      maxItems: AugmentedQuery<ApiType, (arg: ITuple<[RealmIndex, ClassIndex]> | [RealmIndex | AnyNumber | Uint8Array, ClassIndex | AnyNumber | Uint8Array]) => Observable<u64>, [ITuple<[RealmIndex, ClassIndex]>]> & QueryableStorageEntry<ApiType, [ITuple<[RealmIndex, ClassIndex]>]>;
      /**
       * Current Class Index, individual per Realm
       **/
      nextClassIndex: AugmentedQuery<ApiType, (arg: RealmIndex | AnyNumber | Uint8Array) => Observable<ClassIndex>, [RealmIndex]> & QueryableStorageEntry<ApiType, [RealmIndex]>;
      /**
       * Current Item Index, individual per Class in its respective Realm
       **/
      nextItemIndex: AugmentedQuery<ApiType, (arg: ITuple<[RealmIndex, ClassIndex]> | [RealmIndex | AnyNumber | Uint8Array, ClassIndex | AnyNumber | Uint8Array]) => Observable<ItemIndex>, [ITuple<[RealmIndex, ClassIndex]>]> & QueryableStorageEntry<ApiType, [ITuple<[RealmIndex, ClassIndex]>]>;
      /**
       * Current Realm Index
       **/
      nextRealmIndex: AugmentedQuery<ApiType, () => Observable<RealmIndex>, []> & QueryableStorageEntry<ApiType, []>;
      ownerRealm: AugmentedQuery<ApiType, (arg: RealmIndex | AnyNumber | Uint8Array) => Observable<Hash>, [RealmIndex]> & QueryableStorageEntry<ApiType, [RealmIndex]>;
      /**
       * Get a Realm by its hash
       **/
      realm: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<TangramRealm>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Get a Realm by its index
       **/
      realmByIndex: AugmentedQuery<ApiType, (arg: RealmIndex | AnyNumber | Uint8Array) => Observable<Hash>, [RealmIndex]> & QueryableStorageEntry<ApiType, [RealmIndex]>;
      realmsForOwner: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<Hash>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      realmsForOwnerCount: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<u64>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Total Token in system
       **/
      total: AugmentedQuery<ApiType, () => Observable<TotalIndex>, []> & QueryableStorageEntry<ApiType, []>;
      totalForAccount: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<u64>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    grandpa: {
      /**
       * The number of changes (both in terms of keys and underlying economic responsibilities)
       * in the "set" of Grandpa validators from genesis.
       **/
      currentSetId: AugmentedQuery<ApiType, () => Observable<SetId>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * next block number where we can force a change.
       **/
      nextForced: AugmentedQuery<ApiType, () => Observable<Option<BlockNumber>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Pending change: (signaled at, scheduled change).
       **/
      pendingChange: AugmentedQuery<ApiType, () => Observable<Option<StoredPendingChange>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A mapping from grandpa set ID to the index of the *most recent* session for which its
       * members were responsible.
       * 
       * TWOX-NOTE: `SetId` is not under user control.
       **/
      setIdSession: AugmentedQuery<ApiType, (arg: SetId | AnyNumber | Uint8Array) => Observable<Option<SessionIndex>>, [SetId]> & QueryableStorageEntry<ApiType, [SetId]>;
      /**
       * `true` if we are currently stalled.
       **/
      stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[BlockNumber, BlockNumber]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * State of the current authority set.
       **/
      state: AugmentedQuery<ApiType, () => Observable<StoredState>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    identity: {
      /**
       * Information that is pertinent to identify the entity behind an account.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      identityOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<Registration>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The set of registrars. Not expected to get very big as can only be added through a
       * special origin (likely a council motion).
       * 
       * The index into this can be cast to `RegistrarIndex` to get a valid value.
       **/
      registrars: AugmentedQuery<ApiType, () => Observable<Vec<Option<RegistrarInfo>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Alternative "sub" identities of this account.
       * 
       * The first item is the deposit, the second is a vector of the accounts.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      subsOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[BalanceOf, Vec<AccountId>]>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The super-identity of an alternative "sub" identity together with its name, within that
       * context. If the account is not some other account's sub-identity, then just `None`.
       **/
      superOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<ITuple<[AccountId, Data]>>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    imOnline: {
      /**
       * For each session index, we keep a mapping of `ValidatorId<T>` to the
       * number of blocks authored by the given authority.
       **/
      authoredBlocks: AugmentedQuery<ApiType, (arg1: SessionIndex | AnyNumber | Uint8Array, arg2: ValidatorId | string | Uint8Array) => Observable<u32>, [SessionIndex, ValidatorId]> & QueryableStorageEntry<ApiType, [SessionIndex, ValidatorId]>;
      /**
       * The block number after which it's ok to send heartbeats in current session.
       * 
       * At the beginning of each session we set this to a value that should
       * fall roughly in the middle of the session duration.
       * The idea is to first wait for the validators to produce a block
       * in the current session, so that the heartbeat later on will not be necessary.
       **/
      heartbeatAfter: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current set of keys that may issue a heartbeat.
       **/
      keys: AugmentedQuery<ApiType, () => Observable<Vec<AuthorityId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * For each session index, we keep a mapping of `AuthIndex` to
       * `offchain::OpaqueNetworkState`.
       **/
      receivedHeartbeats: AugmentedQuery<ApiType, (arg1: SessionIndex | AnyNumber | Uint8Array, arg2: AuthIndex | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [SessionIndex, AuthIndex]> & QueryableStorageEntry<ApiType, [SessionIndex, AuthIndex]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    indices: {
      /**
       * The lookup from index to account.
       **/
      accounts: AugmentedQuery<ApiType, (arg: AccountIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId, BalanceOf, bool]>>>, [AccountIndex]> & QueryableStorageEntry<ApiType, [AccountIndex]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    lottery: {
      /**
       * The calls stored in this pallet to be used in an active lottery if configured
       * by `Config::ValidateCall`.
       **/
      callIndices: AugmentedQuery<ApiType, () => Observable<Vec<CallIndex>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The configuration for the current lottery.
       **/
      lottery: AugmentedQuery<ApiType, () => Observable<Option<LotteryConfig>>, []> & QueryableStorageEntry<ApiType, []>;
      lotteryIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Users who have purchased a ticket. (Lottery Index, Tickets Purchased)
       **/
      participants: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[u32, Vec<CallIndex>]>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Each ticket's owner.
       * 
       * May have residual storage from previous lotteries. Use `TicketsCount` to see which ones
       * are actually valid ticket mappings.
       **/
      tickets: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<AccountId>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Total number of tickets sold.
       **/
      ticketsCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    mmr: {
      /**
       * Hashes of the nodes in the MMR.
       * 
       * Note this collection only contains MMR peaks, the inner nodes (and leaves)
       * are pruned and only stored in the Offchain DB.
       **/
      nodes: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<Hash>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * Current size of the MMR (number of leaves).
       **/
      numberOfLeaves: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Latest MMR Root hash.
       **/
      rootHash: AugmentedQuery<ApiType, () => Observable<Hash>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    multisig: {
      calls: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[OpaqueCall, AccountId, BalanceOf]>>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
      /**
       * The set of open multisig operations.
       **/
      multisigs: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: U8aFixed | string | Uint8Array) => Observable<Option<Multisig>>, [AccountId, U8aFixed]> & QueryableStorageEntry<ApiType, [AccountId, U8aFixed]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    offences: {
      /**
       * A vector of reports of the same kind that happened at the same time slot.
       **/
      concurrentReportsIndex: AugmentedQuery<ApiType, (arg1: Kind | string | Uint8Array, arg2: OpaqueTimeSlot | string | Uint8Array) => Observable<Vec<ReportIdOf>>, [Kind, OpaqueTimeSlot]> & QueryableStorageEntry<ApiType, [Kind, OpaqueTimeSlot]>;
      /**
       * Deferred reports that have been rejected by the offence handler and need to be submitted
       * at a later time.
       **/
      deferredOffences: AugmentedQuery<ApiType, () => Observable<Vec<DeferredOffenceOf>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The primary structure that holds all offence records keyed by report identifiers.
       **/
      reports: AugmentedQuery<ApiType, (arg: ReportIdOf | string | Uint8Array) => Observable<Option<OffenceDetails>>, [ReportIdOf]> & QueryableStorageEntry<ApiType, [ReportIdOf]>;
      /**
       * Enumerates all reports of a kind along with the time they happened.
       * 
       * All reports are sorted by the time of offence.
       * 
       * Note that the actual type of this mapping is `Vec<u8>`, this is because values of
       * different types are not supported at the moment so we are doing the manual serialization.
       **/
      reportsByKindIndex: AugmentedQuery<ApiType, (arg: Kind | string | Uint8Array) => Observable<Bytes>, [Kind]> & QueryableStorageEntry<ApiType, [Kind]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    proxy: {
      /**
       * The announcements made by the proxy (key).
       **/
      announcements: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[Vec<ProxyAnnouncement>, BalanceOf]>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The set of account proxies. Maps the account which has delegated to the accounts
       * which are being delegated to, together with the amount held on deposit.
       **/
      proxies: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[Vec<ProxyDefinition>, BalanceOf]>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    randomnessCollectiveFlip: {
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    recovery: {
      /**
       * Active recovery attempts.
       * 
       * First account is the account to be recovered, and the second account
       * is the user trying to recover the account.
       **/
      activeRecoveries: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: AccountId | string | Uint8Array) => Observable<Option<ActiveRecovery>>, [AccountId, AccountId]> & QueryableStorageEntry<ApiType, [AccountId, AccountId]>;
      /**
       * The list of allowed proxy accounts.
       * 
       * Map from the user who can access it to the recovered account.
       **/
      proxy: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<AccountId>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The set of recoverable accounts and their recovery configuration.
       **/
      recoverable: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<RecoveryConfig>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    scheduler: {
      /**
       * Items to be executed, indexed by the block number that they should be executed on.
       **/
      agenda: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Vec<Option<Scheduled>>>, [BlockNumber]> & QueryableStorageEntry<ApiType, [BlockNumber]>;
      /**
       * Lookup from identity to the block number and index of the task.
       **/
      lookup: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<TaskAddress>>, [Bytes]> & QueryableStorageEntry<ApiType, [Bytes]>;
      /**
       * Storage version of the pallet.
       * 
       * New networks start with last version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    session: {
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<SessionIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Indices of disabled validators.
       * 
       * The set is cleared when `on_session_ending` returns a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The owner of a key. The key is the `KeyTypeId` + the encoded key.
       **/
      keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[KeyTypeId, Bytes]> | [KeyTypeId | AnyNumber | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<ValidatorId>>, [ITuple<[KeyTypeId, Bytes]>]> & QueryableStorageEntry<ApiType, [ITuple<[KeyTypeId, Bytes]>]>;
      /**
       * The next session keys for a validator.
       **/
      nextKeys: AugmentedQuery<ApiType, (arg: ValidatorId | string | Uint8Array) => Observable<Option<Keys>>, [ValidatorId]> & QueryableStorageEntry<ApiType, [ValidatorId]>;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[ValidatorId, Keys]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<ValidatorId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    society: {
      /**
       * The current bids, stored ordered by the value of the bid.
       **/
      bids: AugmentedQuery<ApiType, () => Observable<Vec<Bid>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current set of candidates; bidders that are attempting to become members.
       **/
      candidates: AugmentedQuery<ApiType, () => Observable<Vec<Bid>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The defending member currently being challenged.
       **/
      defender: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes for the defender.
       **/
      defenderVotes: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<SocietyVote>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The first member.
       **/
      founder: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The most primary from the most recently approved members.
       **/
      head: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The max number of members for the society at one time.
       **/
      maxMembers: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current set of members, ordered.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Pending payouts; ordered by block number, with the amount that should be paid out.
       **/
      payouts: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, BalanceOf]>>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Amount of our account balance that is specifically for the next round's bid(s).
       **/
      pot: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A hash of the rules of this society concerning membership. Can only be set once and
       * only by the founder.
       **/
      rules: AugmentedQuery<ApiType, () => Observable<Option<Hash>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The ongoing number of losing votes cast by the member.
       **/
      strikes: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<StrikeCount>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The set of suspended candidates.
       **/
      suspendedCandidates: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<ITuple<[BalanceOf, BidKind]>>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The set of suspended members.
       **/
      suspendedMembers: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<bool>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Double map from Candidate -> Voter -> (Maybe) Vote.
       **/
      votes: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: AccountId | string | Uint8Array) => Observable<Option<SocietyVote>>, [AccountId, AccountId]> & QueryableStorageEntry<ApiType, [AccountId, AccountId]>;
      /**
       * Members currently vouching or banned from vouching again
       **/
      vouching: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<VouchingStatus>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    staking: {
      /**
       * The active era information, it holds index and start.
       * 
       * The active era is the era being currently rewarded. Validator set of this era must be
       * equal to [`SessionInterface::validators`].
       **/
      activeEra: AugmentedQuery<ApiType, () => Observable<Option<ActiveEraInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map from all locked "stash" accounts to the controller account.
       **/
      bonded: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<AccountId>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * A mapping from still-bonded eras to the first session index of that era.
       * 
       * Must contains information for eras for the range:
       * `[active_era - bounding_duration; active_era]`
       **/
      bondedEras: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[EraIndex, SessionIndex]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The amount of currency given to reporters of a slash event which was
       * canceled by extraordinary circumstances (e.g. governance).
       **/
      canceledSlashPayout: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current era index.
       * 
       * This is the latest planned era, depending on how the Session pallet queues the validator
       * set, it might be active or not.
       **/
      currentEra: AugmentedQuery<ApiType, () => Observable<Option<EraIndex>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The earliest era for which we have a pending, unapplied slash.
       **/
      earliestUnappliedSlash: AugmentedQuery<ApiType, () => Observable<Option<EraIndex>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Flag to control the execution of the offchain election. When `Open(_)`, we accept
       * solutions to be submitted.
       **/
      eraElectionStatus: AugmentedQuery<ApiType, () => Observable<ElectionStatus>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Rewards for the last `HISTORY_DEPTH` eras.
       * If reward hasn't been set or has been removed then 0 reward is returned.
       **/
      erasRewardPoints: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<EraRewardPoints>, [EraIndex]> & QueryableStorageEntry<ApiType, [EraIndex]>;
      /**
       * Exposure of validator at era.
       * 
       * This is keyed first by the era index to allow bulk deletion and then the stash account.
       * 
       * Is it removed after `HISTORY_DEPTH` eras.
       * If stakers hasn't been set or has been removed then empty exposure is returned.
       **/
      erasStakers: AugmentedQuery<ApiType, (arg1: EraIndex | AnyNumber | Uint8Array, arg2: AccountId | string | Uint8Array) => Observable<Exposure>, [EraIndex, AccountId]> & QueryableStorageEntry<ApiType, [EraIndex, AccountId]>;
      /**
       * Clipped Exposure of validator at era.
       * 
       * This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
       * `T::MaxNominatorRewardedPerValidator` biggest stakers.
       * (Note: the field `total` and `own` of the exposure remains unchanged).
       * This is used to limit the i/o cost for the nominator payout.
       * 
       * This is keyed fist by the era index to allow bulk deletion and then the stash account.
       * 
       * Is it removed after `HISTORY_DEPTH` eras.
       * If stakers hasn't been set or has been removed then empty exposure is returned.
       **/
      erasStakersClipped: AugmentedQuery<ApiType, (arg1: EraIndex | AnyNumber | Uint8Array, arg2: AccountId | string | Uint8Array) => Observable<Exposure>, [EraIndex, AccountId]> & QueryableStorageEntry<ApiType, [EraIndex, AccountId]>;
      /**
       * The session index at which the era start for the last `HISTORY_DEPTH` eras.
       * 
       * Note: This tracks the starting session (i.e. session index when era start being active)
       * for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
       **/
      erasStartSessionIndex: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<Option<SessionIndex>>, [EraIndex]> & QueryableStorageEntry<ApiType, [EraIndex]>;
      /**
       * The total amount staked for the last `HISTORY_DEPTH` eras.
       * If total hasn't been set or has been removed then 0 stake is returned.
       **/
      erasTotalStake: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<BalanceOf>, [EraIndex]> & QueryableStorageEntry<ApiType, [EraIndex]>;
      /**
       * Similar to `ErasStakers`, this holds the preferences of validators.
       * 
       * This is keyed first by the era index to allow bulk deletion and then the stash account.
       * 
       * Is it removed after `HISTORY_DEPTH` eras.
       **/
      erasValidatorPrefs: AugmentedQuery<ApiType, (arg1: EraIndex | AnyNumber | Uint8Array, arg2: AccountId | string | Uint8Array) => Observable<ValidatorPrefs>, [EraIndex, AccountId]> & QueryableStorageEntry<ApiType, [EraIndex, AccountId]>;
      /**
       * The total validator era payout for the last `HISTORY_DEPTH` eras.
       * 
       * Eras that haven't finished yet or has been removed doesn't have reward.
       **/
      erasValidatorReward: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<Option<BalanceOf>>, [EraIndex]> & QueryableStorageEntry<ApiType, [EraIndex]>;
      /**
       * Mode of era forcing.
       **/
      forceEra: AugmentedQuery<ApiType, () => Observable<Forcing>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of eras to keep in history.
       * 
       * Information is kept for eras in `[current_era - history_depth; current_era]`.
       * 
       * Must be more than the number of eras delayed by session otherwise. I.e. active era must
       * always be in history. I.e. `active_era > current_era - history_depth` must be
       * guaranteed.
       **/
      historyDepth: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
       * easy to initialize and the performance hit is minimal (we expect no more than four
       * invulnerables) and restricted to testnets.
       **/
      invulnerables: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if the current **planned** session is final. Note that this does not take era
       * forcing into account.
       **/
      isCurrentSessionFinal: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map from all (unlocked) "controller" accounts to the info regarding the staking.
       **/
      ledger: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<StakingLedger>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Minimum number of staking participants before emergency conditions are imposed.
       **/
      minimumValidatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The map from nominator stash key to the set of stash keys of all validators to nominate.
       **/
      nominators: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<Nominations>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * All slashing events on nominators, mapped by era to the highest slash value of the era.
       **/
      nominatorSlashInEra: AugmentedQuery<ApiType, (arg1: EraIndex | AnyNumber | Uint8Array, arg2: AccountId | string | Uint8Array) => Observable<Option<BalanceOf>>, [EraIndex, AccountId]> & QueryableStorageEntry<ApiType, [EraIndex, AccountId]>;
      /**
       * Where the reward payment should be made. Keyed by stash.
       **/
      payee: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<RewardDestination>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The next validator set. At the end of an era, if this is available (potentially from the
       * result of an offchain worker), it is immediately used. Otherwise, the on-chain election
       * is executed.
       **/
      queuedElected: AugmentedQuery<ApiType, () => Observable<Option<ElectionResult>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The score of the current [`QueuedElected`].
       **/
      queuedScore: AugmentedQuery<ApiType, () => Observable<Option<ElectionScore>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Slashing spans for stash accounts.
       **/
      slashingSpans: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<SlashingSpans>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The percentage of the slash that is distributed to reporters.
       * 
       * The rest of the slashed value is handled by the `Slash`.
       **/
      slashRewardFraction: AugmentedQuery<ApiType, () => Observable<Perbill>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Snapshot of nominators at the beginning of the current election window. This should only
       * have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
       **/
      snapshotNominators: AugmentedQuery<ApiType, () => Observable<Option<Vec<AccountId>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Snapshot of validators at the beginning of the current election window. This should only
       * have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
       **/
      snapshotValidators: AugmentedQuery<ApiType, () => Observable<Option<Vec<AccountId>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Records information about the maximum slash of a stash within a slashing span,
       * as well as how much reward has been paid out.
       **/
      spanSlash: AugmentedQuery<ApiType, (arg: ITuple<[AccountId, SpanIndex]> | [AccountId | string | Uint8Array, SpanIndex | AnyNumber | Uint8Array]) => Observable<SpanRecord>, [ITuple<[AccountId, SpanIndex]>]> & QueryableStorageEntry<ApiType, [ITuple<[AccountId, SpanIndex]>]>;
      /**
       * True if network has been upgraded to this version.
       * Storage version of the pallet.
       * 
       * This is set to v5.0.0 for new networks.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * All unapplied slashes that are queued for later.
       **/
      unappliedSlashes: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<Vec<UnappliedSlash>>, [EraIndex]> & QueryableStorageEntry<ApiType, [EraIndex]>;
      /**
       * The ideal number of staking participants.
       **/
      validatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The map from (wannabe) validator stash key to the preferences of that validator.
       **/
      validators: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ValidatorPrefs>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * All slashing events on validators, mapped by era to the highest slash proportion
       * and slash value of the era.
       **/
      validatorSlashInEra: AugmentedQuery<ApiType, (arg1: EraIndex | AnyNumber | Uint8Array, arg2: AccountId | string | Uint8Array) => Observable<Option<ITuple<[Perbill, BalanceOf]>>>, [EraIndex, AccountId]> & QueryableStorageEntry<ApiType, [EraIndex, AccountId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<AccountId>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountInfo>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Hash>, [BlockNumber]> & QueryableStorageEntry<ApiType, [BlockNumber]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<ConsumedWeight>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<DigestOf>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<EventIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Events deposited for the current block.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<EventRecord>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, EventIndex]>>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<Phase>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<LastRuntimeUpgradeInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<Hash>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToDualRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    technicalCommittee: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Proposal>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Votes>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    technicalMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    timestamp: {
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<Moment>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    tips: {
      /**
       * Simple preimage lookup from the reason's hash to the original data. Again, has an
       * insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
       **/
      reasons: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Bytes>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
       * This has the insecure enumerable hash function since the key itself is already
       * guaranteed to be a secure hash.
       **/
      tips: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<OpenTip>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<Multiplier>, []> & QueryableStorageEntry<ApiType, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    treasury: {
      /**
       * Proposal indices that have been approved but not yet awarded.
       **/
      approvals: AugmentedQuery<ApiType, () => Observable<Vec<ProposalIndex>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of proposals that have been made.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<ProposalIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals that have been made.
       **/
      proposals: AugmentedQuery<ApiType, (arg: ProposalIndex | AnyNumber | Uint8Array) => Observable<Option<TreasuryProposal>>, [ProposalIndex]> & QueryableStorageEntry<ApiType, [ProposalIndex]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    vesting: {
      /**
       * Information regarding the vesting of a given account.
       **/
      vesting: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<VestingInfo>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    zeroSense: {
      /**
       * the goode olde nonce
       **/
      nonce: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A Sense Entity
       **/
      sense: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Entity>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * REP across the metaverse
       **/
      senseRep: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<EntityProperty>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Trust score across the metaverse
       **/
      senseTrust: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<EntityProperty>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * XP across the metaverse
       **/
      senseXp: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<EntityProperty>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
    [key: string]: QueryableModuleStorage<ApiType>;
  }
}
