import * as React from 'react'
import Link from 'next/link'
import { withRouter, NextRouter } from 'next/router'
import styled from 'styled-components'

const Nav = styled.div`
	background: #000;
	color: #f3f3f3;

	/*
	.active {
		border-bottom: 2px solid yellow;
	}
*/

	size: 20px;

	margin: 0;
	padding: 0;

	width: auto;
	height: 50px;

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		position: absolute;
	}

	/* hover state for top level links */

	li:hover a {
		background: #000;
		border-bottom: 1px dotted #fff;
	}

	/* dropdown links */

	li:hover ul a {
		background: #f3f3f3;
		color: #333333;
		height: 40px;
		line-height: 40px;
	}

	/* hover state for dropdown links */

	li:hover ul a:hover {
		background: #000;
		color: #fff;
	}

	li ul {
		display: none;
	}

	/* dropdown links vertical */

	li ul li {
		display: block;
		float: left; //none;
	}

	/* no text wrapping */

	li ul li a {
		width: auto;
		min-width: 100px;
		padding: 0 20px;
	}

	/* display dropdowns on hover */

	ul li a:hover + .hidden,
	.hidden:hover {
		display: block;
	}

	/* 'show menu' label button and hide it by default */

	.show-menu {
		display: none;
		text-decoration: none;
		text-align: center;
		line-height: 50px;
		color: #fff;
		background: #000;
		// background: linear-gradient(to right, #036 0, #063 100%);
		border-bottom: 1px dotted white;
		height: 50px;
		color: #fff;
	}

	/* hide checkbox */

	input[type='checkbox'] {
		display: none;
	}

	/* show menu when invisible checkbox is checked */

	input[type='checkbox']:checked ~ #menu {
		display: block;
	}

	/* responsive styles */

	@media screen and (max-width: 767px) {
		/*Make dropdown links appear inline*/

		z-index: 100;

		ul {
			position: static;
			display: none;
		}

		/*Create vertical spacing*/

		li {
			margin-bottom: 1px;
		}

		/*Make all menu links full width*/

		ul li,
		li a {
			width: 100%;
		}

		/*Display 'show menu' link*/

		.show-menu {
			display: block;
		}
	}
`

const NavItem = styled.li`
	display: inline-block;
	list-style: none;

	a {
		display: block;
		min-width: 140px;
		height: 50px;
		text-align: center;
		line-height: 50px;

		color: #fff;
		background: #000;
		text-decoration: none;
		border-bottom: 1px solid #000;
	}
	a.active {
		border-bottom: 1px solid #fff;
	}
`

const ActiveLink = ({ router, children, ...props }) => {
	const child = React.Children.only(children)

	let className = child.props.className || null
	if (router.pathname === props.href && props.activeClassName) {
		className = `${className !== null ? className : ''} ${props.activeClassName}`.trim()
	}

	delete props.activeClassName

	return (
		<Link href={props.href || ''} {...props}>
			{React.cloneElement(child, { className })}
		</Link>
	)
}

const NavLink = withRouter(ActiveLink)

const NavBar: React.FunctionComponent = () => (
	<Nav>
		<label htmlFor="show-menu" className="show-menu">
			Navigation
		</label>
		<input type="checkbox" id="show-menu" role="button" />

		<ul id="menu">
			{/*
			<NavItem>
				<Link href="/">
					<a>Overview</a>
				</Link>
			</NavItem>
{' '}
			<NavItem>
				<Link href="/open">
					<a>Open Sales</a>
				</Link>
			</NavItem>
{' '}
			<NavItem>
				<Link href="/products">
					<a>Products</a>
				</Link>
			</NavItem>{' '}
			<NavItem>
				<Link href="/services">
					<a>Services</a>
				</Link>
			</NavItem>{' '}
			<NavItem>
				<Link href="/dao/team">
					<a>Team</a>
				</Link>
			</NavItem>{' '}
*/}
			<NavItem>
				<NavLink activeClassName="active" href="/dao">
					<a>DAO</a>
				</NavLink>
			</NavItem>

			{/*}
			<NavItem>
				<NavLink activeClassName="active" href="/account/signin">
					<a>Login</a>
				</NavLink>
			</NavItem>{' '}
			<NavItem>
				<a href="/account">Account</a>
				<ul id="menu" className="hidden">
					<NavItem>
						<Link prefetch href="/account/Login">
							<a>login</a>
						</Link>
					</NavItem>
					<NavItem>
						<Link prefetch href="/account/SignUp">
							<a>signup</a>
						</Link>
					</NavItem>
					<NavItem>
						<Link prefetch href="/account/Reset">
							<a>reset</a>
						</Link>
					</NavItem>
					<NavItem>
						<Link prefetch href="/account/iForgot">
							<a>forgot</a>
						</Link>
					</NavItem>
					<NavItem>
						<Link prefetch href="/account/VerifyCode">
							<a>verify</a>
						</Link>
					</NavItem>
				</ul>
			</NavItem>
			<NavItem>
				<a href="#">Demos</a>
				<ul id="menu" className="hidden">
					<NavItem>
						<Link prefetch href="/demos/BSDVComponentLib">
							<a>ComponentLib</a>
						</Link>
					</NavItem>
					<NavItem>
						<Link prefetch href="/demos/GraphQL">
							<a>GraphQL</a>
						</Link>
					</NavItem>
					<NavItem>
						<Link prefetch href="/demos/SSR">
							<a>SSR</a>
						</Link>
					</NavItem>
				</ul>
			</NavItem>
			<NavItem>
				<a href="/services">Products</a>
				<ul id="menu" className="hidden">
					<NavItem>
						<Link prefetch href="/products/token-sale">
							<a>TokenSale</a>
						</Link>
						<Link prefetch href="/products/airdrop">
							<a>Airdrop</a>
						</Link>
						<Link prefetch href="/products/kyc-aml">
							<a>KYC/AML</a>
						</Link>
						<Link prefetch href="/products/custody">
							<a>Custody</a>
						</Link>
						<Link prefetch href="/products/listing">
							<a>Listing</a>
						</Link>
					</NavItem>
				</ul>
			</NavItem>
			<NavItem>
				<a href="/services">Services</a>
				<ul id="menu" className="hidden">
					<NavItem>
						<Link prefetch href="/account/iForgot">
							<a>DLT + Transformation</a>
						</Link>
					</NavItem>
					<NavItem>
						<Link prefetch href="/account/Login">
							<a>Ecosystem Design</a>
						</Link>
					</NavItem>
					<NavItem>
						<Link prefetch href="/account/Register">
							<a>Business Design</a>
						</Link>
					</NavItem>
					<NavItem>
						<Link prefetch href="/account/Reset">
							<a>Token Economics</a>
						</Link>
					</NavItem>
					<NavItem>
						<Link prefetch href="/account/Reset">
							<a>Legal</a>
						</Link>
					</NavItem>
					<NavItem>
						<Link prefetch href="/account/Reset">
							<a>Customer Journey</a>
						</Link>
					</NavItem>
				</ul>
			</NavItem>
		*/}
		</ul>
	</Nav>
)

export default NavBar
