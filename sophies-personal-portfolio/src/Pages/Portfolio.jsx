import React from "react";
import Polaroid from "../Components/Polaroid";
import { Heading, Box, VStack, HStack } from "@chakra-ui/react";

const Portfolio = ({ projects, openTitle, setOpenTitle }) => {
	const tilts = [-8, 6, -6, 9];

	const handleToggle = (title) => {
		if (openTitle === title) {
			setTimeout(() => setOpenTitle(null), 250);
		} else {
			setOpenTitle(title);
		}
	};

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
				>
					Portfolio
				</Heading>

				<HStack
					spacing="-20px"
					align="flex-start"
				>
					{projects.map((p, i) => {
						if (openTitle !== null && openTitle !== p.title) return null;

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
								isOpen={openTitle === p.title}
								onClick={() => handleToggle(p.title)}
							/>
						);
					})}
				</HStack>
			</VStack>
		</Box>
	);
};

export default Portfolio;
