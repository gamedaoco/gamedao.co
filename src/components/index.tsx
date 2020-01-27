import styled from 'styled-components'

//
// atoms
//

export { default as Button } from './Button'
export { default as Image } from './Image'
export { default as Divider } from './Divider'

export { default as Input } from './Input'
export { default as InputCode } from './InputCode'
export { default as InputEmail } from './InputEmail'
export { default as InputPassword } from './InputPassword'
export { default as InputText } from './InputText'

export { default as Link } from './Link'
export { default as Intro } from './Intro'
export { default as Loader } from './Loader'

//
// molecules
//

export { default as ContentCTA } from './ContentCTA'
export { default as Newsletter } from './Newsletter'
export { default as TeaserContent } from './TeaserContent'

//
// organisms
//

export { default as Header } from './Header'
export { default as Footer } from './Footer'
export { default as Navigation } from './Navigation'

//
// templates and wrappers
//

export { default as View } from './View'
export { default as Layout } from './Layout'

//
//	other components
//

export const Headline = styled.div`
	font-size: 15px;
	line-height: 1.1;
	letter-spacing: 0.5px;
	margin-bottom: 15px;
	display: block;
`
export const H1 = styled(Headline)`
	font-size: 30px;
`
export const H2 = styled(Headline)`
	font-size: 25px;
`
export const H3 = styled(Headline)`
	font-size: 20px;
`
export const H4 = styled(Headline)`
	font-size: 15px;
`

export const Text = styled.div`
	line-height: 1.5;
	font-size: 15px;
	letter-spacing: 0.5px;
	margin-bottom: 15px;
	a {
		text-decoration: none;
		color: white;
	}
	a:hover {
		border-bottom: 1px dotted;
	}
	display: inline-block;
`

export const SmallText = styled(Text)`
	font-size: 10px;
`

export const Space = ({ size = 1 }) => styled.div`
	width: 100%;
	margin-bottom: ${size * 15}px;
	border: 1px solid red;
`

type IContainer = {
	fill?: boolean
}

export const Container = styled.div<IContainer>(({ fill = 'true' }) => ({
	backgroundColor: '#000',
	margin: '0',
	padding: '0',
	width: '100%',
	minHeight: fill ? '100vh' : 'auto',
}))

type IContent = {
	fill?: boolean
}

export const Content = styled.div<IContent>(({ fill = 'true' }) => ({
	backgroundColor: '#000000',
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