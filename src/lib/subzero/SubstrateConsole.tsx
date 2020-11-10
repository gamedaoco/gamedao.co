import { useEffect } from 'react'
import { useSubstrate } from './useSubstrate'
import { ApiPromise } from '@polkadot/api'
import { Keyring } from '@polkadot/ui-keyring'

type WindowSubstrate = {
	api?: ApiPromise
	keyring?: Keyring
	util?: any
	crypto?: any
}

const getWindowSubstrate = (): WindowSubstrate => {
	let substrate = (window as any)?.substrate
	if (!substrate) {
		substrate = {} as WindowSubstrate
		(window as any).substrate = substrate
	}
	return substrate
}

export function SubstrateConsole () {
	const { endpoint, api, apiState, keyring, keyringState } = useSubstrate()

	const addApi = () => {
		if (window && apiState === 'READY') {
			getWindowSubstrate().api = api
			console.info('[✓] window.substrate.api')
		}
	}

	const addKeyring = () => {
		if (window && keyringState === 'READY') {
			getWindowSubstrate().keyring = keyring
			console.info('[✓] window.substrate.keyring')
		}
	}

	const addUtilAndCrypto = () => {
		if (window) {
			const substrate = getWindowSubstrate()

			substrate.util = require('@polkadot/util')
			console.info('[✓] window.substrate.util')

			substrate.crypto = require('@polkadot/util-crypto');
			console.info('[✓] window.substrate.crypto')
		}
	}

	useEffect(() => {
		addApi()
	}, [ endpoint?.toString(), apiState ])

	useEffect(() => {
		addKeyring()
	}, [ keyringState ])

	useEffect(() => {
		addUtilAndCrypto()
	}, [ true ])

	return null
}

export default SubstrateConsole
