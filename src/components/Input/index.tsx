import React, { useState } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
	color: black;
	width: 100%;
	height: 50px;
	padding: 0 15px;
	font-size: 20px;
	margin-bottom: 15px;
	border: 0;
	border-bottom: 1px dotted black;
	background-color: #fafafa;
	:hover {
		background-color: #f0f0f0;
	}
`

interface Props {
	type?: string
	onChange?: any
	name?: string
	placeholder?: string
	value?: string
}

interface State {}

class Input extends React.Component<Props, State> {
	private _handleOnChange = (event?: any) => {
		const { onChange = () => {} } = this.props
		onChange(event.target.value)
	}

	render() {
		const { type = 'text', name = 'default', placeholder = '' } = this.props

		return <StyledInput name={name} placeholder={placeholder} type={type} onChange={this._handleOnChange} />
	}
}

export default Input
