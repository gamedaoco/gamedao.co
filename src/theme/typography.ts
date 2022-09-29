declare module '@mui/material/styles' {
	interface TypographyVariants {
		hero1: React.CSSProperties
		hero2: React.CSSProperties
	}
	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		hero1?: React.CSSProperties
		hero2?: React.CSSProperties
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		hero1: true
		hero2: true
	}
}

// ----------------------------------------------------------------------

function pxToRem(value: number) {
	return `${value / 18}rem`
}

function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
	return {
		'@media (min-width:600px)': {
			fontSize: pxToRem(sm),
		},
		'@media (min-width:900px)': {
			fontSize: pxToRem(md),
		},
		'@media (min-width:1200px)': {
			fontSize: pxToRem(lg),
		},
	}
}

//  Gill Sans Nova Bold
// font-family: gill-sans-nova, sans-serif;
// font-weight: 700;
// font-style: normal;

// Gill Sans Nova Bold Italic
// font-family: gill-sans-nova, sans-serif;
// font-weight: 700;
// font-style: italic;

// Gill Sans Nova Book
// font-family: gill-sans-nova, sans-serif;
// font-weight: 400;
// font-style: normal;

// Gill Sans Nova Book Italic
// font-family: gill-sans-nova, sans-serif;
// font-weight: 400;
// font-style: italic;

// Gill Sans Nova ExtraBold
// font-family: gill-sans-nova, sans-serif;
// font-weight: 900;
// font-style: normal;

const FONT_PRIMARY = 'Inter, sans-serif'
const FONT_HEADER = 'gill-sans-nova, Helvetica Neue, Helvetica, sans-serif'
// const FONT_SECONDARY = 'Times New Roman, serif'; // Local Font

const typography = {
	fontFamily: FONT_PRIMARY,

	fontWeightRegular: 400,
	fontWeightMedium: 600,
	fontWeightBold: 800,

	h1: {
		fontFamily: FONT_HEADER,
		fontWeight: 800,
		lineHeight: 80 / 64,
		fontSize: pxToRem(40),
		...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
	},
	h2: {
		fontFamily: FONT_HEADER,
		fontWeight: 800,
		lineHeight: 64 / 48,
		fontSize: pxToRem(32),
		...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
	},
	h3: {
		fontFamily: FONT_HEADER,
		fontWeight: 600,
		lineHeight: 1,
		fontSize: pxToRem(24),
		...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
	},
	h4: {
		fontFamily: FONT_HEADER,
		fontWeight: 600,
		lineHeight: 1,
		fontSize: pxToRem(20),
		...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
	},
	h5: {
		fontFamily: FONT_HEADER,
		fontWeight: 600,
		lineHeight: 1.5,
		fontSize: pxToRem(18),
		...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
	},
	h6: {
		fontFamily: FONT_HEADER,
		fontWeight: 600,
		lineHeight: 28 / 18,
		fontSize: pxToRem(17),
		...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
	},

	subtitle1: {
		fontWeight: 400,
		lineHeight: 1.5,
		fontSize: pxToRem(16),
	},
	subtitle2: {
		fontWeight: 400,
		lineHeight: 22 / 14,
		fontSize: pxToRem(16),
	},
	body1: {
		lineHeight: 1.5,
		fontSize: pxToRem(16),
		...responsiveFontSizes({ sm: 16, md: 16, lg: 20 }),
	},
	body2: {
		lineHeight: 22 / 14,
		fontSize: pxToRem(14),
	},
	caption: {
		lineHeight: 1.5,
		fontSize: pxToRem(12),
	},
	overline: {
		fontWeight: 400,
		lineHeight: 1.5,
		fontSize: pxToRem(12),
		letterSpacing: 1.1,
		textTransform: 'uppercase',
	},
	button: {
		fontWeight: 800,
		lineHeight: 24 / 14,
		fontSize: pxToRem(14),
		textTransform: 'capitalize',
	},

	hero1: {
		fontFamily: FONT_HEADER,
		fontWeight: 800,
		lineHeight: 80 / 64,
		fontSize: pxToRem(40),
		...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
		float: 'left',
		textShadow: 'rgba(0,0,0,1) 0 5px 20px',
		WebkitTextStrokeWidth: '1px',
		WebkitTextStrokeColor: 'rgba(0,0,0,0.2)',
	},
	hero2: {
		fontFamily: FONT_HEADER,
		fontWeight: 800,
		lineHeight: 64 / 48,
		fontSize: pxToRem(32),
		...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
		float: 'left',
		textShadow: 'rgba(0,0,0,1) 0 5px 20px',
		WebkitTextStrokeWidth: '1px',
		WebkitTextStrokeColor: 'rgba(0,0,0,0.2)',
	},
} as const

export default typography
