/**
           _______________________________ ________
           \____    /\_   _____/\______   \\_____  \
             /     /  |    __)_  |       _/ /   |   \
            /     /_  |        \ |    |   \/    |    \
           /_______ \/_______  / |____|_  /\_______  /
                   \/        \/         \/         \/
		   Z  E  R  O  .  I  O     N  E  T  W  O  R  K
		   © C O P Y R I O T   2 0 7 5   Z E R O . I O
**/

import * as React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass/styled-components'
import Layout from 'layouts'

const Wrapper = styled.div`
	overflow: hidden;
	min-width: 100vw;
`
// flex-grow: 1;
// flex-shrink: 0;
// height: 100vh;
// overflow: hidden;

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
	<Wrapper>
		<GuruMeditation>
			<p>Software failure.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Press left mouse button to continue.</p>
			<p>Guru Meditation #00000001.00001337</p>
		</GuruMeditation>
	</Wrapper>
)

export default Page
