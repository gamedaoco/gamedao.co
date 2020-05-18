interface Fathom {
	(...args: any[]): void
	q?: Array<IArguments>
}

declare global {
	interface Window {
		fathom: Fathom
	}
}

const getFathom = (): Fathom => {
	return (window.fathom =
		window.fathom ||
		function() {
			(window.fathom.q = window.fathom.q || []).push(arguments)
		})
}

export const load = (url = '//cdn.usefathom.com/tracker.js'): void => {

	if (window) {

		window.fathom =
			window.fathom ||
			function() {
				(window.fathom.q = window.fathom.q || []).push(arguments)
			}
		let tracker = document.createElement('script')
		let firstScript = document.getElementsByTagName('script')[0]
		tracker.defer = true
		tracker.setAttribute('site', 'XLUUAYWU')
		tracker.setAttribute('spa', 'auto')
		tracker.src = url
		if ( firstScript.parentNode ) firstScript.parentNode.insertBefore(tracker, firstScript)

	}
}

export const setSiteId = (siteId: string): void => {
	let fathom = getFathom()
	fathom('set', 'siteId', siteId)
}

export const trackPageview = (): void => {
	let fathom = getFathom()
	fathom('trackPageview')
}

export const trackGoal = (id: string, cents: number) => {
	let fathom = getFathom()
	fathom('trackGoal', id, cents)
}

export default {
	load,
	setSiteId,
	trackPageview,
	trackGoal
}
