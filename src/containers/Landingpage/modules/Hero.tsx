import { Box, Grid, Card, Paper, Typography, Button, Stack } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { styled } from '@mui/system'
import Carousel from 'react-material-ui-carousel'
import { NavLink } from 'src/components'

import Prev from '@mui/icons-material/NavigateBefore'
import Next from '@mui/icons-material/NavigateNext'

import { hero as items } from '../content'

const Content = props =>
	<Carousel
		sx={{ mx: -6, height: ['300px','400px','600px'] }}
		duration={250}
		interval={5000}
		NextIcon={<Next/>} PrevIcon={<Prev/>}
		>
		{items.map( (item, i) => <Item key={i} item={item} /> ) }
	</Carousel>

const Item = props => {
    return (
		<Paper sx={{
			backgroundColor: props.item.bg || 'black',
		}} elevation={10}>

			<Box sx={{
				zIndex: 100,
				width: '100%',
				height: ['300px','400px','600px'],
			}}>
				<Backdrop src={props.item.image} />
			</Box>

			{ props.item.image &&
				<Box sx={{
					zIndex: 150,
					position: 'absolute', left: 0, top: 0,
					width: '100%', height: ['300px','400px','600px'],
					// background: 'repeating-linear-gradient(transparent, transparent 2px, rgba(0,0,0,0.4) 3px, rgba(0,0,0,0.4) 3px)'
					background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 50%,rgba(0,0,0,1) 90%,rgba(0,0,0,1) 100%)'
				}} />
			}

			<Box sx={{
				position: 'absolute',
				left: 0,
				top: 0,
				width: '100%',
				// height: ['300px','400px','600px'],
				zIndex: 200,
			}}>
				<Box sx={{
					display: 'flex',
					width: '100%',
					height: ['300px','400px','600px'],
					flexDirection: 'column',
					justifyContent: 'end',
					padding: '5rem',
				}}>

					<Typography variant={'hero1'} pt={2} sx={{ lineHeight: '85%' }}>
						{props.item.title}
					</Typography>
					<Typography variant={'hero2'} pt={2} sx={{ lineHeight: '85%' }}>
						{props.item.description}
					</Typography>
					{ props.item.link_url && <Button>{`${props.item.link_text||'More'}`}</Button> }
				</Box>
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
				// backgroundSize: 'cover',
				backgroundPosition: 'center center',
				backgroundSize: '150% auto',
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
