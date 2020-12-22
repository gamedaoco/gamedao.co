import localForage from 'localforage'

export const store = (name: string) =>
	localForage.createInstance({
		name: 'gamedao',
		name,
	})
