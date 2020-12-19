import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-family: Orbitron, sans-serif;
	line-height: 1.4;
}

a {
	color: #333;
	text-decoration: none;
}

.container {
	padding: 0 1rem;
}

.btn {
	display: inline-block;
	border: none;
	background-color: #555;
	color: #ffffff;
	padding: 7px 20px;
	cursor: pointer;
}

.btn:hover {
	background-color: #666666;
}
`;

export default GlobalStyle;
