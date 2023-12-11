import styled from "styled-components";

interface LogoProps {
	self?: string;
}

const StyledLogo = styled.div<LogoProps>`
	width: 100%;
	height: 100%;
	font-size: 3rem;
	line-height: 100%;
	font-weight: 900;
	color: white;
	text-align: ${(props) => props.self || "auto"};
	display: flex;
	align-items: center;
	letter-spacing: -0.2rem;
	text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
`;

export default function Logo(props: LogoProps) {
	return <StyledLogo {...props}>PROPELINK</StyledLogo>;
}
