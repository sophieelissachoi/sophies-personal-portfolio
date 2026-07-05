import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Heading,
	Text,
	Image,
	VStack,
	HStack,
	List,
	ListItem,
	UnorderedList,
	Divider,
	Badge,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
	Icon,
	Button,
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
}) => {
	const badgeColor = type === "Internship" ? "#EA9BA2" : "#C8E491";

	return (
		<Card
			width="75rem"
			borderLeft="10px solid"
			borderLeftColor={badgeColor}
			bg="rgba(255, 255, 255, 0.25)"
			backdropFilter="blur(12px)"
			boxShadow="0 8px 32px rgba(139, 94, 77, 0.15)"
			mt="20px"
			zIndex="1"
		>
			<HStack>
				<Image
					src={photo}
					ml="20px"
				/>
				<VStack align="flex-start">
					<CardHeader>
						<Text
							fontFamily="CaveatBrush"
							fontSize="4xl"
						>
							{role}
						</Text>
						<Text
							fontFamily="CaveatBrush"
							fontSize="3xl"
							mt="-10px"
						>
							{company}
						</Text>
					</CardHeader>

					<CardBody
						mt="-30"
						ml="30"
					>
						<UnorderedList>
							{description.map((d) => (
								<ListItem
									key={d}
									fontFamily="CaveatBrush"
									fontSize="2xl"
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
				<HStack>
					<Badge
						variant="solid"
						backgroundColor={badgeColor}
						pr="5px"
						pl="5px"
						pt="-2px"
						pb="-2px"
						fontSize="lg"
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
							zIndex="10"
						>
							PROJECTS
						</MenuButton>
						<MenuList zIndex="10">
							{projects.map((p) => (
								<MenuItem zIndex="10">{p}</MenuItem>
							))}
						</MenuList>
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
							zIndex="10"
						>
							SKILLS
						</MenuButton>
						<MenuList zIndex="10">
							{skills.map((p) => (
								<MenuItem zIndex="100">{p}</MenuItem>
							))}
						</MenuList>
					</Menu>
				</HStack>
			</CardFooter>
		</Card>
	);
};

export default ExperiencesCard;
