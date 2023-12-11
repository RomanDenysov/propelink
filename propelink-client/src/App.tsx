import { RouterProvider } from "react-router-dom";

import MainProvider from "src/providers/MainProvider";
import { router } from "src/router/router";

function App() {
	return (
		<MainProvider>
			<RouterProvider router={router} />
		</MainProvider>
	);
}

export default App;
