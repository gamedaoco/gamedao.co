import { useRouter } from 'next/router'
import mixpanel from 'mixpanel-browser'
import { MIXPANEL, DEV } from 'src/config/env'

const production = !DEV

const actions = {
	init: async () => {
		if ( production )
			mixpanel.init(
				MIXPANEL,
				{ api_host: "https://api.mixpanel.com" }
			)
	},
	identify: async (id) => {
		if (production) mixpanel.identify(id)
	},
	alias: async (id) => {
		if (production) mixpanel.alias(id)
	},
	track: async (name, props) => {
		if (production) mixpanel.track(name, props)
	},
	people: {
		set: async (props) => {
			if (production) mixpanel.people.set(props)
		},
	},
}

export const Tracker = actions
