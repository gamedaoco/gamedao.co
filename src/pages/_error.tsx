import * as React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass/styled-components'
import Layout from 'layouts'

const Wrapper = styled.div`
	flex-grow: 1;
	flex-shrink: 0;

	min-width: 100% !important;
	min-height: 100vh;
`

const GuruMeditation = styled.div`
	flex-grow: 1;
	flex-shrink: 0;

	padding: 1em 2em;

	font-family: monospace;
	font-size: 16px;
	font-weight: bold;
	text-align: center;

	background-color: #000000;
	color: #ff0000;
	border: 0.5em solid red;

	animation: blink 1s step-end infinite alternate;
	@keyframes blink {
		50% {
			border-color: black;
		}
		100% {
			border-color: red;
		}
	}
`

const Page = ({ req, res }) => (
	<Layout noHeader>
		<Wrapper>
			<GuruMeditation>
				<p>Software failure.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Press left mouse button to continue.</p>
				<p>Guru Meditation #00000001.00001337</p>
			</GuruMeditation>
		</Wrapper>
	</Layout>
)

export default Page
