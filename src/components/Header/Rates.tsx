// data
import { useQuery } from '@apollo/react-hooks'
import { GET_FX } from 'src/queries'

// logging
import { Logger } from 'src/lib/log'
const log = Logger('$HEADER')

// ui
import { Link } from 'components'
import { RatesWrapper } from './styles'

// mock data
// const token = {
// 	XP: 1337,
// 	REP: 49152,
// 	PLAY: 13.37,
// 	ZERO: 1000,
// 	GAME: 1000,
// 	// exchange rates
// 	// stable rate should be 1 EUR == 1 PLAY
// 	EUR_PLAY: 1,
// 	// current exchange rate for ETH to PLAY via Exchange
// 	DAI_PLAY: 0.92,
// 	// current exchange rate for ETH to EUR via Exchange
// 	ETH_EUR: 321.02,
// }

const Rates = () => {
	const { loading, error, data } = useQuery(GET_FX)

	if (loading) return <RatesWrapper>Loading...</RatesWrapper>
	if (error) return <RatesWrapper>Error: ${error.message}</RatesWrapper>

	const fx = data.fx
	console.log(data)

	return (
		<RatesWrapper>
			{fx.map((rate) => (
				<Link key={rate.id} href={`/account/wallet#${rate.name}`}>
					{rate.name} · {rate.askQuote || 0}
				</Link>
			))}
		</RatesWrapper>
	)
}

export default Rates
