import Flex from "src/assets/styles/Flex";
import StyledButton from "src/assets/styles/StyledButton";
import styled from "styled-components";

const StyledInput = styled.form`
	width: 100%;
	height: 100%;

	margin: 2rem 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
`;
const InputTitle = styled.h1`
	color: white;
	font-size: 3rem;
	font-weight: 900;
	line-height: 100%;
`;
const InputDescr = styled.span`
	color: white;
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 100%;
`;
const Input = styled.input`
	width: 16rem;
	max-height: 4rem;
	padding: 0.5rem;
	font-size: 1.2rem;
	border-radius: 5px;
`;

const UrlInput = () => {
	return (
		<StyledInput>
			<InputTitle>Hello world</InputTitle>
			<InputDescr>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
				similique.
			</InputDescr>
			<Flex align="center" justify="center" gap="0.5rem">
				<Input />
				<StyledButton special>Link</StyledButton>
				<StyledButton special>QR-code</StyledButton>
			</Flex>
		</StyledInput>
	);
};

export default UrlInput;
