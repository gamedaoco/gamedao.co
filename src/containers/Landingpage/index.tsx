import React, { useCallback } from 'react'

import { styled } from '@mui/system'
import { GRADIENT } from './styles'

import { Layout } from 'src/layouts/default'
import { NavLink } from 'src/components'

import { Box, Grid, Card, Paper, Typography, Button, Stack } from '@mui/material'
import { Hero, Intro, Teaser, Wallet, Team, Partners, Supporters } from './modules'

const Wrapper = styled(Box)(
	({ theme }) => ({
		// '& *': {
		// 	opacity: .9,
		// 	':hover': {
		// 		opacity: 1,
		// 	}
		// }
	})
)

export function Landingpage() {

	const openUrl = useCallback((url: string) => {
		window.open(url, '_blank', 'noopener').focus()
	}, [])

	return (
		<Wrapper>
			<Hero />
			<Intro/>
			<Teaser variant="h2" padding={'2rem'}>
				Let's bring Community powered ownership to the masses
			</Teaser>
			<Wallet />
			<Team openUrl={openUrl}/>
			<Partners/>
			<Supporters/>
{/*
*/}
		</Wrapper>
	)
}

export default Landingpage
