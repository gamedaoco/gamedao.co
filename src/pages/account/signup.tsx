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

import { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Flex, Box, Heading, Text } from 'rebass'
import { Link, Intro, Container } from 'components'

import img from 'public/img/1.png'
import logo from 'public/z-ctrl-45-wht.svg'

import { IoIosArrowRoundDown } from 'react-icons/io'

const Page = () => {
	return (
		<Container>
			<Flex id="content" flexDirection="row" flexWrap="wrap" color="rgba(255,255,255,.65)">
				<Box width={[1]} px={[4, 6]} py={[2, 4]}></Box>
			</Flex>
		</Container>
	)
}

export default Page
