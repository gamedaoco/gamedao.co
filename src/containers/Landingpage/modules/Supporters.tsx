import React, { useCallback } from 'react'
import { Box, Grid, Card, Paper, Typography, Button, Stack } from '@mui/material'

import { GRADIENT } from '../styles'
import { supporters } from '../content'

import { Item } from './Item'

export const Supporters = (openUrl) => (
	<Stack component={Paper} elevation={0} spacing={4} padding={4} marginY={4} sx={{ backgroundColor: 'transparent' }}>
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
			We are working with great innovators in Gaming and Blockchain.
		</Typography>

		<Grid container>
			{supporters.map((person, index) => (
				<Grid item xs={6} sm={4} md={3} lg={2} pt={2}>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: { xl: '1fr 1fr' },
						}}
					>
						<Item key={index}>
							{' '}
							{person[0]} <br /> {person[1]}{' '}
						</Item>
					</Box>
				</Grid>
			))}
		</Grid>
	</Stack>
)
