// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import * as definitions from './definitions'

export const allDefinitions = {
  ...definitions
}

export const registryTypes = Object.values(allDefinitions).map(({ types }) => types).reduce((all, types) => Object.assign(all, types), {});
