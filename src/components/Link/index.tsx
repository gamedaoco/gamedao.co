import { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
	href: string
	children: ReactNode
}

const Component = ({ href, children }: Props) => {
	return href.includes('http') ? (
		<a target="_blank" rel="noreferrer" href={href}>
			{children}
		</a>
	) : (
		<>
			<Link href={href}>{children}</Link>
		</>
	)
}

export default Component
