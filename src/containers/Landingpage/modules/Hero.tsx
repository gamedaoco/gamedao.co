import { Box, Grid, Card, Paper, Typography, Button, Stack } from '@mui/material'
import { alpha } from '@mui/material/styles'

import { NavLink } from 'src/components'
import { Item } from './Item'

import { styled } from '@mui/system'

const BackdropImage = styled('img')(({ theme }) => ({
	textAlign: 'center',
	verticalAlign: 'middle',
	width: '100%',
	maxHeight: '50vh',
	zIndex: 2,
}))

const Backdrop = () => {
	return (
		<Box
			sx={{
				zIndex: 1,
				position: 'absolute',
				left: '-10%',
				top: 0,
				width: '120%',
				maxHeight: '50%',
				// backgroundColor: 'transparent',
				// backgroundImage: 'url(/headerimg.png)',
				// backgroundSize: 'cover',
				// backgroundPosition: ' center top',
				// backgroundSize: '100% auto',
				// backgroundRepeat: 'no-repeat',
			}}
		>
			{/*
			  <Image src="/headerimg.png"/>
			*/}
			<BackdropImage src="/s01/1__128c.png" />
		</Box>
	)
}

export const Hero = () => {
	// return <>Hello</>
	return (
		<>
			<Backdrop />
			sdfsdfsdfasdfsadfsdfsdf
			<Typography variant={'h1'} pt={2} sx={{ lineHeight: '85%', zIndex: 3 }}>
				Build Decentralized
				<br />
				Video Game Economies
			</Typography>
			{/*
			<Paper sx={{
				backgroundColor: 'transparent',
			}} elevation={0}>
				<Box sx={{
					width: '100%',
					height: '100vh',

				}}>
				</Box>
		 	</Paper>
	*/}
		</>
	)
}
