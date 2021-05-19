import * as React from 'react'
import Link from 'next/link'
import { withRouter, NextRouter } from 'next/router'
import { AccountSelector, Button } from 'components'
import { Nav, NavItem } from './styles'

import { FaGripLines } from 'react-icons/fa'

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

const NavBar: React.FC = () => (
	<Nav>
		<label htmlFor="show-menu" className="show-menu">
			<FaGripLines/>
		</label>
		<input type="checkbox" id="show-menu" role="button" />

			<NavItem>
				<NavLink href="/apply">
					<a>Apply</a>
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/contact">
					<a>Contact</a>
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="https://blog.gamedao.co">
					<a>Blog</a>
				</NavLink>
			</NavItem>

	</Nav>
)

export default NavBar
