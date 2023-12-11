import { ReactNode } from "react";
import styled from "styled-components";

interface FlexProps {
	align?: string;
	justify?: string;
	direction?: string;
	gap?: string;
	width?: string;
	children: ReactNode;
}

const FlexContainer = styled.div<FlexProps>`
	width: ${(props) => props.width || "100%"};
	height: 100%;

	margin: auto;

	display: flex;
	align-items: ${(props) => props.align || "stretch"};
	justify-content: ${(props) => props.justify || "stretch"};
	flex-direction: ${(props) => props.direction || "row"};
	gap: ${(props) => props.gap || "0"};
`;

export default function Flex(props: FlexProps) {
	return <FlexContainer {...props} />;
}
