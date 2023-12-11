import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
	children: ReactNode;
	radius?: string;
	primary?: boolean;
	outlined?: boolean;
	special?: boolean;
}

const Button = styled.button<ButtonProps>`
	min-width: 4rem;
	min-height: 3rem;

	padding: 0.5rem 0.8rem;

	font-size: 1.2rem;
	font-weight: 300;

	border-radius: ${(props) => props.radius || "5px"};

	white-space: nowrap;

	cursor: pointer;

	${(props) =>
		props.primary &&
		css`
			color: white;
			background-color: blue;
			border: none;
			&:hover {
				opacity: 0.9;
				background-color: rgba(255, 255, 255, 0.2);
			}
		`}
	${(props) =>
		props.outlined &&
		css`
			color: white;
			border: 2px solid white;
			background-color: transparent;
			&:hover {
				opacity: 0.9;
				background-color: rgba(255, 255, 255, 0.2);
			}
		`}
	${(props) =>
		props.special &&
		css`
			color: white;
			background-color: green;
			border: 2px solid transparent;
			&:hover {
				opacity: 0.9;
			}
		`}
`;

const StyledButton = (props: ButtonProps) => {
	return <Button {...props} />;
};

export default StyledButton;
