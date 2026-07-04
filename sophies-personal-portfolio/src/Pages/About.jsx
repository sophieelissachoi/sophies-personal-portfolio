import React from "react";
import {
	Box,
	Heading,
	Image,
	VStack,
	HStack,
	Text,
	Button,
} from "@chakra-ui/react";
import Sophie1 from "../assets/sophie1.png";
import Socials from "../Components/Socials";

const About = () => {
	return (
		<Box
			pt="7%"
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<VStack>
				<Heading
					fontFamily="AmaticSC"
					fontSize="60px"
					mb="5%"
				>
					About
				</Heading>
				<HStack gap="15%">
					<Image
						src={Sophie1}
						width="sm"
					/>
					<VStack
						align="flex-start"
						gap="0"
					>
						<Text
							fontFamily="CaveatBrush"
							fontSize="5xl"
							mb="-5"
						>
							Hello!
						</Text>
						<Text
							fontFamily="CaveatBrush"
							fontSize="8xl"
							width="2xl"
							mb="-5"
						>
							I'm Sophie Choi
						</Text>
						<Text
							fontFamily="CaveatBrush"
							fontSize="5xl"
						>
							Computer Science @ UC Irvine
						</Text>
						<Button
							as="a"
							href="/sophies-personal-portfolio/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							height="80px"
							mt="20px"
							mb="30px"
							p="40px"
							fontSize="28px"
							bg="#ff152d33"
							backdropFilter="blur(10px)"
							border="1px solid rgba(255, 255, 255, 0.3)"
							boxShadow="lg"
							color="white"
							_hover={{ bg: "rgba(144, 2, 2, 0.25)" }}
						>
							Resume
						</Button>
						<Socials />
					</VStack>
				</HStack>
			</VStack>
		</Box>
	);
};

export default About;
