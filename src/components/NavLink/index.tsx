import { ReactNode, useCallback } from 'react'
import { useRouter } from 'next/router'

type NavLinkProps = {
	href: string
	children: ReactNode
	key?: number|string
}

export function NavLink({ href, children, key }: NavLinkProps) {
	const { push } = useRouter()

	const handleClick = useCallback(
		(e) => {
			e.preventDefault()
			push(href)
		},
		[href, push],
	)
	return (
		<div title={href} onClick={handleClick}>
			{children}
		</div>
	)
}
