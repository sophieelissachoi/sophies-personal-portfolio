import React from "react";
import { Tabs, TabList, Tab, HStack, Box, Heading } from "@chakra-ui/react";

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
				<TabList gap="15px">
					<Tab
						fontSize="2xl"
						_selected={{ color: "white", borderColor: "white" }}
					>
						About
					</Tab>
					<Tab
						fontSize="2xl"
						_selected={{ color: "white", borderColor: "white" }}
					>
						Experiences
					</Tab>
					<Tab
						fontSize="2xl"
						_selected={{ color: "white", borderColor: "white" }}
					>
						Portfolio
					</Tab>
					<Tab
						fontSize="2xl"
						_selected={{ color: "white", borderColor: "white" }}
					>
						Skills
					</Tab>
					<Tab
						fontSize="2xl"
						_selected={{ color: "white", borderColor: "white" }}
					>
						Contact
					</Tab>
				</TabList>
			</Tabs>
		</HStack>
	);
};

export default Navbar;
