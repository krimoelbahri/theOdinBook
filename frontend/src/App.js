import React, { useContext } from "react";
import Modals from "./pages/Modals";
import GlobalFonts from "./fonts/fonts";
import MyRoutes from "./MyRoutes";
import { useGetCurrentUserQuery } from "./features/auth/user-api-query";
import { Loading } from "./components/Spinner";

const AuthContext = React.createContext();
export function useAuth() {
	return useContext(AuthContext);
}

function App() {
	const { currentData, isFetching } = useGetCurrentUserQuery();
	if (isFetching && !currentData) return <Loading />;
	return (
		<AuthContext.Provider
			value={{
				user: currentData?.user,
				token: currentData?.token,
				currentUserFetching: isFetching,
			}}
		>
			<MyRoutes />
			<Modals />
			<GlobalFonts />
		</AuthContext.Provider>
	);
}

export default App;
