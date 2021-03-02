import { createStore } from './'
import { ApiPromise } from '@polkadot/api'
import { Logger } from 'src/lib/log'

const storeName = 'substrate'
const store = createStore(storeName)
const log = Logger(`$STORE.${storeName}`)

const keyMetadata = 'metadata'

type Metadata = {
	key: string
	value: string
}

type MetadataRecord = Record<string, string>

//

export async function cacheMetadata(api?: ApiPromise): Promise<void> {
	if (!api) {
		log.error('Network API is undefined')
		return
	}
	if (!api.isReady) {
		log.error('Network API is not ready')
		return
	}

	const genesisHash = api.genesisHash
	const { specVersion } = api.runtimeVersion
	const key = `${genesisHash}-${specVersion}`
	const value = api.runtimeMetadata.toHex()
	await setMetadata({ key, value })
	log.info(`metadata cached locally. Metadata key: ${key}`)
}

/**
 * Metadata `key` consists of `${genesisHash}-${runtimeVersion.specVersion}`.
 * Metadata `value` is a hex representation of metadata.
 */

async function setMetadata(metadata: Metadata): Promise<void> {
	try {
		await store.setItem(keyMetadata, metadata)
	} catch (err) {
		log.error(`Failed to save metadata. ${err}`)
	}
}

export async function getMetadataRecord(): Promise<MetadataRecord | undefined> {
	const cachedMetadata = await getMetadata()
	if (!cachedMetadata) return undefined

	return { [cachedMetadata.key]: cachedMetadata.value }
}

export async function getMetadata(): Promise<Metadata | undefined> {
	try {
		const metadata = (await store.getItem(keyMetadata)) as Metadata

		if (!metadata) throw new Error('Metadata is empty')
		if (metadata.key.length === 0) throw new Error('Metadata key is empty')
		if (metadata.value.length === 0) throw new Error('Metadata value is empty')

		log.info(`Metadata found in local cache. Metadata key: ${metadata.key}`)
		return metadata
	} catch (err) {
		log.warn(`Failed to get metadata. ${err}`)
		return undefined
	}
}
