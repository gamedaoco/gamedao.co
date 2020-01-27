import * as React from 'react'
import styled from 'styled-components'
import Input from '../Input'

const StyledInputText = styled.div`
	color: black;
`

interface Props {
	onChange?: any
	name?: string
	placeholder?: string
}

interface State {}

class InputText extends React.Component<Props, State> {
	private _handleOnChange = (value?: any) => {
		const { onChange = () => {} } = this.props
		onChange(value)
	}

	render() {
		const { name = 'InputText', placeholder = '' } = this.props

		return (
			<StyledInputText>
				<Input type="text" name={name} placeholder={placeholder} onChange={this._handleOnChange} />
			</StyledInputText>
		)
	}
}

export default InputText
