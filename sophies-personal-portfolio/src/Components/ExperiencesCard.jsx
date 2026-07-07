import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Text,
	Image,
	VStack,
	HStack,
	UnorderedList,
	ListItem,
	Divider,
	Badge,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	Portal,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ExperiencesCard = ({
	role,
	company,
	description,
	type,
	projects,
	skills,
	photo,
	allProjects,
	onProjectClick,
}) => {
	const badgeColor = type === "Internship" ? "#EA9BA2" : "#C8E491";

	const handleProjectClick = (projectName) => {
		const match = allProjects?.find((p) => p.title === projectName);
		if (match) onProjectClick(match.title);
	};

	return (
		<Card
			width={{ base: "92vw", md: "90%", lg: "75rem" }}
			maxWidth="75rem"
			borderLeft="10px solid"
			borderLeftColor={badgeColor}
			bg="rgba(255, 255, 255, 0.25)"
			backdropFilter="blur(12px)"
			boxShadow="0 8px 32px rgba(139, 94, 77, 0.15)"
			mt="20px"
			zIndex="1"
		>
			<HStack
				align="flex-start"
				direction={{ base: "column", md: "row" }}
				flexWrap={{ base: "wrap", md: "nowrap" }}
				mt={{ base: "30px" }}
				ml={{ base: "20px" }}
			>
				<Image
					src={photo}
					ml={{ base: "0", md: "20px" }}
					mx={{ base: "auto", md: "0" }}
					mt={{ base: "16px", md: "0" }}
					width={{ base: "120px", md: "auto" }}
				/>
				<VStack
					align="flex-start"
					mt="-30px"
					w="100%"
				>
					<CardHeader pb={{ base: "0", md: undefined }}>
						<Text
							fontFamily="CaveatBrush"
							fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
						>
							{role}
						</Text>
						<Text
							fontFamily="CaveatBrush"
							fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
							mt="-10px"
						>
							{company}
						</Text>
					</CardHeader>
					<CardBody
						mt={{ base: "-15px", md: "-30px" }}
						ml={{ base: "10px", md: "30px" }}
					>
						<UnorderedList>
							{description.map((d) => (
								<ListItem
									key={d}
									fontFamily="CaveatBrush"
									fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
								>
									{d}
								</ListItem>
							))}
						</UnorderedList>
					</CardBody>
				</VStack>
			</HStack>

			<Divider borderColor="gray.300" />

			<CardFooter>
				<HStack
					flexWrap="wrap"
					spacing="10px"
					rowGap="10px"
				>
					<Badge
						variant="solid"
						backgroundColor={badgeColor}
						pr="5px"
						pl="5px"
						fontSize={{ base: "md", md: "lg" }}
						borderRadius="5px"
					>
						{type}
					</Badge>

					<Menu>
						<MenuButton
							as={Button}
							rightIcon={<ChevronDownIcon />}
							height="25px"
							borderRadius="5px"
							fontWeight="700"
							bg="#A87B64"
							color="white"
							justifyContent="flex-start"
							pr="10px"
							pl="10px"
							fontSize={{ base: "sm", md: "md" }}
						>
							PROJECTS
						</MenuButton>
						<Portal>
							<MenuList zIndex="1500">
								{projects.map((p) => (
									<MenuItem
										key={p}
										onClick={() => handleProjectClick(p)}
									>
										{p}
									</MenuItem>
								))}
							</MenuList>
						</Portal>
					</Menu>

					<Menu>
						<MenuButton
							as={Button}
							rightIcon={<ChevronDownIcon />}
							height="25px"
							borderRadius="5px"
							fontWeight="700"
							bg="#614B49"
							color="white"
							justifyContent="flex-start"
							fontSize={{ base: "sm", md: "md" }}
						>
							SKILLS
						</MenuButton>
						<Portal>
							<MenuList zIndex="1500">
								{skills.map((p) => (
									<MenuItem key={p}>{p}</MenuItem>
								))}
							</MenuList>
						</Portal>
					</Menu>
				</HStack>
			</CardFooter>
		</Card>
	);
};

export default ExperiencesCard;
