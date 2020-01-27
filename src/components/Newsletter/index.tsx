import * as React from 'react'
import styled from 'styled-components'
import { Flex, Box, Card, Heading } from 'rebass'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import { Button } from '../'
import { MAILCHIMP_URL } from '../../../config/env'

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

type CustomFormProps = {
	status: string | null
	message: string | null
	onValidated: Function
}
const CustomForm: React.SFC<CustomFormProps> = ({ status, message, onValidated }) => {
	let state = {
		email: '',
	}

	const _handleOnChange = (value?: any) => {
		state.email = value
	}

	const submit = () =>
		state.email &&
		state.email.indexOf('@') > -1 &&
		onValidated({
			EMAIL: state.email,
		})

	return (
		<div>
			{status === 'sending' && <div style={{ color: 'white', fontSize: '10px' }}>sending...</div>}

			{status === 'error' && (
				<div
					style={{ color: 'red', fontSize: '10px', paddingBottom: '10px' }}
					dangerouslySetInnerHTML={{ __html: message || '' }}
				/>
			)}

			{status === 'success' && (
				<div
					style={{ color: 'white', fontSize: '10px', paddingBottom: '10px' }}
					dangerouslySetInnerHTML={{ __html: message || '' }}
				/>
			)}

			<div className="formWrapper">
				<div className="bar">
					<input className="email" type="email" placeholder="Your email" onChange={_handleOnChange} />
				</div>
				<a onClick={submit}>
					<Button bType="sm">Submit</Button>
				</a>
			</div>
		</div>
	)
}

const Newsletter: React.SFC = () => (
	<Wrapper>
		<MailchimpSubscribe
			url={MAILCHIMP_URL || ''}
			render={({ subscribe, status, message }) => (
				<CustomForm status={status} message={message} onValidated={formData => subscribe(formData)} />
			)}
		/>
	</Wrapper>
)

export default Newsletter

// const Wrapper = styled.div`
// 	width: 100%;
// 	height: 100px;
// 	text-align: 'middle';
// 	font-size: 20px;

// 	.bar {
// 		width: 100%;
// 		display: table-cell;
// 	}

// 	.email {
// 		display: table-cell;

// 		background: white;
// 		color: #111111;
// 		border: 0;
// 		border-bottom: 1px dotted black;
// 		min-width: 200px;
// 		width: 100%;
// 		height: 40px;
// 		padding: 5px 10px;
// 		font-size: 20px;
// 	}

// 	.submit {
// 		display: table-cell;
// 		background: #111111;
// 		color: white;
// 		border: 2px solid white;
// 		padding: 5px 10px;
// 		margin-left: 20px;
// 		min-width: 200px;
// 		width: auto;
// 		height: 40px;
// 		font-size: 15px;
// 		text-transform: uppercase;
// 		text-align: left;
// 	}

// 	button:hover {
// 		background: white;
// 		color: #111111;
// 	}

// 	.formWrapper {
// 		display: table;
// 		width: 100%;
// 		a {
// 			font-size: 20px;
// 			color: white;
// 		}
// 	}
// 	.status,
// 	.error,
// 	.success {
// 		font-size: 20px;
// 		font-style: italic;
// 		color: white;
// 		padding: 10px 0;
// 		a,
// 		a:visited {
// 			color: white;
// 		}
// 	}
// `

// const CustomForm = ({ status, message, error, onValidated }) => {
// 	let email

// 	const submit = () =>
// 		email &&
// 		email.value.indexOf('@') > -1 &&
// 		onValidated({
// 			EMAIL: email.value,
// 		})

// 	return (
// 		<div>
// 			<div className="formWrapper">
// 				<div className="bar">
// 					<input className="email" ref={node => (email = node)} type="email" placeholder="enter your email" />
// 				</div>
// 				<Button onClick={submit} noBorder type='xl'>
// 					Submit
// 				</Button>
// 			</div>

// 			{status === 'sending' && <div className="status">sending...</div>}
// 			{status === 'error' && <div className="error" dangerouslySetInnerHTML={{ __html: message }} />}
// 			{status === 'success' && <div className="success" dangerouslySetInnerHTML={{ __html: message }} />}
// 		</div>
// 	)
// }

// interface INewsletterProps {
// 	mx?: string | number
// }

// const Newsletter: React.SFC<INewsletterProps> = ({ mx }) => (
// 	<Wrapper>
// 		<Flex flexDirection="row" flexWrap="wrap" mx={mx || '0'}>
// 			<MailchimpSubscribe
// 				url={MAILCHIMP_URL}
// 				render={({ subscribe, status, error, message }) => (
// 					<CustomForm
// 						status={status}
// 						message={message}
// 						error={error}
// 						onValidated={formData => subscribe(formData)}
// 					/>
// 				)}
// 			/>
// 		</Flex>
// 	</Wrapper>
// )

// export default Newsletter
