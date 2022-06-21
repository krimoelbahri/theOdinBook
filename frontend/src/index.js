import React from "react";
import { createRoot } from "react-dom/client";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
