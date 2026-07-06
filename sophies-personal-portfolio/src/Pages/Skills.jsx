import React from "react";
import StickerSheet from "../Components/StickerSheet";
import { Box, VStack, HStack, Heading } from "@chakra-ui/react";

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
					fontSize="60px"
					mb="5%"
				>
					Skills
				</Heading>

				<HStack
					spacing="-20px"
					align="flex-start"
				>
					{skills.map((s, i) => (
						<StickerSheet
							key={s.title}
							title={s.title}
							skills={s.skills}
							photos={s.photos}
							tilt={tilts[i % tilts.length]}
							mt={offsets[i % offsets.length]}
						/>
					))}
				</HStack>
			</VStack>
		</Box>
	);
};

export default Skills;
