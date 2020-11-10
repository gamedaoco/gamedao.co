import * as React from 'react'

import { Container, Row, Col, Logo, Divider } from '@zero/atomiclit'

import { useTheme } from '@zero/atomiclit'

export default function Index() {
	const theme = useTheme()
	console.log(theme)
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				background: theme.palette.brand.lightgray,
			}}
		>
			<Container>
				<Row>
					<div style={{ width: '100px' }}>
						<Logo />
					</div>
				</Row>
				<Row style={{ marginTop: '50px', marginLeft: '100px', marginBottom: '0px' }}>
					<h1>AGENDA</h1>
				</Row>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<div style={{ width: '10%' }}>
						<Divider vertical rainbow />
					</div>
					<div style={{ width: '89%', margin: '2rem' }}>
						<h6>0: walkthrough project doku (wiki)</h6>
						<p>
							Anton: Current wiki is already a great help and I have a MUCH better grasp at the project this week I plan on contributing on it. I
							suggest you add the technical part about substrate and your test chain
						</p>
						<h6> 1: gamedao frontend app walkthrough</h6>
						<p> config, pages, lib, api, graphql - refactor subzero dapp into gamedao repo</p>
						<h6> 2: zero bootnodes deployment walkthrough</h6>
						<h6> 3: contributor scouting</h6>
						<h6> 4: VOTE #1 Decide on a flow for investors / onboarding which flow to model first -- https://gitlab.com/zero.io/wiki/-/issues/1</h6>
						<h6> 5: produce documents ( legal specs, requirements)</h6>
						<p> whitepaper / how nodes interact / how validation works etc. standard stuff / tokenomics etc. (bubble graph)</p>
						<h6> 6: pitch deck</h6>
					</div>
				</div>
			</Container>
		</div>
	)
}
