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

import { useContext } from 'react'
import { AppContext } from 'src/hooks/AppContext'

import Layout from 'layouts'
import { Campaigns } from 'containers'

const Page = () => {
	const { state } = useContext(AppContext)
	const { SHOW_CAMPAIGNS } = state.features.data

	return <Layout>{SHOW_CAMPAIGNS && <Campaigns />}</Layout>
}

export default Page
