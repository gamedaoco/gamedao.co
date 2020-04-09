import React, { useState } from 'react'
import styled from 'styled-components'

import { Flex, Box, Card, Heading, Text } from 'rebass'
import { Border, H1, H2, Link, Space, Image, Container, Newsletter, Button } from 'components'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const GET_PROJECTS_TOP = gql`
	query getTopProjects {
		projects(order_by: { project_raise_amount: desc }, limit: 2) {
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

const bgColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16)

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
	background-color: ${() => bgColor()};
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
	const { loading, error, data } = useQuery<IGridContent, IGridParams>(GET_PROJECTS_ALL, { variables: { limit: pageSize, offset: pageOffset } })

	if (loading) return <>Loading...</>
	if (error) return <>Error: ${error.message}</>

	if (data) {
		const projects = data.projects
		return (
			<>
				{projects &&
					projects.map((item) => (
						<Box width={[1, 1 / 2, 1 / 4]} mb={4} px={1}>
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
	return null
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
					projects.map((item) => (
						<Box width={[1, 1, 1 / 2]} mb={4} px={1}>
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
	return null
}
const GridItem = (props) => (
	<>
		<img src={props.image} width="100%" height="auto" />
		<Heading>{props.name}</Heading>
		<Text>{props.pitch}</Text>
		{/* TODO: iterate tags*/}
		<div>
			<Tag>INDIE</Tag>
			<Tag>NEWCOMER</Tag>
			<Tag>LENDING</Tag>
			<Tag>MMORPG</Tag>
		</div>
		<br />
		<Link href={`/read/${props.id}`}>
			<Button bType="sm">Read</Button>
		</Link>{' '}
		<Link href={`/play/${props.id}`}>
			<Button bType="sm" href={`/project/${props.name}`}>
				Play
			</Button>
		</Link>
	</>
)

const ContentGrid = (props) => (
	<>
		<Flex flexDirection="row" flexWrap="wrap">
			<Box width={1} px={2}>
				<H1>Projects</H1>
			</Box>
		</Flex>

		<Box width={1} px={1}>
			<Box width={1}>
				<H2>Top Funded</H2>
			</Box>
			<Flex flexDirection="row" flexWrap="wrap">
				<GridContentTop />
			</Flex>
		</Box>

		<Box width={1} px={1}>
			<Box width={1}>
				<H2>Open Campaigns</H2>
			</Box>
			<Flex flexDirection="row" flexWrap="wrap">
				<GridContentAll />
			</Flex>
		</Box>
	</>
)
export default ContentGrid
