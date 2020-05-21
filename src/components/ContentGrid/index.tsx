import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from 'src/hooks/AppContext'

import styled from 'styled-components'

import { Flex, Box, Card, Heading, Text, Image } from 'rebass/styled-components'
import { Label, Select } from '@rebass/forms/styled-components'
import { Border, H1, H2, H3, Link, Space, Container, Newsletter, Button, ContentFilter, ContentSearch } from 'components'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { GET_PROJECTS_TOP, GET_PROJECTS_ALL } from 'queries'

const bgColor = '#' + Math.floor(Math.random() * 16777215).toString(16)

const Tag = styled.button`
	float: left;
	margin-top: 5px;
	margin-right: 5px;
	align: center;
	height: 12px;
	width: auto;
	padding: 2px 4px;
	font-weight: 400;
	font-size: 6px;
	text-styling: uppercase;
	letter-spacing: 1px;
	color: black;
	background-color: ${bgColor};
	border: none;
	border-radius: 2px;
	:hover {
		background-color: white;
	}
`

interface IProject {
	id: string
	funding_category: string
	funding_contact: string
	funding_wallet: string
	project_contract_id: string
	project_country: string
	project_id: string
	project_image: string
	project_intro: string
	project_investors: number
	project_name: string
	project_pitch: string
	project_pitch_key: string
	project_prospect_id: string
	project_raise_amount: number
	project_raise_end: Date
	project_raise_open: string
	project_raise_start: Date
	project_team: string
}

interface IGridContent {
	projects?: IProject[]
}

interface IGridParams {
	limit?: number
	offset?: number
}

const GridContentAll = (props) => {
	const [pageOffset, setPageOffset] = useState(0)
	const [pageSize, setPageSize] = useState(12)

	const { loading, error, data } = useQuery<IGridContent, IGridParams>(GET_PROJECTS_ALL, {
		variables: {
			limit: pageSize,
			offset: pageOffset,
		},
	})

	if (loading) return <>Loading...</>

	if (error) return <>Error: ${error.message}</>

	if (data) {
		const projects = data.projects
		return (
			<>
				{projects &&
					projects.map((item, index) => (
						<Box width={[1, 1 / 2, 1 / 4]} mb={4} px={1} key={index}>
							<GridItem
								key={item.project_id}
								href={`/project/${item.project_name}`}
								name={item.project_name}
								pitch={item.project_pitch}
								id={item.project_id}
								image={item.project_image}
								prospect={item.project_prospect_id}
								intro={item.project_intro}
							/>
						</Box>
					))}
			</>
		)
	}

	return <>No results.</>
}

const GridContentTop = (props) => {
	const { loading, error, data } = useQuery<IGridContent, IGridParams>(GET_PROJECTS_TOP)

	if (loading) return <>Loading...</>

	if (error) return <>Error: ${error.message}</>

	if (data) {
		const projects = data.projects
		return (
			<>
				{projects &&
					projects.map((item, index) => (
						<Box width={[1, 1, 1 / 2]} mb={4} px={1} key={index}>
							<GridItem
								key={item.project_id}
								href={`/project/${item.project_name}`}
								name={item.project_name}
								pitch={item.project_pitch}
								id={item.project_id}
								image={item.project_image}
								prospect={item.project_prospect_id}
								intro={item.project_intro}
								category={item.funding_category}
								country={item.project_country}
							/>
						</Box>
					))}
			</>
		)
	}

	return <>No results.</>
}
const GridItem = (props) => (
	<>
		<Link href="/projects/[pid]" as={`/projects/${props.id}`}>
			<Image src={props.image} variant="grid" />
			<Heading>{props.name}</Heading>
			<Text>{props.pitch}</Text>
			{/* TODO: iterate tags*/}
			<div>
				<Tag>INDIE</Tag>
				<Tag>NEWCOMER</Tag>
				<Tag>LENDING</Tag>
				<Tag>MMORPG</Tag>
			</div>
		</Link>{' '}
		<br />
		<Link href="/projects/[pid]/read" as={`/projects/${props.id}/read`}>
			<Button bType="sm">Read</Button>
		</Link>{' '}
		<Link href="/projects/[pid]/play" as={`/projects/${props.id}/play`}>
			<Button bType="sm">Play</Button>
		</Link>
	</>
)

const ContentGrid = (props) => {
	const { state } = useContext(AppContext)
	const { READY } = state.app
	const [searchQuery, setSearchQuery] = useState({})

	const showAll = true

	if (!READY) return <>Connecting...</>

	return (
		<Flex flexDirection="row" flexWrap="wrap">
			{/* if we want it sidebar,
				change to 1/4 and 3/4
				for the second mq
			*/}
			<Box width={[1]}>
				<ContentSearch />
			</Box>

			<Box width={[1]}>
				<ContentFilter />
			</Box>

			<Box width={[1]}>
				<Box width={1} px={1}>
					<Box width={1}>
						<H2>Top Funded</H2>
					</Box>
					<Flex flexDirection="row" flexWrap="wrap">
						<GridContentTop />
					</Flex>
				</Box>

				{showAll && (
					<Box width={1} px={1}>
						<Box width={1}>
							<H2>Open Campaigns</H2>
						</Box>
						<Flex flexDirection="row" flexWrap="wrap">
							<GridContentAll />
						</Flex>
					</Box>
				)}
			</Box>
		</Flex>
	)
}
export default ContentGrid
