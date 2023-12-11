import styled from "styled-components";

import WrapperContainer from "src/assets/styles/WrapperContainer";
import Flex from "src/assets/styles/Flex";
import StyledButton from "src/assets/styles/StyledButton";
import Navbar from "src/components/common/Navbar";
import Logo from "src/assets/styles/Logo";
import UrlInput from "src/components/common/UrlInput";
import Stats from "src/components/common/Stats";
import { Outlet } from "react-router-dom";

const StyledHeader = styled.header`
	width: 100%;
	min-height: 50vh;

	margin: 0 auto;

	position: relative;

	background-color: blue;
`;
const HeaderStickyBox = styled.div`
	width: 100%;
	height: fit-content;
	padding: 0.5rem 0;
	position: sticky;
	top: 0;
	left: 0;
	background-color: blue;
	z-index: 3;

	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Header = () => {
	return (
		<>
			<HeaderStickyBox>
				<WrapperContainer>
					<Flex
						direction="column"
						align="center"
						justify="flex-start"
						gap="2rem"
					>
						<Flex align="center" justify="space-between">
							<Logo self="start" />
							<Navbar />
							<Flex
								align="center"
								justify="flex-end"
								gap="0.5rem"
							>
								<StyledButton primary>Sign In</StyledButton>
								<StyledButton outlined>
									Get Started
								</StyledButton>
							</Flex>
						</Flex>
					</Flex>
				</WrapperContainer>
			</HeaderStickyBox>
			<StyledHeader>
				<WrapperContainer>
					<Flex
						direction="column"
						align="center"
						justify="flex-start"
						gap="2rem"
					>
						<UrlInput />
						<Stats />
					</Flex>
				</WrapperContainer>
			</StyledHeader>

			<Outlet />
		</>
	);
};

export default Header;
