import * as React from 'react'
import styled from 'styled-components'

import Input from '../Input'

const StyledInputCode = styled.div`
	color: black;
`

interface Props {
	onChange?: any
	code?: string
	placeholder?: string
	value?: string
}

interface State {}

class InputCode extends React.Component<Props, State> {
	private _handleOnChange = (value?: any) => {
		const { onChange = () => {} } = this.props
		onChange(value)
	}

	render() {
		const { code = '' } = this.props

		return (
			<StyledInputCode>
				<Input name={code} onChange={this._handleOnChange} type="text" />
			</StyledInputCode>
		)
	}
}

export default InputCode
