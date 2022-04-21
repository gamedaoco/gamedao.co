import styled from 'styled-components'

export const Nav = styled.div`
	background: #000;
	color: #f3f3f3;

	.active {
		border-bottom: 2px solid yellow;
	}

	size: 20px;

	margin: 0;
	padding: 0;
	width: auto;
	height: 40px;

	margin-left: 50px;

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		position: absolute;
	}

	/* hover state for top level links */

	li:hover a {
		background: #000;
		border-bottom: 1px dotted #fff;
	}

	/* dropdown links */

	li:hover ul a {
		background: #f3f3f3;
		color: #333333;
		height: 40px;
		line-height: 40px;
	}

	/* hover state for dropdown links */

	li:hover ul a:hover {
		background: #000;
		color: #fff;
	}

	li ul {
		display: none;
	}

	/* dropdown links vertical */

	li ul li {
		display: block;
		float: left; //none;
	}

	/* no text wrapping */

	li ul li a {
		width: auto;
		min-width: 100px;
		padding: 0 20px;
	}

	/* display dropdowns on hover */

	ul li a:hover + .hidden,
	.hidden:hover {
		display: block;
	}

	/* 'show menu' label button and hide it by default */

	.show-menu {
		display: none;
		width: 100%;
		text-decoration: none;
		text-align: center;
		line-height: 40px;
		color: #fff;
		background: #000;
		// background: linear-gradient(to right, #036 0, #063 100%);
		border-bottom: 1px dotted white;
		height: 40px;
		color: #fff;
	}

	/* hide checkbox */

	input[type='checkbox'] {
		display: none;
	}

	/* show menu when invisible checkbox is checked */

	input[type='checkbox']:checked ~ #menu {
		display: block;
	}

	/* responsive styles */

	@media screen and (max-width: 640px) {
		/*Make dropdown links appear inline*/

		z-index: 100;

		ul {
			position: static;
			display: none;
		}

		/*Create vertical spacing*/

		li {
			margin-bottom: 1px;
		}

		/*Make all menu links full width*/

		ul li,
		li a {
			width: 100%;
		}

		/*Display 'show menu' link*/

		.show-menu {
			display: block;
		}
	}
`

export const NavItem = styled.li`
	display: inline-block;
	list-style: none;

	a {
		display: block;
		// min-width: 120px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		margin-right: 20px;
		color: #fff;
		background: #000;
		text-decoration: none;
		border-bottom: 1px solid #000;
	}
	a.active {
		border-bottom: 1px solid #fff;
	}
`
