import * as React from 'react'
import NextLink from 'next/link'

interface ILinkProps {
	href?: string
	as?: string
	target?: string
	children?: object | string
}

const Link: React.FC<ILinkProps> = ({ href, as, target, children }) =>
	href && href.indexOf('http') > -1 ? (
		<a href={href} target="_blank">
			{children}
		</a>
	) : (
		<NextLink href={href || '#'} as={as}>
			<a target={target || '_self'}>{children}</a>
		</NextLink>
	)

export default Link
