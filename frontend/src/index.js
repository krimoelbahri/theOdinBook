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
import { NotificationsProvider } from "@mantine/notifications";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<NotificationsProvider
					autoClose={2000}
					limit={3}
					notificationMaxHeight={120}
					containerWidth={300}
					zIndex={2000}
					position={"bottom-left"}
				>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</NotificationsProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
