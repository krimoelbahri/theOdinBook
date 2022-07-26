import React, { useContext } from "react";
import Modals from "./pages/Modals";
import GlobalFonts from "./fonts/fonts";
import MyRoutes from "./MyRoutes";
import { useGetCurrentUserQuery } from "./features/auth/user-api-query";

const AuthContext = React.createContext();
export function useAuth() {
	return useContext(AuthContext);
}

function App() {
	const { data: user } = useGetCurrentUserQuery();
	return (
		<AuthContext.Provider value={{ user }}>
			<MyRoutes />
			<Modals />
			<GlobalFonts />
		</AuthContext.Provider>
	);
}

export default App;
