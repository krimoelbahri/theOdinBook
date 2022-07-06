import React from "react";
import Modals from "./pages/Modals";
import GlobalFonts from "./fonts/fonts";
import MyRoutes from "./MyRoutes";

function App() {
	return (
		<>
			<MyRoutes />
			<Modals />
			<GlobalFonts />
		</>
	);
}

export default App;
