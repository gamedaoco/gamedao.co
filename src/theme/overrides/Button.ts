import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Button(theme: Theme) {
	return {
		MuiButton: {
			styleOverrides: {
				root: {
					'&:hover': {
						boxShadow: 'none',
					},
					padding: '0.5em 1em',
				},
				sizeLarge: {
					padding: '1em 2em',
				},
				// contained
				containedInherit: {
					color: theme.palette.grey[800],
					boxShadow: theme.customShadows.z8,
					'&:hover': {
						backgroundColor: theme.palette.grey[400],
					},
				},
				containedPrimary: {
					boxShadow: theme.customShadows.primary,
				},
				containedSecondary: {
					boxShadow: theme.customShadows.secondary,
				},
				containedInfo: {
					boxShadow: theme.customShadows.info,
				},
				containedSuccess: {
					boxShadow: theme.customShadows.success,
				},
				containedWarning: {
					boxShadow: theme.customShadows.warning,
				},
				containedError: {
					boxShadow: theme.customShadows.error,
				},
				// outlined
				outlinedInherit: {
					border: `1px solid ${theme.palette.grey[500_32]}`,
					'&:hover': {
						backgroundColor: theme.palette.action.hover,
					},
					height: 48,
					padding: 200,
				},
				textInherit: {
					'&:hover': {
						backgroundColor: theme.palette.action.hover,
					},
				},
			},
		},
	}
}