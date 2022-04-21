import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const Component = (props) => (
	<Dimmer active>
		<Loader size="small">{props.content}</Loader>
	</Dimmer>
)

export default Component
