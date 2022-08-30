import React, { useCallback } from 'react'
import { Box, Grid, Card, Paper, Typography, Button, Stack } from '@mui/material'
import { Layout } from 'src/layouts/default'

import { styled } from '@mui/system'
import { NavLink } from 'src/components'

import { Landingpage } from '../containers/Landingpage'

export function Page() {
	return (
		<Layout showFooter showHeader>
			<Typography variant="h2" pb={[2, 4]}>
				About GameDAO
			</Typography>

			<Typography pb={[2, 4]}>
				GameDAO Protocol is an experimental decentralised protocol for fundraising,
				coordination and ownership of video games. It is developed by GameDAO AG, based in
				Liechtenstein, Zero Reality AG in Switzerland and various contributors around the
				world.
			</Typography>

			<Typography pb={[2, 4]}>
				GameDAO Protocol is built on top of substrate, a cutting edge blockchain SDK by
				Parity, with interoperability, scalability, robustness and security in mind. It is
				deployed on zero.io, a video games multichain, and collaborates with partner
				networks in the Polkadot ecosystem, like acala.network.
			</Typography>

			<Typography variant="h3" pb={[2, 4]}>
				Primitives for open markets
			</Typography>

			<Typography pb={[2, 4]}>
				GameDAO Protocol provides primitives for invocation and operation of decentralised
				organisations (DAOs), utilisation of decentralised finance (DeFi) instruments for
				fundraising and non-fungible token (NFT) to provide a comprehensive solution for
				license management and projects related loot drops. The protocol is designed and
				operated in a decentralised fashion, enabling programmatic access to everyone.
			</Typography>

			<Typography pb={[2, 4]}>
				GameDAO also develops a decentralised application frontend accessible through
				https://app.gamedao.co, to enable non technical entities to utilise these protocols
				with some additional safeguards, making them usable in a reasonable, secure and
				compliant way.
			</Typography>

			<Typography variant="h3" pb={[2, 4]}>
				Community owned by design
			</Typography>

			<Typography pb={[2, 4]}>
				The protocols and application assemble to a low barrier, community governed
				discovery and curation platform, involving the community as a key stakeholder and
				funding contributors in project coordination to increase mutual trust due to shared
				interests and increased transparency. This allows for early stage market proof and
				loyalty through ownership.
			</Typography>

			<Typography pb={[2, 4]}>
				This shall contribute to the individual freedom of the community and the creation of
				more sustainable business models of video games and the cyberspace in general.
			</Typography>

			<Typography variant="h3" pb={[2, 4]}>
				GameDAO: the protocol directly connecting gamers, creators, publishers and
				investors.
			</Typography>
		</Layout>
	)
}

export default Page
