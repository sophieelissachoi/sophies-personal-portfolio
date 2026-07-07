import React from "react";
import {
	Tabs,
	TabList,
	Tab,
	HStack,
	Heading,
	IconButton,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
	const sections = [
		{ id: "about", label: "About" },
		{ id: "experiences", label: "Experiences" },
		{ id: "portfolio", label: "Portfolio" },
		{ id: "skills", label: "Skills" },
		{ id: "contact", label: "Contact" },
	];

	const isMobile = useBreakpointValue({ base: true, md: false });

	const scrollToSection = (id) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<HStack
			bg="#c09b8a"
			height="60px"
			px={{ base: "16px", md: "20px" }}
			width="100%"
			justifyContent="space-between"
			alignItems="center"
			position="fixed"
			boxShadow="xl"
			zIndex="1000"
		>
			<Heading
				fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
				fontFamily="AmaticSC"
				whiteSpace="nowrap"
			>
				Sophie Choi
			</Heading>

			{isMobile ? (
				<Menu>
					<MenuButton
						as={IconButton}
						icon={<HamburgerIcon />}
						variant="ghost"
						color="white"
						aria-label="Open menu"
					/>
					<MenuList zIndex="1500">
						{sections.map((s) => (
							<MenuItem
								key={s.id}
								onClick={() => scrollToSection(s.id)}
							>
								{s.label}
							</MenuItem>
						))}
					</MenuList>
				</Menu>
			) : (
				<Tabs
					colorScheme="blackAlpha"
					size="sm"
					variant="unstyled"
				>
					<TabList gap={{ md: "12px", lg: "20px" }}>
						{sections.map((s) => (
							<Tab
								key={s.id}
								fontSize={{ md: "lg", lg: "2xl" }}
								_selected={{ color: "white", borderBottom: "2px solid white" }}
								onClick={() => scrollToSection(s.id)}
								whiteSpace="nowrap"
							>
								{s.label}
							</Tab>
						))}
					</TabList>
				</Tabs>
			)}
		</HStack>
	);
};

export default Navbar;
