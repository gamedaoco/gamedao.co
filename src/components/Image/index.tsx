import * as React from 'react'
import styled from 'styled-components'

import dummy from '../../../public/svg/box.svg'

const Wrapper = styled.div`
	margin: 0;
	padding: 0;
	width: auto;
	height: auto;
`

interface IImageProps {
	src?: string
	alt?: string
	width?: number
	height?: number
	aspect?: number
}

const Image: React.FC<IImageProps> = ({ src, alt, width, height }) => {
	// const baseSize = 512

	return (
		<Wrapper>
			<img
				src={src || dummy}
				alt={alt || 'image'}
				//				style={{
				//					backgroundImage: 'url(https://source.unsplash.com/random/' + baseSize + 'x' + ( baseSize * ( aspect || 1 ) ) + ')',
				//					backgroundPosition: 'center',
				//					backgroundSize: 'cover',
				//					backgroundRepeat: 'no-repeat'
				//				}}
				width={width || '100%'}
				height={height || '100%'}
			/>
		</Wrapper>
	)
}

export default Image
