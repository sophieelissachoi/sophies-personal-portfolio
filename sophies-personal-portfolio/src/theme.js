import { extendTheme } from "@chakra-ui/react";
import "@fontsource/amatic-sc/700.css";
import "@fontsource/caveat-brush/400.css";

const theme = extendTheme({
	fonts: {
		AmaticSC: "'Amatic SC', sans-serif",
		CaveatBrush: "'Caveat Brush', cursive",
	},
});

export default theme;
