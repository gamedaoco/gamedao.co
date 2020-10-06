import dynamic from 'next/dynamic'

export const DynamicEntry = dynamic(
	() => {
		return import('./Root')
	},
	{ ssr: false }
)

export default DynamicEntry
