import React, { useContext } from "react";
import Modals from "./pages/Modals";
import GlobalFonts from "./fonts/fonts";
import MyRoutes from "./MyRoutes";
import { useGetCurrentUserQuery } from "./features/auth/user-api-query";
import Spinner from "./components/Spinner";

const AuthContext = React.createContext();
export function useAuth() {
	return useContext(AuthContext);
}

function App() {
	const { currentData, isFetching } = useGetCurrentUserQuery();
	if (isFetching && !currentData) return <Spinner />;
	return (
		<AuthContext.Provider value={{ user: currentData?.user, token: currentData?.token }}>
			<MyRoutes />
			<Modals />
			<GlobalFonts />
		</AuthContext.Provider>
	);
}

export default App;
