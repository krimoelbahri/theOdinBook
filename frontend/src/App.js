import React from "react";
import { Routes, Route } from "react-router-dom";
import { Friends, Signin, Signup, Watch, Home, HeaderDashboeard } from "./pages";
import GlobalFonts from "./fonts/fonts";
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HeaderDashboeard />}>
					<Route path='' element={<Home />} />
					<Route path='friends' element={<Friends />} />
					<Route path='watch' element={<Watch />} />
					<Route path='signup' element={<Signup />} />
					<Route path='signin' element={<Signin />} />
				</Route>
			</Routes>
			<GlobalFonts />
		</>
	);
}

export default App;
