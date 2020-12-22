import React from 'react'
import preset from '@rebass/preset'

export const base = {
	radii: {
		default: 2,
	},
	variants: {
		grid: {
			borderRadius: 1,
			width: '100%',
			height: 'auto',
		},
		smallSelector: {
			fontSize: '6px',
		},
	},
	forms: {
		input: {
			background: 'prime',
			color: 'prime',
			border: 'none',
			borderRadius: 0,
			borderBottomStyle: 'dotted',
			borderBottomWidth: '1px',
			mb: '4',
		},
		textarea: {
			background: 'prime',
			color: 'prime',
			// border: 'none',
			borderRadius: 0,
			borderStyle: 'dotted',
			borderWidth: '1px',
			mb: '2',
		},
		label: {
			mb: '4',
			alignItems: 'center',
		},
		checkbox: {
			mr: 2,
			label: {
				pt: '1',
			},
		},
		select: {
			border: 0,
			fontSize: '10px',
		},
	},
	colors: {
		background: 'green',
		default: 'white',
		red: 'red',
	},
	fonts: {
		default: 'Helvetica Neue, Helvetica, Lato, Arial, sans-serif',
		sans: 'Helvetica Neue, Helvetica, Lato, Arial, sans-serif',
		serif: 'Times New Roman, Times, Georgia, serif',
		heading: 'inherit',
		text: 'inherit',
	},
	fontWeights: {
		body: 400,
		heading: 800,
		bold: 800,
	},
	lineHeights: {
		default: 4.5,
		heading: 1,
		text: 2.25,
	},
}

export default {
	...preset,
	...base,
}
