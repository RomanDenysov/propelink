import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3rem;
`;
const StyledLink = styled(Link)`
	color: white;
	font-size: 1.4rem;
	font-weight: 300;
	position: relative;
	transition: all 0.3s ease-in-out;
	&::after {
		content: "";
		width: 0;
		height: 1px;
		background-color: white;
		position: absolute;
		bottom: -15%;
		left: 50%;
		transform: translate(-50%);
		transition: all 0.3s ease-in-out;
	}
	&:hover::after {
		width: 90%;
	}
`;

const Navbar = () => {
	return (
		<StyledNavbar>
			<StyledLink to="">Home</StyledLink>
			<StyledLink to="">About</StyledLink>
			<StyledLink to="">Contact</StyledLink>
		</StyledNavbar>
	);
};

export default Navbar;
