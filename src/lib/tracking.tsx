import mixpanel from 'mixpanel-browser'
import { MIXPANEL, DEV } from 'src/config/env'

const production = !DEV
if ( production ) mixpanel.init(MIXPANEL)

const actions = {
	identify: (id) => {
		if (production) mixpanel.identify(id)
	},
	alias: (id) => {
		if (production) mixpanel.alias(id)
	},
	track: (name, props) => {
		if (production) mixpanel.track(name, props)
	},
	people: {
		set: (props) => {
			if (production) mixpanel.people.set(props)
		},
	},
}

export const Mixpanel = actions
