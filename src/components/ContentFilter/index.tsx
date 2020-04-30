import React, { useState } from 'react'
import styled from 'styled-components'

import { Flex, Box, Card, Heading, Text, Image } from 'rebass/styled-components'
import { Label, Select } from '@rebass/forms/styled-components'
import { Border, H1, H2, H3, Link, Space, Container, Newsletter, Button } from 'components'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const GET_PROJECTS_ALL = gql`
	query getCurrentProjects($limit: Int!, $offset: Int!) {
		projects(order_by: { project_raise_start: desc }, limit: $limit, offset: $offset) {
			project_name
			project_pitch
			project_id
			project_image
			project_raise_start
			project_pitch_key
			funding_wallet
		}
	}
`

const CheckBtnWrapper = styled.div`
	background-color: white;
	border: 2px solid white;
	color: black;

	overflow: auto;
	float: left;

	:hover {
		background-color: black;
		color: white;
		overflow: auto;
		float: left;
	}

	label {
		float: left;
		text-align: center;
	}

	label span {
		text-align: center;
		font-size: 10px;
		padding: 1em 0;
		display: block;
	}

	label input {
		position: absolute;
		top: -20px;
	}

	input:checked + span {
		background-color: #0f0;
		color: #000;
	}
`
const CheckBtn = (props) => (
	<CheckBtnWrapper>
		<label>
			<Box p={2} mr={4}>
				<input type="checkbox" value={props.value} />
				<span>{props.children}</span>
			</Box>
		</label>
	</CheckBtnWrapper>
)

const SearchWrapper = styled.div`
	background-color: rgba(255, 255, 255, 0.25);
`

const Search = (props) => {
	// implement filters:

	// country
	const countries = [
		{ name: 'Germany', key: 'DE' },
		{ name: 'Austria', key: 'AT' },
		{ name: 'Switzerland', key: 'CH' },
		{ name: 'France', key: 'FR' },
		{ name: 'Italy', key: 'IT' },
		{ name: 'Spain', key: 'ES' },
		{ name: 'Poland', key: 'PL' },
	]

	// funding category
	const funding_utilities = [
		{ name: 'Grant', key: 'grant' },
		{ name: 'Lending', key: 'lending' },
		{ name: 'Shares', key: 'shares' },
		{ name: 'Prepaid', key: 'prepaid' },
	]

	// funding round open

	// free text

	// tags

	return (
		<Flex flexDirection="row" flexWrap="wrap">
			<Box width={1} px={2}>
				<H2>Filter</H2>
			</Box>

			<Box width={1} pr={2}>
				<H3>Countries</H3>
				<fieldset>
					<CheckBtn>Hello</CheckBtn>

					{Object.entries(countries).map(([key, country]) => (
						<CheckBtn name="country" value={key}>
							{country.name}
						</CheckBtn>
					))}
				</fieldset>
			</Box>

			<Box width={1 / 3} pr={2}>
				<H3>Type</H3>
				<Select id="funding_utilities" name="funding_utilities" defaultValue={['Grant']} multiple variant="smallSelector">
					{Object.entries(funding_utilities).map(([key, util]) => (
						<option key={key}>{util.name}</option>
					))}
				</Select>
			</Box>
		</Flex>
	)
}

export default Search
