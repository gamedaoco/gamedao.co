/**
           _______________________________ ________
           \____    /\_   _____/\______   \\_____  \
             /     /  |    __)_  |       _/ /   |   \
            /     /_  |        \ |    |   \/    |    \
           /_______ \/_______  / |____|_  /\_______  /
                   \/        \/         \/         \/
           Z  E  R  O          T E C H N O L O G I E S
           © C O P Y R I O T   2 0 7 5   Z E R O . I O
**/

import { useContext } from 'react'
import { AppContext } from 'src/context/AppContext'

import { Flex, Box } from 'rebass/styled-components'
import Layout from 'layouts'
// import App from 'containers/Crowdfunding'

const Page = () => {
	const { state } = useContext(AppContext)

	return (
		<Layout>
			<Flex flexDirection="row" flexWrap="wrap" px={4}>
				<Box width={[1]} p={[2, 4]}>
					<h1>DAO</h1>
				</Box>
			</Flex>
		</Layout>
	)
}

export default Page
