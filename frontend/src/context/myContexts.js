import { DropDownProvider } from "./dropDownContext";
import { ModalProvider } from "./modalContext";

function MyContexts({ children }) {
	return (
		<ModalProvider>
			<DropDownProvider>{children}</DropDownProvider>
		</ModalProvider>
	);
}

export default MyContexts;
