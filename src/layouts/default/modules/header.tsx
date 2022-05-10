import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { features } from '../../../features'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	Avatar,
	Button,
	Tooltip,
	MenuItem,
} from '@mui/material'

import { Drawer } from '@mui/material'
import { NavLink } from 'src/components'

const pages = [
	['Cases',''],
	['Apply','mailto:apply@gamedao.co'],
	['Blog','//blog.gamedao.co'],
	['Community','//discord.gg/rhwtr7p'],
]
const settings = ['Profile', 'Account', 'Dashboard', 'Disconnect']

const Logo = () => <img src="/g-wht-wide.png" height='16px' />

export const Header = () => {

	const router = useRouter()

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

	// const openUrl = useCallback((url: string) => {
	// 	window.open(url, '_blank', 'noopener').focus()
	// }, [])

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}
	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}
	// const handleClickItem = (e) => {
	// 	if ( e[1].substr(0,2) === '//' ) openUrl(e[1])
	// 	else router.push( e[0].toLowerCase().replace(' ', '-') )
	// }

	// useEffect(()=>)

	return (
		<AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'transparent' }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>

					<MenuItem sx={{ display: { xs: 'none', md: 'flex' } }}>
						<Link href="/">
							<Typography variant="h6" noWrap component="div" sx={{ mt: '3px', mr: 2 }}>
								<Logo/>
							</Typography>
						</Link>
					</MenuItem>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

						<IconButton
							size="large"
							aria-label="appbar"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={ handleOpenNavMenu }
							color="inherit"
						>
							<MenuIcon />
						</IconButton>

						<Drawer
							variant="temporary"
							transitionDuration={0}
							elevation={0}
							anchor="top"
							open={ Boolean(anchorElNav) }
							onClose={ handleCloseNavMenu }
						>
							<Box sx={{
								px: ['1rem','3rem'],
								py: ['0.25rem','0.5rem'],
								height: '100vh',
								backgroundColor: 'black'
							}}>


								<Box sx={{
									flexGrow: 1,
								}}>
									<IconButton
										size="large"
										onClick={handleCloseNavMenu}
										color="inherit"
										aria-controls="close"
									>
										<CloseIcon />
									</IconButton>
								</Box>

								<MenuItem key={'GameDAO'} onClick={handleCloseNavMenu}>
									<Link href="/">
										<Typography textAlign="center">GameDAO</Typography>
									</Link>
								</MenuItem>

								{pages.map((page) => (
									<MenuItem key={page[0]} onClick={ () => handleCloseNavMenu() }>
										{ ( page[1].substr(0,2) === '//' )
											? <a href={page[1]} target="_blank" rel="noreferrer">
												<Typography textAlign="center">{page[0]}</Typography>
											</a>
											: <Link href={page[0].toLowerCase().replace(' ', '-')}>
												<Typography textAlign="center">{page[0]}</Typography>
											</Link>
										}
									</MenuItem>
								))}

							</Box>
						</Drawer>

					</Box>

					<MenuItem sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, p: 1 }}>
						<Link href="/">
							<Typography
								variant="h6"
								noWrap
								component="div"
								sx={{  }}
							>
								<Logo />
							</Typography>
						</Link>
					</MenuItem>

					<Box sx={{
						flexGrow: 1,
						display: { xs: 'none', md: 'flex' },
					}}>
						{pages.map((page) => (
							<MenuItem key={page[0]} onClick={ () => handleCloseNavMenu() }>
								{ ( page[1].substr(0,2) === '//' )
									? <a href={page[1]} target="_blank" rel="noreferrer">
										<Typography textAlign="center">{page[0]}</Typography>
									</a>
									: <Link href={page[0].toLowerCase().replace(' ', '-')}>
										<Typography textAlign="center">{page[0]}</Typography>
									</Link>
								}
							</MenuItem>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<NavLink href="https://app.gamedao.co">
							<Button size="small" variant="outlined" color="primary" sx={{ pt: '3px', pb: '5px' }}>
								Run Beta
							</Button>
						</NavLink>

						{/*
						<Tooltip title="Enter Beta">
						</Tooltip>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					*/}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
