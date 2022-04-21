import { useAppContext } from 'src/context/AppContext'
import { Flex, Box, Text } from 'rebass/styled-components'

// logging

import { Logger } from 'src/lib/log'
const log = Logger('$NOTE')

const Notification = () => {
	const { state } = useAppContext()
	const { notifications } = state.app

	if (notifications === undefined || notifications.length == 0) return null

	return (
		<Flex flexDirection="row" flexWrap="wrap">
			<Box width={[1]} px={[4, 6]}>
				{notifications &&
					notifications.map((note) => {
						log.info(note.message)
						return (
							<Text textAlign="left" fontSize={[1]} fontWeight={300} p={3} backgroundColor={'darkgreen'}>
								{note.message}
							</Text>
						)
					})}
			</Box>
		</Flex>
	)
}

export default Notification
