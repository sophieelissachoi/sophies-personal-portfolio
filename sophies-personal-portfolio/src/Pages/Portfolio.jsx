import React from "react";
import Polaroid from "../Components/Polaroid";
import { Heading, Box, VStack, Wrap, WrapItem } from "@chakra-ui/react";

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
					fontSize={{ base: "40px", md: "50px", lg: "60px" }}
					mb="5%"
				>
					Portfolio
				</Heading>

				<Wrap
					spacing={{ base: "16px", md: "-20px" }}
					justify="center"
					px={{ base: "4%", md: "0" }}
				>
					{projects.map((p, i) => {
						if (openTitle !== null && openTitle !== p.title) return null;

						return (
							<WrapItem key={p.title}>
								<Polaroid
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
							</WrapItem>
						);
					})}
				</Wrap>
			</VStack>
		</Box>
	);
};

export default Portfolio;
