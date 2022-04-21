import { useEffect, useState } from 'react'

const getRandomChar = (chars: string[]) => chars[Math.floor(Math.random() * chars.length)]

const getChar = (i: number, j: number, maxLength: number, oldValue: string, newValue: string, chars: string[]) => {
	if (j > i) {
		return oldValue[j]
	}

	if (i >= maxLength && j < i - maxLength) {
		return newValue[j]
	}

	return getRandomChar(chars)
}

const defaultOptions = {
	chars: [
		// '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f',
		'゠',
		'ァ',
		'ア',
		'ィ',
		'イ',
		'ゥ',
		'ウ',
		'ェ',
		'エ',
		'ォ',
		'オ',
		'カ',
		'ガ',
		'キ',
		'ギ',
		'ク',
		'グ',
		'ケ',
		'ゲ',
		'コ',
		'ゴ',
		'サ',
		'ザ',
		'シ',
		'ジ',
		'ス',
		'ズ',
		'セ',
		'ゼ',
		'ソ',
		'ゾ',
		'タ',
		'ダ',
		'チ',
		'ヂ',
		'ッ',
		'ツ',
		'ヅ',
		'テ',
		'デ',
		'ト',
		'ド',
		'ナ',
		'ニ',
		'ヌ',
		'ネ',
		'ノ',
		'ハ',
		'バ',
		'パ',
		'ヒ',
		'ビ',
		'ピ',
		'フ',
		'ブ',
		'プ',
		'ヘ',
		'ベ',
		'ペ',
		'ホ',
		'ボ',
		'ポ',
		'マ',
		'ミ',
		'ム',
		'メ',
		'モ',
		'ャ',
		'ヤ',
		'ュ',
		'ユ',
		'ョ',
		'ヨ',
		'ラ',
		'リ',
		'ル',
		'レ',
		'ロ',
		'ヮ',
		'ワ',
		'ヰ',
		'ヱ',
		'ヲ',
		'ン',
		'ヴ',
		'ヵ',
		'ヶ',
		'ヷ',
		'ヸ',
		'ヹ',
		'ヺ',
		'・',
		'ー',
		'ヽ',
		'ヾ',
		'ヿ',
	],
	interval: 5,
}

export const useDecrypt = (options?: Partial<typeof defaultOptions>) => {
	const [value, setValue] = useState('')
	const [result, setResult] = useState('')

	const { chars, interval } = { ...defaultOptions, ...options }

	useEffect(() => {
		let i = 0

		const decrypting = setInterval(() => {
			setResult((oldValue) => {
				if (oldValue === value) {
					clearInterval(decrypting)
					return value
				}

				const oldLength = oldValue ? oldValue.length : 0
				const newLength = value.length
				const maxLength = Math.max(oldLength, newLength)

				return [...new Array(maxLength)].map((_, j) => getChar(i, j, maxLength, oldValue, value, chars)).join('')
			})

			i++
		}, interval)

		return () => clearInterval(decrypting)
	}, [value, chars, interval])

	return {
		result,
		decrypt: setValue,
	}
}

export default useDecrypt
