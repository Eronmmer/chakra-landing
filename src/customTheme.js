import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
	fonts: {
		body: "Mulish, sans-serif",
		heading: "Playfair Display, serif",
		mono: "Menlo, monospace",
	},
	colors: {
		brand: {
			orange: "#FB8F1D",
			orangeButton: {
				500: "#fb8f1d",
				600: "#e27604",
			},
			yellow: "#FFBB0C",
			green: "#1ABE84",
			black: "#000000",
			white: "#ffffff",
			darkBlack: "#202336",
			lightBlack: "#4A4C53",
			borderBlack: "#AFB0B9",
			lightGrey: "#B8BECD",
			greyText: "#7D7987",
			footerGrey: "#848484",
		},
	},
	fontWeights: {
		heading: 600,
		bolder: 800,
		boldest: 900,
	},
});

export default customTheme;
