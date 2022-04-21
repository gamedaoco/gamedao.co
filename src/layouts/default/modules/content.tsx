import React from 'react'
import { Container, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

interface ComponentProps {
	children?: React.ReactNode
}

export const Content = ({ children }: ComponentProps) => {
	const theme = useTheme()

	return (
		<Container>
			<Box py={{ xs: '4rem', sm: '6rem', md: '8rem' }}>{children || null}</Box>
		</Container>
	)
}
