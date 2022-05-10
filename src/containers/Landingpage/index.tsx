import React, { useCallback } from 'react'

import { styled } from '@mui/system'
import { GRADIENT } from './styles'
import { features } from '../../features'
import { Layout } from 'src/layouts/default'
import { NavLink } from 'src/components'

import { Box, Grid, Card, Paper, Typography, Button, Stack } from '@mui/material'
import { Hero, Intro, Teaser, Wallet, Team, Partners, Supporters, Roadmap, Disclaimer } from './modules'

const Wrapper = styled(Box)(
	({ theme }) => ({
		// '& *': {
		// 	opacity: .9,
		// 	':hover': {
		// 		opacity: 1,
		// 	}
		// }
	})
)

export function Landingpage() {

	const { hero, intro, teaser1, roadmap, team, partners, supporters, wallet, disclaimer } = features

	return (
		<Wrapper>
			{ hero && <Hero /> }
			{ intro && <Intro/> }
			{ teaser1 && <Teaser variant="h2" padding={'2rem'}>
				Let's bring Community powered ownership to the masses
				</Teaser>
			}
			{ roadmap && <Roadmap/> }
			{ team && <Team/> }
			{ partners && <Partners/> }
			{ supporters && <Supporters/> }
			{ wallet && <Wallet /> }
			{ disclaimer && <Disclaimer/> }
		</Wrapper>
	)

}

export default Landingpage
