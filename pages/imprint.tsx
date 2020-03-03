import * as React from 'react'

import styled from 'styled-components'
import { Flex, Box } from 'rebass/styled-components'
import Layout from 'layouts'
import { Container, H2, H3 } from 'components'

const Page = () => (
	<Layout>
		<Container fill>
			<Flex flexDirection="row" flexWrap="wrap" px={4}>
				<Box width={[1, 1, 1 / 2]} p={[2, 4]}>
					<H2>Imprint</H2>
					<p>
						ZERO.IO
						<br />
						gameDAO
						<br />
						<br />
						ONE.IO GmbH
						<br />
						Sihlquai 131
						<br />
						CH-8005 Zurich
						<br />
						Switzerland
						<br />
					</p>
				</Box>
				<Box width={[1, 1, 1 / 2]} p={[2, 4]}>
					<H2>Disclaimer</H2>
					<H3>1. Copyrights</H3>
					<p>
						All information and design elements provided on the domain zero.io are protected by copyright.
					</p>
					<H3>2. Disclaimer of liability</H3>
					<p>
						The use of these pages is at your own risk. zero.io is not liable for direct or indirect damages
						that may result from the access or use of these pages. zero.io regularly checks and updates the
						information on its websites. Despite this care, data may have changed. No liability or guarantee
						can be assumed for the topicality, correctness or completeness of the information provided.
					</p>
					<H3>3. Linking</H3>
					<p>
						zero.io assumes no responsibility for the content of websites that can be accessed via links
						from our pages. Any access to other websites is at the user’s own risk.
					</p>
					<H3>4. Reproduction</H3>
					<p>
						Any duplication of the texts, pictures and graphics provided on these pages requires the express
						permission of zero.io or the author in written form.
					</p>
					<p>
						The author’s copyright remains unaffected. The right of use lies with the publisher and may not
						be passed on to third parties without written permission. All texts without reference to the
						author are subject to the copyright of the publisher. Any reproduction on other electronic and
						non-electronic media is also prohibited.
					</p>
				</Box>
			</Flex>
		</Container>
	</Layout>
)

export default Page
