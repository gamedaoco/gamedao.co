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
			<Box py={{ xs: '1rem', md: '2rem' }}>
				{ children || null }
			</Box>
		</Container>
	)
}
