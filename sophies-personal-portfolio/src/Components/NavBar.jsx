import React from "react";
import { Tabs, TabList, Tab, HStack, Box, Heading } from "@chakra-ui/react";

const scrollToSection = (id) => {
	const el = document.getElementById(id);
	if (el) {
		el.scrollIntoView({ behavior: "smooth", block: "start" });
	}
};

const Navbar = () => {
	return (
		<HStack
			bg="#c09b8a"
			height="60px"
			pl="20px"
			width="100%"
			gap="45%"
			justifyContent="center"
			alignItems="center"
			position="fixed"
			boxShadow="xl"
			zIndex="1000"
		>
			<Heading
				fontSize="4xl"
				fontFamily="AmaticSC"
			>
				Sophie Choi
			</Heading>
			<Tabs
				mt="50px"
				colorScheme="blackAlpha"
				height="98px"
				size="sm"
				borderBottom="#C8B2A9"
			>
				<TabList gap="20px">
					<Tab
						fontSize="2xl"
						_selected={{ color: "white", borderColor: "white" }}
						onClick={() => scrollToSection("about")}
					>
						About
					</Tab>
					<Tab
						fontSize="2xl"
						_selected={{ color: "white", borderColor: "white" }}
						onClick={() => scrollToSection("experiences")}
					>
						Experiences
					</Tab>
					<Tab
						fontSize="2xl"
						_selected={{ color: "white", borderColor: "white" }}
						onClick={() => scrollToSection("portfolio")}
					>
						Portfolio
					</Tab>
					<Tab
						fontSize="2xl"
						_selected={{ color: "white", borderColor: "white" }}
						onClick={() => scrollToSection("skills")}
					>
						Skills
					</Tab>
					<Tab
						fontSize="2xl"
						_selected={{ color: "white", borderColor: "white" }}
						onClick={() => scrollToSection("contact")}
					>
						Contact
					</Tab>
				</TabList>
			</Tabs>
		</HStack>
	);
};

export default Navbar;
