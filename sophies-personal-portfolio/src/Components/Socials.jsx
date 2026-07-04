import React from "react";
import { Box, Image, HStack, Link } from "@chakra-ui/react";
import LinkedIn from "../assets/linkedin.png";
import GitHub from "../assets/github.png";
import Email from "../assets/email.png";

const Socials = () => {
	return (
		<Box>
			<HStack gap="10%">
				<Link
					href="https://www.linkedin.com/in/sophie-choi-b78991319/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image src={LinkedIn} />
				</Link>
				<Link
					href="https://github.com/sophieelissachoi"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image src={GitHub} />
				</Link>

				<Link href="mailto:sophie.elissa.choi@gmail.com">
					<Image src={Email} />
				</Link>
			</HStack>
		</Box>
	);
};

export default Socials;
