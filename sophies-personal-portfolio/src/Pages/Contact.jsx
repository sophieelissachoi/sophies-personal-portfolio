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
					fontSize="60px"
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
					<HStack>
						<Text
							width="140px"
							textAlign="right"
							fontWeight="bold"
						>
							Personal Email:
						</Text>
						<Text>sophie.elissa.choi@gmail.com</Text>
					</HStack>
					<HStack>
						<Text
							width="140px"
							textAlign="right"
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
