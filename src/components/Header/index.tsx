import * as React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { Flex, Box } from 'rebass'
import { Navigation, Link, Divider } from 'components'

import logo from 'public/z-ctrl-45-col.svg'
import img from 'public/stripes-s.png'

const Container = styled.div`
	margin: 0;
	padding: 0;
	width: 100%;
	height: auto;
	background: #000;

	* {
		font-size: 15px;
		// border: 1px dotted red;
		transition-duration: 100ms;
		transition-timing-function: ease-in-out;
	}
`

const MetaLink = styled.div`
	a {
		color: rgba(255,255,255,0.5);
		margin-left: 25px;
	}
	text-align: right;
	color: white;
	a,
	a: visited {
		text-decoration: none;
		color: rgba(255,255,255,1);
	}
	a:hover {
		color: rgba(255,255,255,1);
		border-bottom: 1px dotted;
	}
`

const User = styled.div`
	color: white;
	height: 100px;
	display: flex;
	align-items: flex-end;
	a,a: visited {
		text-decoration: none;
		color: white;
	}
	a:hover {
		color: white;
		border-bottom: 1px dotted;
	}
`
const Task = styled.div`
	color: white;
	height: 50px;
	display: flex;
	align-items: flex-end;
`
const Right = styled.div`
	font-size: 40px;
	width: 100%;
	text-align: right;
`

interface IHeader {
	email?: string
	message?: string
	loggedIn?: boolean
	showContactView?: boolean
}

const Header: React.FC<IHeader> = ({
	loggedIn=false
}) => {

	const height = '100px'
	const logoHeight = '50px'
	const logoAlt = 'zero'
	const logoHref = '/'

	const router = useRouter()
	const showContactView = ( router.pathname == '/contact' ) ? false : true

	return (
		<Container>
			{/*<Divider sm />*/}

			<Flex flexDirection="row" flexWrap="wrap">
				{/* TOP */}

				<Box order={1} pt={4} px={4} py={3} width={[1 / 3]}>
					<Link href="/">
						<img src={logo} height={logoHeight} alt={logoAlt} />
					</Link>
				</Box>

				<Box order={2} pt={4} px={4} width={[2 / 3]}>
					<MetaLink>
						{/*!loggedIn && <Link href="/account/signin">Sign In</Link>*/}
						{/*!loggedIn && <Link href="/account/signup">Sign Up</Link>*/}
						{loggedIn && <Link href="/account">Account</Link>}
						{loggedIn && <Link href="/account/signout">Sign Out</Link>}
						{/*<Link href="/doc/help">Helpdesk</Link>*/}
						{showContactView && <Link href="/contact">Contact</Link>}
					</MetaLink>
				</Box>

				{/* MESSAGE */}

				{/*
									<Box order={[4, 3]} px={4} width={[1, 1 / 2]}>
										{loggedIn && (
											<User>
												Welcome, <Link href="/account">User</Link>.
											</User>
										)}
									</Box>
				
									<Box order={[3, 4]} px={4} width={[1, 1 / 2]}>
										{loggedIn && (
											<Task>
												<Right>{'Phase 1 / 3'}</Right>
											</Task>
										)}
									</Box>				
*/}

				{/* NAVBAR */}
				{/*
				<Box order={5} width={[1]}>
					<Navigation />
				</Box>
*/}
			</Flex>
		</Container>
	)
}

export default Header
