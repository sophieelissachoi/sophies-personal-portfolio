import React from "react";
import Socials from "../Components/Socials";
import { Box, Heading, VStack, Text, HStack } from "@chakra-ui/react";

const Contact = () => {
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
					fontSize={{ base: "40px", md: "50px", lg: "60px" }}
					mb="5%"
				>
					Contact
				</Heading>

				<Socials />

				<VStack
					align="flex-start"
					mt="20px"
					spacing="2"
				>
					<HStack
						flexWrap="wrap"
						justify="center"
					>
						<Text
							width={{ base: "auto", sm: "140px" }}
							textAlign={{ base: "left", sm: "right" }}
							fontWeight="bold"
						>
							Personal Email:
						</Text>
						<Text>sophie.elissa.choi@gmail.com</Text>
					</HStack>
					<HStack>
						<Text
							width={{ base: "auto", sm: "140px" }}
							textAlign={{ base: "left", sm: "right" }}
							fontWeight="bold"
						>
							School Email:
						</Text>
						<Text>sechoi3@uci.edu</Text>
					</HStack>
				</VStack>
			</VStack>
		</Box>
	);
};

export default Contact;
