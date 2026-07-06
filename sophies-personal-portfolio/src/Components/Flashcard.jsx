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
			width="50rem"
			p="4"
		>
			<CardHeader>
				<Heading size="md">{title}</Heading>
			</CardHeader>

			<CardBody mt="-2%">
				<Text
					fontWeight="bold"
					mb="2"
				>
					{skills}
				</Text>

				<Text mb="3">{description}</Text>

				<Image
					src={additionalPhoto}
					mb="3px"
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
