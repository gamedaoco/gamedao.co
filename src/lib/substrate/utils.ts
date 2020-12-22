import BigJS from 'big.js'
import toFormat from 'toformat'

const Big = toFormat(BigJS)

type OptionTypes = {
	// known
	power?: number
	decimal?: number
	unit?: string
	// unknown
	[key: string]: any
}

export const utils = {
	paramConversion: {
		num: ['Compact<Balance>', 'BalanceOf', 'u8', 'u16', 'u32', 'u64', 'u128', 'i8', 'i16', 'i32', 'i64', 'i128'],
	},

	prettyBalance: (amt, opts: OptionTypes = {}) => {
		if (typeof amt !== 'number' && typeof amt !== 'string') {
			throw new Error(`${amt} is not a number`)
		}

		// default options
		opts = {
			power: 8,
			decimal: 2,
			unit: 'Units',
			...opts,
		}

		const bn = Big(amt)
		const divisor = Big(10).pow(opts.power)
		const displayed = bn.div(divisor).toFormat(opts.decimal)
		return `${displayed.toString()} ${opts.unit}`
	},
}

export default utils
