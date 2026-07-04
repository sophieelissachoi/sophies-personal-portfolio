import NavBar from "../Components/NavBar";
import About from "./About";
import Paper from "../assets/paper.avif";
import { Box } from "@chakra-ui/react";

const MainPage = () => {
	return (
		<Box
			bgImage={Paper}
			minHeight="100vh"
			width="100%"
		>
			<NavBar />
			<About />
		</Box>
	);
};

export default MainPage;
