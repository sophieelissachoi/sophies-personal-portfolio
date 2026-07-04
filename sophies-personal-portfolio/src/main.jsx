import React from "react";
import App from "./App";

import "@fontsource/amatic-sc/700.css";
import "@fontsource/caveat-brush/400.css";

import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

const root = createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
);
