#!/bin/bash
# kudos to dappforce / subsocial

echo "Patch Polkadot JS files with 'window'"
cp -rf ./patch/polkadot-ext.js ./node_modules/@polkadot/extension-dapp/index.js