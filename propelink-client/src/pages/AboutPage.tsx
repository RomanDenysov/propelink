import styled from "styled-components";
import AboutData from "src/data/DummyData";
import Flex from "src/assets/styles/Flex";

const AboutContainer = styled.div`
	margin-top: 4rem;
	width: 100%;
	height: 100%;
	background-color: white;
`;
const AboutBox = styled.div`
	width: 60%;
	min-height: 100vh;

	padding: 1rem;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	&:nth-child(2n) {
		flex-direction: row-reverse;
	}
`;
const AboutPhoto = styled.img`
	flex: 1;
	max-width: 24rem;
	aspect-ratio: 2 / 3;
	margin: auto;
	object-fit: cover;
	border-radius: 5px;
`;
const AboutTitle = styled.h2`
	font-size: 2.5rem;
	font-weight: 700;
`;
const AboutDescr = styled.span``;

const AboutItem = () => {
	return (
		<>
			{AboutData.AboutData.map((item) => (
				<AboutBox key={item.id}>
					<AboutPhoto src={item.photo} alt="#" />
					<Flex
						width="24rem"
						align="center"
						justify="space-between"
						direction="column"
					>
						<AboutTitle>{item.title}</AboutTitle>
						<AboutDescr>{item.descr}</AboutDescr>
					</Flex>
				</AboutBox>
			))}
		</>
	);
};
export const AboutPage = () => {
	return (
		<AboutContainer>
			<Flex align="center" justify="space-between" direction="column">
				<AboutItem />
			</Flex>
		</AboutContainer>
	);
};
