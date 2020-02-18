import React, { useState } from 'react'
import styled from 'styled-components'
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

const Wrapper = styled.div`

	transition-duration:150ms;

	input {
		width: 100%;
		height: 45px;
		border: none;
		border-bottom: 1px dotted white;
		background: none;
		font-size: 25px;
		color: white;
		margin-bottom: 25px;
	}
	textarea {
		width: 100%;
		min-height: 250px;
		border: none;
		border: 1px dotted white;
		background: none;
		font-size: 25px;
		color: white;
		margin-bottom: 25px;
	}
	label {
		font-size: 15px;
		color: rgba( 255,255,255,0.5);
		padding-bottom: 15px;
	}
`

type TStatus = {
	submitted: boolean
	submitting: boolean
	visible: boolean
	info: {
		error: boolean
		msg: string | null
	}
}

export default () => {
	const [status, setStatus] = useState<TStatus>({
		submitted: false,
		submitting: false,
		visible: true,
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
				visible: false,
				info: { error: false, msg: msg },
			})

			setInputs({
				name: '',
				email: '',
				phone: '',
				message: '',
			})

			if (document) {
				document.body.scrollTop = 0
				document.documentElement.scrollTop = 0
			}	

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
			visible: true,
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
					<Box width={[ 1 ]} px={[4, 6]} pt={[4, 6]}>

						<Heading fontSize={[5,6]} pb={4}>Contact</Heading>

						{ status.visible &&

							<Text fontSize={[4,5]}>
								Please fill in the following information.<br/>
								We will get back to you.
								<br/><br/>
							</Text>


						}

						<Wrapper>

							{ status.visible &&

								<form onSubmit={handleOnSubmit}>
									<Label htmlFor="name">Name</Label>
									<Input id="name" type="name" onChange={handleOnChange} value={inputs.name} />
									<Label htmlFor="email">Email</Label>
									<Input id="email" type="email" onChange={handleOnChange} required value={inputs.email} />
									<Label htmlFor="phone">Phone</Label>
									<Input id="phone" type="phone" onChange={handleOnChange} value={inputs.phone} />
									<Label htmlFor="message">Message</Label>
									<Textarea id="message" onChange={handleOnChange} required value={inputs.message} />
 									<Button type="submit" disabled={status.submitting}>
										{!status.submitting ? (!status.submitted ? 'Submit' : 'Submitted') : 'Submitting...'}
									</Button>
								</form>
							}

							{status.info.error &&
								<Text fontSize={[4,5]} color="#ff0000">
									{status.info.msg}
								</Text>
							}

							{!status.info.error && status.info.msg &&
								<Text fontSize={[4,5]}>
									{status.info.msg}
								</Text>
							}

						</Wrapper>
					</Box>
					<Box width={[1, 1, 1, 1 / 2]} p={[2, 4]}>
					</Box>
				</Flex>
			</Container>
		</Layout>
	)
}
