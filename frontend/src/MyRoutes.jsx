import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { HeaderLayout, Home, Friends, Watch, Profile, Signin, Signup } from "./pages";

function MyRoutes({ children }) {
	const { user } = useSelector((state) => state.user);

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
		</Routes>
	);
}

export default MyRoutes;