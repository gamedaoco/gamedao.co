import * as React from 'react'
import NextLink from 'next/link'

interface ILinkProps {
	href?: string | undefined
	as?: string | undefined
	target?: string | undefined
	children?: object | string
}

const Link: React.FC<ILinkProps> = ({ href, as, target, children }) => (
	<NextLink href={href || '#'} as={as}>
		<a target={target || '_self'}>{children}</a>
	</NextLink>
)

export default Link
