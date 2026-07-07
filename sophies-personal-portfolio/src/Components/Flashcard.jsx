import React from "react";
import FlashcardBg from "../assets/flashcard.png";
import {
	Card,
	CardHeader,
	CardBody,
	Heading,
	Text,
	Link,
	Image,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Flashcard = ({ title, skills, description, additionalPhoto, link }) => {
	return (
		<Card
			bgImage={FlashcardBg}
			bgSize="cover"
			width={{ base: "92vw", sm: "85vw", md: "40rem", lg: "50rem" }}
			maxWidth="50rem"
			p={{ base: "3", md: "4" }}
		>
			<CardHeader>
				<Heading size={{ base: "sm", md: "md" }}>{title}</Heading>
			</CardHeader>

			<CardBody mt={{ base: "-1%", md: "-2%" }}>
				<Text
					fontWeight="bold"
					mb="2"
					fontSize={{ base: "sm", md: "md" }}
				>
					{skills}
				</Text>

				<Text
					mb="3"
					fontSize={{ base: "sm", md: "md" }}
				>
					{description}
				</Text>

				<Image
					src={additionalPhoto}
					mb="3px"
					width="100%"
				/>

				{link && (
					<Link
						href={link}
						isExternal
						color="blue.600"
					>
						Check it out! <ExternalLinkIcon mx="2px" />
					</Link>
				)}
			</CardBody>
		</Card>
	);
};

export default Flashcard;
