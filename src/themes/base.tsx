import React from 'react'
import preset from '@rebass/preset'

export const base = {
	colors: {
		background: 'green',
		default: 'white',
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
		heading: 0.1,
		text: 2.25,
	},
}

export default {
	...preset,
	...base,
}
