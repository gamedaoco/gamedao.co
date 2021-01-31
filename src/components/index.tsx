import styled from 'styled-components'
import theme from '../themes/base'

//
// atoms
//

export { default as Button } from './Button'
export { default as Image } from './Image'
export { default as Divider } from './Divider'

export { default as Link } from './Link'
export { default as Intro } from './Intro'
export { default as Loader } from './Loader'

//
// molecules
//

export { default as ContentCTA } from './ContentCTA'
export { default as Newsletter } from './Newsletter'
export { default as ContentGrid } from './ContentGrid'
export { default as ContentFilter } from './ContentFilter'
export { default as ContentSearch } from './ContentSearch'

export { default as Notification } from './Notification'
export { default as Modal } from './Modal'

//
// organisms
//

export { default as Header } from './Header'
export { default as Footer } from './Footer'
export { default as Navigation } from './Navigation'

//
// templates, wrappers, themes
//

export { default as View } from './View'

//
//	other components
//

export const H1 = styled.h1`
	font-size: 30px;
`
export const H2 = styled.h2`
	font-size: 25px;
`
export const H3 = styled.h3`
	font-size: 20px;
`
export const H4 = styled.h4`
	font-size: 15px;
`

export const Text = styled.div`
	font-size: 15px;
	letter-spacing: 1.1px;
	linespacing: 1.2;
	margin-bottom: 15px;
	a {
		text-decoration: none;
		// color: white;
	}
	a:hover {
		border-bottom: 1px dotted;
	}
	display: inline-block;
`

export const SmallText = styled(Text)`
	font-size: 10px;
	* {
		font-size: 10px;
	}
`

export const Space = ({ size = 1 }) => styled.div`
	width: 100%;
	margin-bottom: ${size * 15}px;
`

type IContainer = {
	fill?: boolean
}

export const Container = styled.div<IContainer>(({ fill = 'true' }) => ({
	margin: '0',
	padding: '0',
	width: '100%',
	minHeight: fill ? '100vh' : 'auto',
}))

type IContent = {
	fill?: boolean
}

export const Content = styled.div<IContent>(({ fill = 'true' }) => ({
	margin: '0',
	padding: '0',
	width: '100%',
	minHeight: fill ? '100vh' : 'auto',
}))

type BorderProps = {
	color?: string
	width?: string
}

export const Border = styled.div<BorderProps>(({ color, width }) => ({
	border: `${width || '1px'} solid ${color || 'white'}`,
}))
