import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./customTheme";

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider resetCSS theme={customTheme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
