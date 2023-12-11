import { ReactNode } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
	max-width: 1366px;
	width: 100%;
	height: 100%;

	margin: auto;

	padding: 0 1rem;
`;

type Props = {
	children: ReactNode;
};

export default function WrapperContainer(props: Props) {
	const { children } = props;
	return <StyledWrapper>{children}</StyledWrapper>;
}
