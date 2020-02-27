import * as React from 'react'
import styled from 'styled-components'

const IntroWrapper = styled.div`
	margin: 0;
	width: 100%;
	min-height: calc(100vh - 100px);
	box-sizing: border-box;
	border-radius: 7px;
`
interface IIntro {
	mode?: string
	image?: string
	children?: object | React.ReactNodeArray
}

const get = (mode: string = '', image: string = '') => {
	switch (mode) {
		case 'white':
			return {
				background: '#fcfcfc',
				color: '#111111',
			}

		case 'dark':
			return {
				background: 'black',
				color: '#fcfcfc',
			}

		case 'gradient':
			return {
				backgroundImage: 'linear-gradient(red,yellow)',
				color: '#111111',
			}

		case 'image':
			return {
				color: '#eee',
				background: `url('${image}') no-repeat center center`,
				backgroundSize: 'cover',
				height: '100%',
				overflow: 'hidden',
			}

		default:
			return {
				background: 'none',
				color: '#eee',
			}
	}
}

const Intro: React.FC<IIntro> = ({ mode, image, children }) => (
	<IntroWrapper style={get(mode, image)}>{children}</IntroWrapper>
)

export default Intro
