import React, { useCallback } from 'react'
import { Layout } from 'src/layouts/default'

import { styled } from '@mui/system'
import { Box, Grid, Card, Paper, Typography, Button, Stack } from '@mui/material'

import { Landingpage } from '../containers/Landingpage'

export function Page() {
	return (
		<Layout showFooter showHeader>
			<Landingpage />
		</Layout>
	)
}

export default Page
