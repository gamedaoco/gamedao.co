import { styled } from '@mui/system'
import { Typography } from '@mui/material'

export const Teaser = styled(Typography)(
	({ theme }) => ({
		width: '100%',
		color: theme.palette.text.secondary,
		fontWeight: 900,
		lineHeight: "85%",
		textTransform: 'uppercase',
		justifyContent: 'middle',
		verticalAlign: 'center',
		textAlign: 'center',
	})
)