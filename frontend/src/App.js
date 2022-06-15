import React from "react";
import { Routes, Route } from "react-router-dom";
import { Friends, Signin, Signup, Watch, Home } from "./pages";
import Header from "./components/header components";
import GlobalFonts from "./fonts/fonts";
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/signin' element={<Signin />} />
				<Route path='/friends' element={<Friends />} />
				<Route path='/watch' element={<Watch />} />
			</Routes>
			<GlobalFonts />
		</>
	);
}

export default App;
