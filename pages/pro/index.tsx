import React, { useState } from 'react'

import styled from 'styled-components'
import { Flex, Box, Heading, Text } from 'rebass/styled-components'
import { Label, Input, Select, Textarea, Radio, Checkbox } from '@rebass/forms'
import Layout from 'layouts'
import { Button, Container } from 'components'

const Wrapper = styled.div`
	// transition-duration: 150ms;
	// display: flex;

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
		color: rgba(255, 255, 255, 0.5);
		padding-bottom: 15px;
		padding-top: 15px;
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

const initialState = {
	project_name: '',
	project_website: '',

	//address to receive funding
	address: '',
	//
	firstname: '',
	lastname: '',
	email: '',
	phone: '',
	usa_tax: false,
	exposed_person: false,
	//
	currency: 'EUR/PLAY',
	//
	apply_project: false,
	apply_professional: false,
	apply_creator: false,
	apply_publisher: false,
	apply_investor: false,
	// project data
	company: '',
	company_team_description: '',
	company_incorporation_date: '',
	company_address_1: '',
	company_address_2: '',
	company_zip: '',
	company_city: '',
	company_country: '',
	// project data
	project_pitch: '',
	project_startdate: Date.now(),
	project_metrics: '',
	project_platforms: '',
	// funding instruments interested
	funding_target: 0,
	equity: false,
	lending: false,
	presale: false,
}

const Page = () => {
	const [status, setStatus] = useState<TStatus>({
		submitted: false,
		submitting: false,
		visible: true,
		info: { error: false, msg: '' },
	})

	const [inputs, setInputs] = useState(initialState)

	const handleResponse = (httpStatus: number, msg: string): void => {
		if (httpStatus === 200) {
			setStatus({
				submitted: true,
				submitting: false,
				visible: false,
				info: { error: false, msg: msg },
			})

			setInputs(initialState)

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

		console.log(JSON.stringify(inputs))

		const res = await fetch('/api/apply', {
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
				<Wrapper>
					<Flex flexDirection="row" flexWrap="wrap" px={4}>
						<Box width={[1, 1, 3 / 4]} p={[2, 4]}>
							<Text fontSize={[4, 5, 6]} fontWeight={800} pb={[2, 4]} color="#ff00cc">
								GameDAO for professionals.
							</Text>
							<Text fontSize={[3, 4, 5]} fontWeight={800} pt={4} pb={2} color="#ffcc00">
								Let's kickstart your Game, together.
							</Text>

							<Text textAlign="left" fontSize={[2, 3, 4]} fontWeight={400} pb={2}>
								You are a game developer, publisher, production studio or professional investor? With thousands of legit gamers ready to invest
								into the best ideas and productions at scale, GameDAO is for you.
							</Text>

							<Text fontSize={[3, 4, 5]} fontWeight={400} pt={4} pb={2} color="#ff9900">
								Why GameDAO?
							</Text>

							<Text fontSize={[2, 3, 4]} fontWeight={400} pb={2} color="#ffcc00">
								Pitch your production and build sustainable business.
							</Text>
							<Text textAlign="left" fontSize={[2, 3, 4]} fontWeight={400} pb={2}>
								Start building sustainable business in a growing ecosystem powered by the GameDAO community.
							</Text>

							<Text fontSize={[2, 3, 4]} fontWeight={400} pb={2} color="#ffcc00">
								Participate in voting and exclusive investment rounds.
							</Text>
							<Text textAlign="left" fontSize={[2, 3, 4]} fontWeight={400} pb={2}>
								Join industry leaders and enthusiasts in democratised decisions.
							</Text>

							{/*
							 *							APPLICATION
							 */}
							<Text fontSize={[3, 4, 5]} fontWeight={800} pt={4} pb={2} color="#ffcc00">
								Apply now for a Professional Account
							</Text>

							<Text textAlign="left" fontSize={[1, 2, 3]} fontWeight={400} pb={2}>
								All applications will be manually checked, therefore your information is important to keep up the quality of the platform and to
								create a good experience for you.
							</Text>

							{status.info.error && (
								<Text textAlign="left" fontSize={[2, 3, 4]} fontWeight={400} py={2} color="#ff3300">
									{status.info.msg}
								</Text>
							)}

							<form onSubmit={handleOnSubmit}>
								{/*
	LEAD APPLICANT
*/}
								<Text fontSize={[3, 4, 5]} fontWeight={400} py={4} color="#ffcc00">
									Application
								</Text>
								<Label htmlFor="project_name">Project Name</Label>
								<Input id="project_name" type="text" onChange={handleOnChange} value={inputs.project_name} />
								<Label htmlFor="project_website">Website</Label>
								<Input id="project_website" type="text" onChange={handleOnChange} value={inputs.project_website} />
								//
								<Label htmlFor="firstname">Firstname</Label>
								<Input id="firstname" type="text" onChange={handleOnChange} value={inputs.firstname} />
								<Label htmlFor="lastname">Lastname</Label>
								<Input id="lastname" type="text" onChange={handleOnChange} value={inputs.lastname} />
								<Label htmlFor="email">Email</Label>
								<Input id="email" type="email" onChange={handleOnChange} value={inputs.email} />
								<Label htmlFor="phone">Phone</Label>
								<Input id="phone" type="phone" onChange={handleOnChange} value={inputs.phone} />
								<Box width={[1, 1 / 2]}>
									<Label>
										<Checkbox id="usa_tax" name="usa_tax" value={inputs.usa_tax} onChange={handleOnChange} />I am tax liable in the USA
									</Label>
								</Box>
								<Box width={[1, 1 / 2]}>
									<Label>
										<Checkbox id="exposed_person" name="exposed_person" value={inputs.exposed_person} onChange={handleOnChange} />I am a
										public or politically exposed person
									</Label>
								</Box>
								{/*
	CATEGORIES
*/}
								<Text fontSize={[3, 4, 5]} fontWeight={400} py={4} color="#ffcc00">
									Areas of Interest
								</Text>
								<Box>
									<Label>
										<Checkbox id="apply_project" name="apply_project" value={inputs.apply_project} onChange={handleOnChange} />I want to
										submit a project
									</Label>
								</Box>
								<Box>
									<Label>
										<Checkbox
											id="apply_professional"
											name="apply_professional"
											value={inputs.apply_professional}
											onChange={handleOnChange}
										/>
										I am a professional
									</Label>
								</Box>
								<Box>
									<Label>
										<Checkbox id="apply_creator" name="apply_creator" value={inputs.apply_creator} onChange={handleOnChange} />
										Creator, Developer, Game Studio
									</Label>
								</Box>
								<Box>
									<Label>
										<Checkbox id="apply_publisher" name="apply_publisher" value={inputs.apply_publisher} onChange={handleOnChange} />
										Publisher, Distributor
									</Label>
								</Box>
								<Box>
									<Label>
										<Checkbox id="apply_investor" name="apply_investor" value={inputs.apply_investor} onChange={handleOnChange} />
										Professional Investor, VC
									</Label>
								</Box>
								{/*
	COMPANY DATA
*/}
								<Text fontSize={[3, 4, 5]} fontWeight={400} py={4} color="#ffcc00">
									Company Data ( if applicable )
								</Text>
								<Label htmlFor="company">Legal Company Name</Label>
								<Input id="company" type="text" onChange={handleOnChange} value={inputs.company} />
								<Label htmlFor="company_incorporation_date">Date of Incorporation</Label>
								<Input id="company_incorporation_date" type="text" onChange={handleOnChange} value={inputs.company_incorporation_date} />
								<Label htmlFor="company_address_1">Address</Label>
								<Input id="company_address_1" type="text" onChange={handleOnChange} value={inputs.company_address_1} />
								<Label htmlFor="company_address_2">Address</Label>
								<Input id="company_address_2" type="text" onChange={handleOnChange} value={inputs.company_address_2} />
								<Label htmlFor="company_zip">ZIP</Label>
								<Input id="company_zip" type="text" onChange={handleOnChange} value={inputs.company_zip} />
								<Label htmlFor="company_city">City</Label>
								<Input id="company_city" type="text" onChange={handleOnChange} value={inputs.company_city} />
								<Label htmlFor="company_country">Country</Label>
								<Input id="company_country" type="text" onChange={handleOnChange} value={inputs.company_country} />
								<Label htmlFor="company_team_description">Short Team Description</Label>
								<Textarea id="company_team_description" onChange={handleOnChange} value={inputs.company_team_description} />
								{/*
	PROJECT DATA
*/}
								<Text fontSize={[2, 3, 4]} fontWeight={400} py={4} color="#ffcc00">
									Please tell us something about your project, team and/or interests
								</Text>
								<Label htmlFor="project_pitch">Project Description (if applicable)</Label>
								<Textarea id="project_pitch" onChange={handleOnChange} value={inputs.project_pitch} />
								<Button type="submit" disabled={status.submitting}>
									{!status.submitting ? (!status.submitted ? 'Apply' : 'Application sent.') : 'Sending your application...'}
								</Button>
							</form>
						</Box>
					</Flex>
				</Wrapper>
			</Container>
		</Layout>
	)
}

export default Page
