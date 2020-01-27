import React, { useState } from 'react'
import Layout from '../src/layouts/default'
import { Flex, Box, Heading, Text } from 'rebass/styled-components'
import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
} from '@rebass/forms'
import { Container, Button } from '../src/components'

type TStatus = {
	submitted: boolean
	submitting: boolean
	info: {
		error: boolean
		msg: string | null
	}
}

export default () => {
	const [status, setStatus] = useState<TStatus>({
		submitted: false,
		submitting: false,
		info: { error: false, msg: '' },
	})

	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	})

	const handleResponse = (httpStatus: number, msg: string): void => {
		if (httpStatus === 200) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg },
			})

			setInputs({
				name: '',
				email: '',
				phone: '',
				message: '',
			})
		} else {
			setStatus({
				...status,
				info: { error: true, msg: msg },
			})
		}
	}

	const handleOnChange = e => {
		e.persist()

		setInputs(prev => ({
			...prev,
			[e.target.id]: e.target.value,
		}))

		setStatus({
			...status,
			submitted: false,
			submitting: false,
			info: { error: false, msg: null },
		})
	}

	const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {

		e.preventDefault()

		setStatus(prevStatus => ({ ...prevStatus, submitting: true }))

		const res = await fetch('/api/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(inputs),
		})
		const text = await res.text()

		handleResponse(res.status, text)
		
	}

	return (
		<Layout>
			<Container>
				<Flex flexDirection="row" flexWrap="wrap">
					<Box width={[1,1/2]} p={[2, 4]}>

						<Heading>Contact</Heading>

						<Text>
							Please fill in the following information.<br/>
							We will get back to you.
						</Text>
						<br/><br/>
						<form onSubmit={handleOnSubmit}>

							<Label htmlFor="name">Name</Label>
							<Input id="name" type="name" onChange={handleOnChange} value={inputs.name} />
							<br/><br/>
							<Label htmlFor="email">Email</Label>
							<Input id="email" type="email" onChange={handleOnChange} required value={inputs.email} />
							<br/><br/>
							<Label htmlFor="phone">Phone</Label>
							<Input id="phone" type="phone" onChange={handleOnChange} value={inputs.phone} />
							<br/><br/>
							<Label htmlFor="message">Message</Label>
							<Textarea id="message" onChange={handleOnChange} required value={inputs.message} />
							<br/><br/>
							<Button type="submit" disabled={status.submitting}>
								{!status.submitting ? (!status.submitted ? 'Submit' : 'Submitted') : 'Submitting...'}
							</Button>

						</form>

						{status.info.error && <div className="error"><br/><br/>Error: {status.info.msg}</div>}
						{!status.info.error && status.info.msg && <div className="success"><br/><br/>{status.info.msg}</div>}
					</Box>
					<Box width={[1, 1, 1, 1 / 2]} p={[2, 4]}>
					</Box>
				</Flex>
			</Container>
		</Layout>
	)
}
