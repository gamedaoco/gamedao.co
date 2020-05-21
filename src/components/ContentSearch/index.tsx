import { useState } from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass/styled-components'
import { Input } from '@rebass/forms/styled-components'
import { Border, H1, H2, H3, Link, Space, Container, Newsletter, Button, ContentFilter, ContentSearch } from 'components'

export const Component = (props) => {
	const [query, updateQuery] = useState('')

	return (
		<Flex flexDirection="row" flexWrap="wrap">
			<Box width={1}>
				<H2>Search</H2>
				<Input id="search" name="search" type="search" placeholder="search query" onChange={updateQuery} />
			</Box>
		</Flex>
	)
}

export default Component
