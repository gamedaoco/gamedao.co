/**
		   _______________________________ ________
		   \____    /\_   _____/\______   \\_____  \
			 /     /  |    __)_  |       _/ /   |   \
			/     /_  |        \ |    |   \/    |    \
		   /_______ \/_______  / |____|_  /\_______  /
				   \/        \/         \/         \/
		   Z  E  R  O  .  I  O     N  E  T  W  O  R  K
		   © C O P Y R I O T   2 0 7 5   Z E R O . I O
**/

import * as React from 'react'

import { Flex, Box } from 'rebass/styled-components'
import Layout from 'layouts'
import { Container, H2, H3 } from 'components'

const Page = () => (
	<Layout>
		<Container>
			<Flex flexDirection="row" flexWrap="wrap" px={4}>
				<Box width={[1, 1, 1 / 2]} p={[2, 4]}>
					<H2>Imprint</H2>
					<p>
						GameDAO AG
						<br />
						<br />
						Vaduz, Liechtenstein
						<br />
						Switzerland
						<br />
					</p>
				</Box>
				<Box width={[1, 1, 1 / 2]} p={[2, 4]}>
					<H2>Disclaimer</H2>
					<H3>1. Copyrights</H3>
					<p>
						All information and design elements provided on the domain gamedao.co and its related publications are protected by copyright law.
					</p>
					<H3>2. Disclaimer of liability</H3>
					<p>
						The use of these pages is at your own risk. gamedao.co is not liable for direct or indirect damages that may result from the access or use
						of these pages. gamedao.co regularly checks and updates the information on its websites. Despite this care, data may have changed. No
						liability or guarantee can be assumed for the topicality, correctness or completeness of the information provided.
					</p>
					<H3>3. Linking</H3>
					<p>
						gamedao.co assumes no responsibility for the content of websites that can be accessed via links from our pages. Any access to other
						websites is at the user’s own risk.
					</p>
					<H3>4. Reproduction</H3>
					<p>
						Any duplication of the texts, pictures and graphics provided on these pages requires the express permission of gamedao.co or the author in
						written form.
					</p>
					<p>
						The author’s copyright remains unaffected. The right of use lies with the publisher and may not be passed on to third parties without
						written permission. All texts without reference to the author are subject to the copyright of the publisher. Any reproduction on other
						electronic and non-electronic media is also prohibited.
					</p>
				</Box>
			</Flex>
		</Container>
	</Layout>
)

export default Page
