import React, { useState, FC } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Box, Input, InputAdornment, Typography, Button, Stack } from '@mui/material'
import Email from '@mui/icons-material/EmailOutlined'

const MAILCHIMP = process.env.MAILCHIMP

type FormProps = {
	status: string | null
	message: string | null
	onValidated: Function
}

const CustomForm: FC<FormProps> = ({ status, message, onValidated }) => {

	const [ inputs, setInputState ] = useState({ email: '' })

	const handleOnChange = (e) => {
		e.persist()
		setInputState((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}))
	}

	const handleOnSubmit = (e) => {
		console.log('click', inputs.email)
		inputs.email.indexOf('@') > -1 &&
			onValidated({
				EMAIL: inputs.email,
			})
	}

	return (
		<Box m={0} p={4} sx={{ backgroundColor: '#202'}}>
			<Stack direction="column" justifyContent="center" alignItems="center">

				<Typography pb={2} variant="h3">Know it first and subscribe to our newsletter</Typography>

				<Stack direction="row" spacing={2}>
					<Input
						sx={{
							'& input::-webkit-input-placeholder': { color: '#fff' },
							'& input::placeholder': { color: '#fff' },
							'& input::-ms-input-placeholder': { color: '#fff' }
						}}
						id="email"
						startAdornment={
							<InputAdornment position="start">
								<Email sx={{
									color: '#fff',
								}}/>
							</InputAdornment>
						}
						type="email"
						placeholder="Your email"
						onChange={handleOnChange}
					/>
					<Button onClick={handleOnSubmit} size="medium" variant="outlined">
						Submit
					</Button>
				</Stack>

				{ status === 'sending' && (<Typography pt={2}>sending...</Typography> ) }
				{ status === 'error' && (<Typography pt={2} dangerouslySetInnerHTML={{ __html: message || '' }} /> ) }
				{ status === 'success' && (<Typography pt={2} dangerouslySetInnerHTML={{ __html: message || '' }} /> ) }

			</Stack>
		</Box>
	)
}

export const Newsletter: React.FC = () => (
	<MailchimpSubscribe
		url={'https://zero.us5.list-manage.com/subscribe/post?u=9b3f3ef14c871758185754652&amp;id=d09264f8c7'}
		render={({ subscribe, status, message }) => (
			<CustomForm
				status={status}
				message={message}
				onValidated={(formData) => subscribe(formData)}
			/>
		)}
	/>
)

export default Newsletter
