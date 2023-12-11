import { ReactNode } from "react";
import GlobalStyles from "src/assets/styles/GlobalStyles";
import Theme from "src/assets/styles/Theme";
import { ThemeProvider } from "styled-components";

type MainProps = {
	children: ReactNode;
};

const MainProvider = (props: MainProps) => {
	const { children } = props;

	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default MainProvider;
