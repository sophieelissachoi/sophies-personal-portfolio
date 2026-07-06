import React from "react";
import {
	Card,
	CardBody,
	CardFooter,
	HStack,
	Text,
	Box,
	Image,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Flashcard from "./Flashcard";

const MotionBox = motion(Box);

const Polaroid = ({
	title,
	skills,
	description,
	link,
	photo,
	additionalPhoto,
	tilt,
	isOpen,
	onClick,
}) => {
	return (
		<HStack
			align="flex-start"
			spacing="16px"
		>
			<Card
				as="button"
				onClick={onClick}
				width="18rem"
				height="24rem"
				bg="white"
				p="5px"
				boxShadow="0 6px 16px rgba(139, 94, 77, 0.25)"
				transform={isOpen ? null : `rotate(${tilt}deg)`}
				display="flex"
				flexDirection="column"
				cursor="pointer"
				transition="transform 0.2s"
				_hover={{ transform: isOpen ? null : `rotate(${tilt}deg) scale(1.03)` }}
			>
				<CardBody
					display="flex"
					align="center"
					justifyContent="center"
					alignItems="center"
				>
					<Image src={photo} />
				</CardBody>

				<Text
					fontFamily="CaveatBrush"
					fontSize="2xl"
					textAlign="center"
				>
					{title}
				</Text>
			</Card>

			<AnimatePresence>
				{isOpen && (
					<MotionBox
						initial={{ opacity: 0, x: -30, scale: 0.9 }}
						animate={{ opacity: 1, x: 0, scale: 1 }}
						exit={{ opacity: 0, x: -30, scale: 0.9 }}
						transition={{ duration: 0.25 }}
					>
						<Flashcard
							title={title}
							skills={skills}
							description={description}
							additionalPhoto={additionalPhoto}
							link={link}
						/>
					</MotionBox>
				)}
			</AnimatePresence>
		</HStack>
	);
};

export default Polaroid;
