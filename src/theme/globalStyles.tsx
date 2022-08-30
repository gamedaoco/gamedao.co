// material
import { useTheme } from '@mui/material/styles'
import { GlobalStyles as GlobalThemeStyles } from '@mui/material'

// ----------------------------------------------------------------------

export default function GlobalStyles() {
	const theme = useTheme()

	return (
		<GlobalThemeStyles
			styles={{
				'*': {
					margin: 0,
					padding: 0,
					boxSizing: 'border-box',
					transitionDuration: '150ms',
				},
				html: {
					width: '100%',
					height: '100%',
					overflow: 'scroll',
					overflowX: 'hidden',
					scrollBehavior: 'smooth',
					WebkitOverflowScrolling: 'touch',
					// scrollbarWidth: 'thin',
					scrollbarColor: 'rgba( 255, 0, 255, 1 )',
				},
				'::-webkit-scrollbar': {
					// width: '2px',
					background: '#102',
				},
				'::-webkit-scrollbar-thumb': {
					background: 'rgba( 255, 0, 255, 1 )',
				},
				body: {
					width: '100%',
					height: '100%',
					background: '#102',
				},
				'#__next': {
					width: '100%',
					height: '100%',
				},
				input: {
					'&[type=number]': {
						MozAppearance: 'textfield',
						'&::-webkit-outer-spin-button': {
							margin: 0,
							WebkitAppearance: 'none',
						},
						'&::-webkit-inner-spin-button': {
							margin: 0,
							WebkitAppearance: 'none',
						},
					},
				},
				textarea: {
					'&::-webkit-input-placeholder': {
						color: theme.palette.text.disabled,
					},
					'&::-moz-placeholder': {
						opacity: 1,
						color: theme.palette.text.disabled,
					},
					'&:-ms-input-placeholder': {
						color: theme.palette.text.disabled,
					},
					'&::placeholder': {
						color: theme.palette.text.disabled,
					},
				},
				'a, :hover, :visited': {
					textDecoration: 'none',
					color: theme.palette.text.primary,
				},
				img: { display: 'block', maxWidth: '100%' },
				// Lazy Load Img
				'.blur-up': {
					WebkitFilter: 'blur(5px)',
					filter: 'blur(5px)',
					transition: 'filter 400ms, -webkit-filter 400ms',
				},
				'.blur-up.lazyloaded ': {
					WebkitFilter: 'blur(0)',
					filter: 'blur(0)',
				},
			}}
		/>
	)
}
