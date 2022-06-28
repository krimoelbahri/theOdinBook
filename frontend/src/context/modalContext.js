import React, { useContext } from "react";

const ModalContext = React.createContext();
export function useModal() {
	return useContext(ModalContext);
}

export function ModalProvider({ children }) {
	let value = {};
	return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}
