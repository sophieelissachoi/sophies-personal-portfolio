import React, { useState } from "react";
import Polaroid from "../Components/Polaroid";
import { Heading, Box, VStack, HStack } from "@chakra-ui/react";

const Portfolio = ({ projects }) => {
	const [openIndex, setOpenIndex] = useState(null);
	const tilts = [-8, 6, -6, 9];

	return (
		<Box
			pt="10%"
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
					Portfolio
				</Heading>

				<HStack
					spacing="-20px"
					align="flex-start"
					gap="15px"
				>
					{projects.map((p, i) => {
						if (openIndex !== null && openIndex !== i) return null;

						return (
							<Polaroid
								key={p.title}
								title={p.title}
								skills={p.skills}
								description={p.description}
								link={p.link}
								photo={p.photo}
								additionalPhoto={p.additionalPhoto}
								tilt={tilts[i % tilts.length]}
								isOpen={openIndex === i}
								onClick={() => setOpenIndex(openIndex === i ? null : i)}
							/>
						);
					})}
				</HStack>
			</VStack>
		</Box>
	);
};

export default Portfolio;
