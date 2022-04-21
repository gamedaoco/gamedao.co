import React, { useCallback } from 'react'
import { Box, Grid, Card, Paper, Typography, Button, Stack } from '@mui/material'
import { styled } from '@mui/system'
import { Layout } from 'src/layouts/default'
import { NavLink } from 'src/components'

import { Item, Hero, Team, Partners, Headline, GRADIENT } from './modules'

const Section1 = () => (
	<Paper sx={{ backgroundColor: 'transparent', height: '100%' }} elevation={0}>
		<Headline>Join GameDAO</Headline>
	</Paper>
)

const Section2 = () => (
	<Paper sx={{ backgroundColor: 'transparent', height: '100%' }} elevation={0}>
		<Typography variant={'h3'} pt={2} sx={{ textTransform: 'uppercase', textAlign: 'center' }}>
			Let's bring Community powered ownership to the masses
		</Typography>
	</Paper>
)

const Section3 = () => (
	<Paper sx={{ backgroundColor: 'transparent', height: '100%' }} elevation={0}>
		<Typography variant={'h2'} pt={2}>
			Join GameDAO
		</Typography>
	</Paper>
)

const Section4 = () => (
	<Paper sx={{ backgroundColor: 'transparent', height: '100%' }} elevation={0}>
		<Typography variant={'h2'} pt={2}>
			Join GameDAO
		</Typography>
	</Paper>
)

const Section5 = () => null

const Section6 = (openUrl) => (
	<Stack
		component={Paper}
		elevation={10}
		spacing={4}
		padding={4}
		marginY={4}
		sx={{ backgroundColor: 'rgba(128,24,64,.5)' }}
	>
		<Typography
			variant="h3"
			sx={{
				background: GRADIENT.pink,
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
				fontWeight: 800,
				lineHeight: '100%',
			}}
		>
			To use GameDAO DApp, the Polkadot or Talisman Extension is required. Please connect your wallet or install
			the Extension.
		</Typography>
		<Stack direction="row" justifyContent="end" spacing={4}>
			<Button size="small" onClick={() => openUrl('https://docs.gamedao.co/')}>
				Learn More
			</Button>
			<Button size="small" variant="outlined" onClick={() => openUrl('https://polkadot.js.org/extension/')}>
				Download Polkadot Extension
			</Button>
			<Button size="small" variant="outlined" onClick={() => openUrl('https://polkadot.js.org/extension/')}>
				Download Talisman Extension
			</Button>
		</Stack>
	</Stack>
)

export function Landingpage() {
	const openUrl = useCallback((url: string) => {
		window.open(url, '_blank', 'noopener').focus()
	}, [])

	return (
		<>
			<Hero />
			{/*
		<Section1/>
		<Section2/>
		<Section3/>
		<Section4/>
		<Section5/>
		<Section6 openUrl={openUrl}/>
		<Team openUrl={openUrl}/>
		<Partners/>
*/}
		</>
	)
}

export default Landingpage
