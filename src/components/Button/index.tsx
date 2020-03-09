import * as React from 'react'

import styled from 'styled-components'
import { Link } from 'components'

const getStyle = (bType: string = '', noBorder: boolean = false, stretch: boolean = false) => {
	switch (bType) {
		case 'sm':
			return {
				fontSize: '12px',
				height: 'auto',
				width: stretch ? '100%' : 'auto',
				// border: noBorder ? 'none' : '2px solid',
				marginTop: '15px',
				padding: '5px 10px',
			}
		case 'xl':
			return {
				fontSize: '15px',
				height: '40px',
				width: stretch ? '100%' : 'auto',
				border: noBorder ? 'none' : '2px solid',
				marginTop: '15px',
				padding: '5px 50px',
			}
		default:
			return {}
	}
}

const Button = styled('button')`
	font-size: 20px;
	font-weight: 600;
	border-radius: 0px;
	border: 2px solid white;
	color: white;
	background-color: #111111;
	width: 100%;
	height: 50px;
	&:hover {
		background-color: white;
		color: #111111;
		border: 2px solid white;
	}
	transition-duration: 150ms;
`
interface Props {
	children?: React.ReactNode
	bType?: string
	stretch?: boolean
	noBorder?: boolean
	href?: string
	type?: string
	disabled?: boolean
	onClick?: any
}

const ButtonComponent: React.FC<Props> = (
	{ onClick = null, bType = 'xl', stretch = false, noBorder = false, children, type = 'submit', disabled = false },
	...props
) => {
	const style = getStyle(bType, noBorder, stretch)

	return (
		<Button onClick={onClick} style={style} type={props['type'] || 'submit'} disabled={disabled || false} {...props}>
			{' '}
			{children}{' '}
		</Button>
	)
}

export default ButtonComponent
