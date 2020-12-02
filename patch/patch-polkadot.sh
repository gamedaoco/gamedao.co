#!/bin/bash
# kudos to dappforce / subsocial

echo "Patching PolkadotJS files..."
cp -rf ./patch/polkadot-ext.js ./node_modules/@polkadot/extension-dapp/index.js