import React from "react";
import Addpost from "./components/add post component/Addpost";
import GlobalFonts from "./fonts/fonts";
import MyRoutes from "./MyRoutes";

function App() {
	return (
		<>
			<MyRoutes />
			<Addpost />
			<GlobalFonts />
		</>
	);
}

export default App;
