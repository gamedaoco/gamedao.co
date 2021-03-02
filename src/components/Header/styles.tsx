import React from 'react'
import styled from 'styled-components'

export const RatesWrapper = styled.span`
	font-size: 10px;
`

export const Container = styled.div`
	// * { border: 1px dotted red; }

	margin: 0;
	padding: 0;
	width: 100%;
	height: auto;
	background: #000;

	* {
		// font-size: 10px;
		transition-duration: 100ms;
		transition-timing-function: ease-in-out;
	}
`

export const MetaLink = styled.div`
	text-align: right;
	color: white;
	width: auto;
	a {
		color: rgba(255, 255, 255, 0.5);
		margin-left: 25px;
	}
	a,
	a: visited {
		text-decoration: none;
		color: rgba(255, 255, 255, 1);
	}
	a:hover {
		color: rgba(255, 255, 255, 1);
		border-bottom: 1px dotted;
	}
`

export const User = styled.div`
	color: white;
	height: 100px;
	display: flex;
	align-items: flex-end;
	a,a: visited {
		text-decoration: none;
		color: white;
	}
	a:hover {
		color: white;
		border-bottom: 1px dotted;
	}
`
export const Task = styled.div`
	color: white;
	height: 50px;
	display: flex;
	align-items: flex-end;
`
export const Right = styled.div`
	font-size: 40px;
	width: 100%;
	text-align: right;
`
