import { Container, Box, Grid, Card, Paper, Typography, Button, Stack } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { styled } from '@mui/system'
import Carousel from 'react-material-ui-carousel'
import Link from 'components/Link'

import Icon from '@mui/material/Icon'

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
				padding: [1,4,'5rem'],
			}}>
				<Container>
					{props.item.img &&
						<Box px={[2,4,6]} sx={{
							'-webkit-filter': 'drop-shadow( 0 15px 20px rgba(0,0,0,1) )',
							filter: 'drop-shadow( 0 15px 20px rgba(0,0,0,1) )'
						}}>
							<img src={props.item.img} height={props.item.img_height} width="auto"/>
						</Box>
					}
					{ !props.item.img &&
						<Teaser variant="h1" px={[2,4,6]}>
							{props.item.title}
						</Teaser>
					}
					{ props.item.sub &&
						<Typography variant={'hero1'} px={[2,4,6]} pt={4} sx={{ lineHeight: '95%' }}>
							{props.item.sub}
						</Typography>
					}
					<Typography variant={'hero2'} px={[2,4,6]} pt={2} >
						{props.item.description}
					</Typography>
					{ props.item.links &&
						<Typography variant={'hero2'} px={[2,4,6]} pt={4} sx={{ lineHeight: '95%' }}>

							{ props.item.links.map( (e,i) =>
								 <Link href={e.url} key={i}>
								 	<Button size="small" variant="outlined" sx={{ mr: 2, mb: 2}}>
								 		{`${e.text || 'More'}`}
								 	</Button>
								 </Link>
							)}

						</Typography>
					}
				</Container>
			</Box>
		</>
	)
}


const Content = () =>
	<Carousel
		sx={{ borderRadius: 0, height: '100%' }}
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
		mb: 0
	}}>
		<Content/>
	</Box>

