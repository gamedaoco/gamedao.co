import React from 'react'
import { Dimmer, Message } from 'semantic-ui-react'

const Component = (props) => (
	<Dimmer active>
		<Message negative compact floating header="Error connecting to Network" content={`${JSON.stringify(props.content)}`} />
	</Dimmer>
)

export default Component
