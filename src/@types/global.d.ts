declare module '@rebass/grid'
declare module '@rebass/components'
declare module 'aws-amplify-react'
declare module 'next-page-transitions'

interface Window {
	__REDUX_DEVTOOLS_EXTENSION__: any
	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
	__REACT_DEVTOOLS_GLOBAL_HOOK__: any
}
declare module '*.png' {
	const resource: string
	export = resource
}
declare module '*.svg' {
	const resource: string
	export = resource
}
declare module '*.css' {
	const resource: any
	export = resource
}
declare module '*.pcss' {
	const resource: string
	export = resource
}
declare module '*.json' {
	const resource: any
	export = resource
}

declare namespace NodeJS {
	interface Process {
		browser: boolean
	}
	// interface Global {
	// 	document: Document;
	// 	window: Window;
	// }
}
// declare var global: Global;
