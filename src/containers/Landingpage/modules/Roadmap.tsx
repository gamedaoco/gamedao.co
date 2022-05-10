import * as React from 'react'
import { Typography } from '@mui/material'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import { GRADIENT } from '../styles'

interface RoadmapItemTypes {
	title: string
	children: React.ReactNode
	last?: boolean
}

const RoadmapItem = ({ title, children, last }: RoadmapItemTypes ) => {
	return (
		<TimelineItem>
			<TimelineOppositeContent color="#ff00ff">
				{title}
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDot sx={{ bgcolor: '#00ffff' }}/>
				{ !last && <TimelineConnector sx={{ bgcolor: '#00ffff' }}/> }
			</TimelineSeparator>
			<TimelineContent color="#00ff00">{children}</TimelineContent>
		</TimelineItem>
	)
}

export function Roadmap() {
	return (
		<>
		<Typography
			variant="h3"
			sx={{
				background: GRADIENT.blue,
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
				fontWeight: 800,
				lineHeight: '100%',
			}}
		>
			We are creating the most advanced community controlled fundraising, coordination and ownership protocols.
		</Typography>

			<Timeline position="alternate">
				<RoadmapItem title='Q1 / 2019'>
					Protocol core development starts<br/>
					Research for legal DAOs in Europe
				</RoadmapItem>
				<RoadmapItem title='Q3 / 2020'>
					Testnet Live
				</RoadmapItem>
				<RoadmapItem title='Q3 / 2021'>
					Winner of Top Blockchain Hackathon
				</RoadmapItem>
				<RoadmapItem title='Q4 / 2021'>
					Outlier Ventures<br/>Polkadot Basecamp<br/>Company Setup
				</RoadmapItem>
				<RoadmapItem title='Q2 / 2022'>
					Private Sale
				</RoadmapItem>
				<RoadmapItem title='Q3 / 2022'>
					Community Sale +<br/>
					Token Generation Event
				</RoadmapItem>
				<RoadmapItem title='Q4 / 2022' last>
					Protocol Launch
				</RoadmapItem>

			</Timeline>
		</>
	)
}
