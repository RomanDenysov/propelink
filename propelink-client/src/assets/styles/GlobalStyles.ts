import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* Глобальные стили здесь */
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	font-family: 'Roboto', sans-serif;
	position: relative;
}

a, Link, NavLink, .link {
	color: ${(props) => props.theme.colors.text};
	text-decoration: none;
}
/* Дополнительные глобальные стили, если необходимо */
`;
export default GlobalStyles;
