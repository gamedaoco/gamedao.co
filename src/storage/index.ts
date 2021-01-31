// localForage is a fast and simple storage library for JavaScript.
// localForage improves the offline experience of your web app
// by using asynchronous storage (IndexedDB or WebSQL)
// with a simple, localStorage-like API.

import localForage from 'localforage'

export const createStore = ( storeName: string ) =>
	localForage.createInstance({ name: 'gamedao', storeName })
