import * as React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

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

const pages = ['Vision', 'Mission', 'Community', 'Team', 'Cases', 'Early Access']
const settings = ['Profile', 'Account', 'Dashboard', 'Disconnect']
const features = { mainMenu: true, accountMenu: false }

export const Header = () => {
	const router = useRouter()

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

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

	const handleClickItem = (e) => {
		router.push(e.toLowerCase().replace(' ', '-'))
	}

	return (
		<AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'transparent' }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
						<Image src="/gamedao_wht_space.svg" width={'32'} height={'32'} />
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

						<IconButton
							size="large"
							aria-label="account of current user"
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
									<Typography textAlign="center">GameDAO</Typography>
								</MenuItem>

								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								))}

							</Box>
						</Drawer>

					</Box>

					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, p: 1, display: { xs: 'flex', md: 'none' } }}
					>
						<Image src="/gamedao_wht.svg" width={'32'} height={'32'} />
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={() => handleClickItem(page)}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<NavLink href="https://beta.gamedao.co">
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
