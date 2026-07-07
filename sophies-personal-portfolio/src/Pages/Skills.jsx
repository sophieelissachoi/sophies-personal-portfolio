import React from "react";
import StickerSheet from "../Components/StickerSheet";
import { Box, VStack, HStack, Heading, Wrap, WrapItem } from "@chakra-ui/react";

const Skills = ({ skills }) => {
	const tilts = [-8, 6, -6, 9];
	const offsets = ["0px", "40px", "10px", "70px"];

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
					Skills
				</Heading>

				<Wrap
					spacing={{ base: "16px", md: "-20px" }}
					justify="center"
					px={{ base: "4%", md: "0" }}
				>
					{skills.map((s, i) => (
						<WrapItem key={s.title}>
							<StickerSheet
								title={s.title}
								skills={s.skills}
								photos={s.photos}
								tilt={tilts[i % tilts.length]}
								mt={offsets[i % offsets.length]}
							/>
						</WrapItem>
					))}
				</Wrap>
			</VStack>
		</Box>
	);
};

export default Skills;
