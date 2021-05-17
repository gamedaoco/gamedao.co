import React from 'react'
import { createGlobalStyle } from 'styled-components'

import base from 'src/themes/base'
import dark from 'src/themes/dark'
import light from 'src/themes/light'

export const TIMEOUT = 500

const theme = {
	...base,
	...dark,
}

const col = () => {
	const colors = ['#00ADEE', '#EC297B', '#F6921E', '#37B34A']
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}

const grid = {
	bgcol: '#000000',
	dotcol: col(),
	dotsize: 1,
	space: 128,
}

export const GlobalStyle = createGlobalStyle`

	@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

	/*
		reset base styles
	 */

	*, div {
		font-family: ${theme.fonts.sans};
		font-weight: 400;
		font-size: 15px;
		box-sizing: border-box;
	}

	div#__next, html, body {
		margin: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		scroll-behavior: smooth;
		color: #eeeeee;
	}

	a {
		text-decoration: none;
		color: rgba(255,255,255,.75);
		opacity: 0.75;
		transition-duration:150ms;
	}

	a:hover {
		text-decoration: none;
		color: rgba(255,255,255,1);
		opacity: 1;
		transition-duration:150ms;
	}

	html, body {
		background: black;
	}

	body, .dot {
		background:
			linear-gradient( 90deg, ${grid.bgcol} ${grid.space - grid.dotsize}px, transparent 1%) center,
			linear-gradient( ${grid.bgcol} ${grid.space - grid.dotsize}px, transparent 1%) center,
			${grid.dotcol};
		background-size: ${grid.space}px ${grid.space}px;
	}

	h1,h2,h3,h4,h5,h6 {
		font-face: ${theme.fonts.sans}
		font-weight: 800;
		font-size: 15px;
		margin-bottom: 15px;
		display: block;
	}

	/*
		scrollbar
	 */

	html {
		overflow: scroll;
		overflow-x: hidden;
		scroll-behavior: smooth;
		scrollbar-width: thin;
		scrollbar-color: rgba( 255, 0, 255, 1 );
	}
	::-webkit-scrollbar {
		width: 2px;
		background: black;
	}
	::-webkit-scrollbar-thumb {
		background: rgba( 255, 0, 255, 1 );
	}

	textarea, select, input, button { outline: none; }

	/*
		page transitions
	 */

	.page-transition-enter {
		opacity: 0;
		transform: translate3d(0, 0px, 0);
	}
	.page-transition-enter-active {
		opacity: 1;
		transform: translate3d(0, 0, 0);
		transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
	}
	.page-transition-exit {
		opacity: 1;
	}
	.page-transition-exit-active {
		opacity: 0;
		transition: opacity ${TIMEOUT}ms;
	}

	/*
		loader
	 */

	.loading-indicator-appear,
	.loading-indicator-enter {
		opacity: 0;
	}
	.loading-indicator-appear-active,
	.loading-indicator-enter-active {
		opacity: 1;
		transition: opacity ${TIMEOUT}ms;
	}
`
export default GlobalStyle
