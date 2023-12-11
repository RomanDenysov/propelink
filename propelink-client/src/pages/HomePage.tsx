import UrlList from "src/components/url/UrlList";
import styled from "styled-components";

const HomeContainer = styled.div`
	width: 100%;
	min-height: 100vh;
`;

const HomePage = () => {
	return (
		<HomeContainer>
			<UrlList />
		</HomeContainer>
	);
};

export default HomePage;
