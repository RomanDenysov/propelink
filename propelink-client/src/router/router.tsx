import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Header from "src/components/common/Header";
import { AboutPage } from "src/pages/AboutPage";
import HomePage from "src/pages/HomePage";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Header />}>
			<Route index element={<HomePage />} />
		</Route>
	)
);
