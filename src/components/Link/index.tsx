import * as React from 'react'
import NextLink from 'next/link'

interface ILinkProps {
	href?: string
	children?: object | string
}

const Link: React.FunctionComponent<ILinkProps> = ({ href, children }) => (
	<NextLink href={href || '#'}>
		<a>{children}</a>
	</NextLink>
)

export default Link
