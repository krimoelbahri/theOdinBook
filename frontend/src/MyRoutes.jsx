import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./App";
import { HeaderLayout, Home, Friends, Watch, Profile, Signin, Signup, NotFound } from "./pages";

function MyRoutes() {
	const { user } = useAuth();
	return (
		<Routes>
			<Route path='/' element={<HeaderLayout />}>
				<Route path='' element={user ? <Home /> : <Navigate to={"/signin"} />} />
				<Route path='friends' element={user ? <Friends /> : <Navigate to={"/signin"} />} />
				<Route path='watch' element={user ? <Watch /> : <Navigate to={"/signin"} />} />
				<Route path=':id' element={user ? <Profile /> : <Navigate to={"/signin"} />} />
				<Route path='signup' element={!user ? <Signup /> : <Navigate to={"/"} />} />
				<Route path='signin' element={!user ? <Signin /> : <Navigate to={"/"} />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default MyRoutes;
