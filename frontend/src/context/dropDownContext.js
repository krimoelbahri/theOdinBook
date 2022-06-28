import React, { useContext } from "react";

const DropDownContext = React.createContext();
export function useDropDown() {
	return useContext(DropDownContext);
}

export function DropDownProvider({ children }) {
	let value = {};
	return <DropDownContext.Provider value={value}>{children}</DropDownContext.Provider>;
}
