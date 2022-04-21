import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Flex, Box, Heading, Text } from 'rebass/styled-components'
import { H1, Link, Intro, Container, ContentGrid } from 'components'

import img from 'public/img/1.png'
import logo from 'public/z-ctrl-45-wht.svg'

import { IoIosArrowRoundDown } from 'react-icons/io'

const Page = () => {
	const [query, setQuery] = useState(``)

	return (
		<Container>
			<Flex flexDirection="row" flexWrap="wrap" px={4}>
				<Box width={1} px={2}>
					<H1>Open Campaigns</H1>
				</Box>
			</Flex>
			<Flex id="content" flexDirection="row" flexWrap="wrap" color="rgba(255,255,255,.65)">
				<Box width={[1]} px={[2, 4]} py={[2, 4]}>
					<ContentGrid />
				</Box>
			</Flex>
		</Container>
	)
}

export default Page
