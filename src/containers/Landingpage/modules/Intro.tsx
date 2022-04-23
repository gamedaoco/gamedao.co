import React, { useCallback } from 'react'
import { GRADIENT } from '../styles'
import { intro } from '../content'
import { Grid, Paper, Typography } from '@mui/material'
import { Hero, Team, Partners, Supporters } from './'

export const Intro = () => (
	<Paper sx={{ mx: '2rem', backgroundColor: 'transparent', height: '100%' }} elevation={0}>
		<Grid container spacing={2} >
			<Grid container item xs={12} md={6} direction="column" >
				<Typography variant={'h3'} py={2}> {intro.header1} </Typography>
				<Typography variant={'body1'} pb={2}> {intro.text1} </Typography>
			</Grid>
			<Grid container item xs={12} md={6} direction="column" >
				<Typography variant={'h3'} py={2}> {intro.header2} </Typography>
				<Typography variant={'body1'} pb={2}> {intro.text2} </Typography>
			</Grid>
		</Grid>
	</Paper>
)