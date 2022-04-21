// ----------------------------------------------------------------------

declare module '@mui/system' {
	interface Shape {
		borderRadiusSm: number | string
		borderRadiusMd: number | string
	}
}

const shape = {
	borderRadius: '0.5rem',
	borderRadiusSm: '0.25rem',
	borderRadiusMd: '1rem',
}

export default shape
