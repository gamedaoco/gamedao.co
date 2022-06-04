import { Container, Box, Grid, Card, Paper, Typography, Button, Stack } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { styled } from '@mui/system'
import Carousel from 'react-material-ui-carousel'
import { NavLink } from 'src/components'
import Link from 'next/link'

import Prev from '@mui/icons-material/NavigateBefore'
import Next from '@mui/icons-material/NavigateNext'
import { hero as items } from '../content'
import { GRADIENT } from '../styles'

const Teaser = styled(Typography)(
	({ theme }) => ({
				background: GRADIENT.rainbow2	,
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
		width: '100%',
		color: theme.palette.text.secondary,
		fontWeight: 900,
		lineHeight: "85%",
		textTransform: 'uppercase',
		justifyContent: 'middle',
		verticalAlign: 'center',
		textAlign: 'left',
	})
)

const Backdrop = ({ src }) => {
	return src ? (
			<Box
				sx={{
					height: '100%',
					backgroundImage: `url(${src})`,
					backgroundSize: 'cover',
					// backgroundPosition: 'center center',
					// backgroundSize: '150% auto',
					backgroundRepeat: 'no-repeat',
				}}
			>
				{/*<img src={src} />*/}
			</Box>
	) : null
}

const Item = props => {
	return (
		<>
			<Box sx={{
					zIndex: 10,
					width: '100%',
					height: '100vh',
				}}>
				<Backdrop src={props.item.image} />
			</Box>

			<Box sx={{
				zIndex: 20,
				width: '100%',
				height: '100vh',
				position: 'absolute',
				top: 0,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'end',
				padding: '5rem',
			}}>
				<Container>
					{props.item.img &&
						<Box px={[2,4,6]} pb={2}>
							<img src={props.item.img} height="64px" width="auto"/>
						</Box>
					}
					{ !props.item.img &&
						<Teaser variant="h2" px={[2,4,6]}>
							{props.item.title}
						</Teaser>
					}
					<Typography variant={'hero2'} px={[2,4,6]} pt={2} sx={{ lineHeight: '85%' }}>
						{props.item.description}
					</Typography>
					<Typography variant={'hero2'} px={[2,4,6]} pt={2} sx={{ lineHeight: '85%' }}>
						{ props.item.link_url && <Link href={props.item.link_url}><Button size="medium" variant="outlined">{`${props.item.link_text||'More'}`}</Button></Link> }
					</Typography>
				</Container>
			</Box>
		</>
	)
}


const Content = () =>
	<Carousel
		sx={{ borderRadius: 0 }}
		duration={ 250 }
		interval={ 5000 }
		NextIcon={<Next/>} PrevIcon={<Prev/>}
		>
		{items.map( (item, i) => <Item key={i} item={item} /> ) }
	</Carousel>

export const Hero = () =>
	<Box sx={{
		height: '100vh',
		m: 0,
		p: 0,
		mb: [4,2]
	}}>
		<Content/>
	</Box>

