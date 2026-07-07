import React from "react";
import {
	Box,
	Heading,
	Image,
	VStack,
	HStack,
	Text,
	Button,
	useBreakpointValue,
} from "@chakra-ui/react";
import Sophie1 from "../assets/sophie1.png";
import Socials from "../Components/Socials";

const About = () => {
	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<Box
			pt="7%"
			px={{ base: "5%", md: "0" }}
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<VStack
				w="100%"
				maxW="1200px"
			>
				<Heading
					fontFamily="AmaticSC"
					fontSize={{ base: "40px", sm: "48px", md: "60px" }}
					mb="5%"
				>
					About
				</Heading>

				{!isMobile ? (
					<HStack
						direction={{ base: "column", md: "row" }}
						align={{ base: "center", md: "flex-start" }}
						justify="center"
						spacing={{ base: "24px", md: "40px", lg: "60px" }}
						w="100%"
					>
						<Image
							src={Sophie1}
							width={{ base: "60%", sm: "260px", md: "280px", lg: "320px" }}
							flexShrink={0}
						/>

						<VStack
							align={{ base: "center", md: "flex-start" }}
							gap="0"
							maxW={{ base: "100%", md: "480px", lg: "600px" }}
						>
							<Text
								fontFamily="CaveatBrush"
								fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
							>
								Hello!
							</Text>
							<Text
								fontFamily="CaveatBrush"
								fontSize={{ base: "5xl", sm: "6xl", md: "7xl", lg: "8xl" }}
								textAlign={{ base: "center", md: "left" }}
								lineHeight="1.05"
							>
								I'm Sophie Choi
							</Text>
							<Text
								fontFamily="CaveatBrush"
								fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
								textAlign={{ base: "center", md: "left" }}
							>
								Computer Science @ UC Irvine
							</Text>
							<Button
								as="a"
								href="/sophies-personal-portfolio/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								height={{ base: "60px", md: "70px", lg: "80px" }}
								mt="20px"
								mb="30px"
								px={{ base: "24px", md: "32px", lg: "40px" }}
								fontSize={{ base: "18px", md: "22px", lg: "28px" }}
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
				) : (
					<VStack
						direction={{ base: "column", md: "row" }}
						align={{ base: "center", md: "flex-start" }}
						justify="center"
						spacing={{ base: "24px", md: "40px", lg: "60px" }}
						w="100%"
					>
						<Image
							src={Sophie1}
							width={{ base: "60%", sm: "260px", md: "280px", lg: "320px" }}
							flexShrink={0}
						/>

						<VStack
							align={{ base: "center", md: "flex-start" }}
							gap="0"
							maxW={{ base: "100%", md: "480px", lg: "600px" }}
						>
							<Text
								fontFamily="CaveatBrush"
								fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
							>
								Hello!
							</Text>
							<Text
								fontFamily="CaveatBrush"
								fontSize={{ base: "5xl", sm: "6xl", md: "7xl", lg: "8xl" }}
								textAlign={{ base: "center", md: "left" }}
								lineHeight="1.05"
							>
								I'm Sophie Choi
							</Text>
							<Text
								fontFamily="CaveatBrush"
								fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
								textAlign={{ base: "center", md: "left" }}
							>
								Computer Science @ UC Irvine
							</Text>
							<Button
								as="a"
								href="/sophies-personal-portfolio/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								height={{ base: "60px", md: "70px", lg: "80px" }}
								mt="20px"
								mb="30px"
								px={{ base: "24px", md: "32px", lg: "40px" }}
								fontSize={{ base: "18px", md: "22px", lg: "28px" }}
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
					</VStack>
				)}

				<Text
					fontFamily="CaveatBrush"
					fontSize={{ base: "22px", sm: "28px", md: "32px", lg: "36px" }}
					mt="5%"
					width={{ base: "100%", md: "80%" }}
					textAlign={{ base: "center", md: "left" }}
				>
					Nice to meet you! My name is Sophie Choi and I am a 2nd year Computer
					Science major at UC Irvine. I have well-rounded experiences in many
					different CS fields, such as full-stack development, infrastructure,
					UI/UX design, and blockchain! My goal is to become a software engineer
					or site reliability engineer. I approach every project with care,
					integrity, creativity, and collaboration. Enjoy looking through my
					portfolio!
				</Text>
			</VStack>
		</Box>
	);
};

export default About;
