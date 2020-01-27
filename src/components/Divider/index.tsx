import * as React from 'react'
import styled from 'styled-components'
import img16 from 'public/stripes-s.png'
import img32 from 'public/stripes-m.png'

interface IDivider {
	sm?: boolean
}

const Divider = styled.div<IDivider>(({ sm }) => ({
	minWidth: `100%`,
	height: `${sm ? '16' : '32'}px`,
	background: `repeat-x url('${sm ? img16 : img32}')`,
	marginBottom: `1em`,
}))

export default Divider
