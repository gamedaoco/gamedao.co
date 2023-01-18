import { Theme } from '@mui/material/styles'

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		micro: true
		grey: true
		lemon: true
		pink: true
	}
}

export default function Button(theme: Theme) {
	return {
		MuiButton: {

			variants: [
				{
					props: { variant: 'micro' },
					style: {
						height: '20px',
						fontSize: '10px',
						background: 'none',
						boxShadow: theme.customShadows.primary,
						border: `1px solid ${theme.palette.grey[500_32]}`,
						borderRadius: theme.shape.borderRadiusLg,
						// p: `1rem`,
						// m: `1rem`,
					},
				},
				{
					props: { variant: 'grey' },
					style: {
						height: '44px',
						fontSize: '1rem',
						background: '#333333',
						border: 0,
						// boxShadow: theme.customShadows.primary,
						borderRadius: theme.shape.borderRadiusSm,
					},
				},
				{
					props: { variant: 'lemon' },
					style: {
						height: '44px',
						fontSize: '1rem',
						background: '#f3cb14',
						color: '#111111',
						'&:hover': { color: '#ffffff' },
						border: 0,
						// boxShadow: theme.customShadows.primary,
						borderRadius: theme.shape.borderRadiusSm,
					},
				},
				{
					props: { variant: 'pink' },
					style: {
						height: '48px',
						fontSize: '1rem',
						background: '#ee4693ff',
						color: '#ffffff',
						'&:hover': { color: '#ffffff' },
						border: 0,
						// boxShadow: theme.customShadows.primary,
						// borderRadius: theme.shape.borderRadiusSm,
					},
				},
			],

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
					border: `2px solid ${theme.palette.grey[500_32]}`,
					'&:hover': {
						backgroundColor: theme.palette.action.hover,
					},
					height: 48,
					padding: 200,
				},
				outlinedPrimary: {
					border: `1px solid white`,
					// '&:hover': {
					// 	backgroundColor: theme.palette.action.hover,
					// },
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
