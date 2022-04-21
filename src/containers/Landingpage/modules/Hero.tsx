import { Box, Grid, Card, Paper, Typography, Button, Stack } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { styled } from '@mui/system'
import Carousel from 'react-material-ui-carousel'
import { NavLink } from 'src/components'

import Prev from '@mui/icons-material/NavigateBefore'
import Next from '@mui/icons-material/NavigateNext'

import { hero as items } from '../content'

const Content = props =>
	<Carousel sx={{ mx: -6, height: ['300px','400px','600px'] }} NextIcon={<Next/>} PrevIcon={<Prev/>}>
		{items.map( (item, i) => <Item key={i} item={item} /> ) }
	</Carousel>

const Item = props => {
    return (
		<Paper sx={{
			backgroundColor: 'transparent',
			// position: 'relative',
		}} elevation={0}>

			<Box sx={{
				zIndex: 100,
				width: '100%',
				// height: '100%',
				height: ['300px','400px','600px'],
			}}>
				<Backdrop src={props.item.image||null} />
			</Box>

			<Box sx={{
				position: 'absolute',
				left: 0,
				top: 0,
				width: '100%',
				height: ['300px','400px','600px'],
				padding: '2rem',
				zIndex: 200,
				justifyContent: 'bottom',
			}}>
				<Typography variant={'h1'} pt={2} sx={{ lineHeight: '85%' }}>
					{props.item.title}
				</Typography>
				<Typography variant={'h2'} pt={2} sx={{ lineHeight: '85%' }}>
					{props.item.description}
				</Typography>
				{ props.item.link_url && <Button>{`${props.item.link_text||'More'}`}</Button> }
			</Box>

		</Paper>
    )
}

const Backdrop = ({ src }) => {
	return src ? (
		<Box
			sx={{
				height: '100%',
				backgroundImage: `url(/s01/1__128c.png)`,
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
				// backgroundSize: '100% auto',
				backgroundRepeat: 'no-repeat',
			}}
		>
			{/*<img src={src} />*/}
		</Box>
	) : null
}

export const Hero = () => {
	// return <>Hello</>
	return (
		<Content/>
	)
}
