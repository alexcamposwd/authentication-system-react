import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		max-width: 1720px;
		margin: 0 auto;
	}
	::after,
	::before {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	ul {
		list-style-type: none;
	}
	a {
		text-decoration: none;
	}
	body {
		overflow-x: hidden;
		min-width: 360px;
		font-family: "Roboto", sans-serif;
	}
`
