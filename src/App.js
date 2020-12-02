import { Box } from "@chakra-ui/react";
import Header from "./sections/header";
import SectionTwo from "./sections/sectionTwo";
import SectionThree from "./sections/sectionThree";
import SectionFour from "./sections/sectionFour";
import SectionFive from "./sections/sectionFive";
import SectionSix from "./sections/sectionSix";
import Footer from "./sections/footer";

function App() {
	return (
		<Box>
			<Header />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<SectionFive />
			<SectionSix />
			<Footer />
		</Box>
	);
}

export default App;
