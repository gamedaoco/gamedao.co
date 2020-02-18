import * as React from 'react'
import NextLink from 'next/link'

interface ILinkProps {
	href?: string
	target?: string
	children?: object | string
}

const Link: React.FC<ILinkProps> = ({ href, target, children }) => (
	<NextLink href={href || '#'}>
		<a target={ target ? target : '_self' }>{children}</a>
	</NextLink>
)

export default Link
