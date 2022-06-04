import React, { useCallback } from 'react'

import { styled } from '@mui/system'
import { GRADIENT } from './styles'
import { features } from '../../features'
import { Layout } from 'src/layouts/default'
import { NavLink } from 'src/components'

import { Box, Container } from '@mui/material'
import { Hero, Intro, Teaser, Wallet, Team, Partners, Supporters, Roadmap, Disclaimer, Questions } from './modules'

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

	const { hero, intro, teaser1, roadmap, team, partners, supporters, wallet, disclaimer, questions } = features

	return (
		<Box>

			{ hero && <Hero /> }

			<Container maxWidth="xl">

				{ intro && <Intro/> }
				{ teaser1 && <Teaser variant="h2" padding={[2,4,6]}>
					Let's bring Community powered ownership to the masses
					</Teaser>
				}

				{ roadmap && <Roadmap/> }

				{ team && <Team/> }
				{ partners && <Partners/> }
				{ supporters && <Supporters/> }

				{ wallet && <Wallet /> }

				{ questions && <Questions /> }
				{ disclaimer && <Disclaimer/> }

			</Container>

		</Box>
	)

}

export default Landingpage
