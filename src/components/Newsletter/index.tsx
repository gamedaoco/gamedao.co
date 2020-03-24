import React, { useState } from 'react'

import MailchimpSubscribe from 'react-mailchimp-subscribe'

import styled from 'styled-components'
import { Flex, Box, Card, Heading } from 'rebass'
import { Button } from 'components'

import { MAILCHIMP } from 'config/env'

const Wrapper = styled.div`
	width: 100%;
	height: 100px;
	text-align: 'middle';
	background-color: none;

	padding: 0;
	margin: 0;

	.bar {
		width: 100%;
		display: table-cell;
	}

	.email {
		width: 100%;
		height: 30px;
		border: none;
		border-bottom: 1px dotted white;
		background: none;
		font-size: 15px;
		color: white;
	}

	button {
		margin-left: 20px;
		display: table-cell;
	}

	a {
		color: white;
		text-decoration: none;
	}
	a:hover {
		border-bottom: none;
	}

	.formWrapper {
		display: table;
		width: 100%;
		a {
			font-size: 15px;
		}
	}
`

type FormProps = {
	status: string | null
	message: string | null
	onValidated: Function
}

const CustomForm: React.FC<FormProps> = ({ status, message, onValidated }) => {
	const [inputs, setInputState] = useState({ email: '' })

	const handleOnChange = (e) => {
		e.persist()
		setInputState((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}))
	}

	const handleOnSubmit = (e) => {
		e.preventDefault()
		inputs.email.indexOf('@') > -1 &&
			onValidated({
				EMAIL: inputs.email,
			})
	}

	return (
		<div>
			<div className="formWrapper">
				<div className="bar">
					<input id="email" className="email" type="email" placeholder="Your email" onChange={handleOnChange} />
				</div>
				<a onClick={handleOnSubmit}>
					<Button bType="sm" type="submit">
						Submit
					</Button>
				</a>
			</div>
			{status === 'sending' && <div style={{ color: 'white', fontSize: '15x', paddingTop: '15px' }}>sending...</div>}
			{status === 'error' && <div style={{ color: 'red', fontSize: '15px', paddingTop: '15px' }} dangerouslySetInnerHTML={{ __html: message || '' }} />}
			{status === 'success' && (
				<div style={{ color: 'white', fontSize: '15px', paddingTop: '15px' }} dangerouslySetInnerHTML={{ __html: message || '' }} />
			)}
		</div>
	)
}

const Newsletter: React.FC = () => (
	<Wrapper>
		<MailchimpSubscribe
			url={MAILCHIMP || ''}
			render={({ subscribe, status, message }) => <CustomForm status={status} message={message} onValidated={(formData) => subscribe(formData)} />}
		/>
	</Wrapper>
)

export default Newsletter
