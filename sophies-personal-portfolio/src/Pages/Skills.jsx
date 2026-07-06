import React from "react";
import StickerSheet from "../Components/StickerSheet";
import { Box, VStack, HStack, Heading } from "@chakra-ui/react";

const Skills = ({ skills }) => {
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
					Skills
				</Heading>

				<HStack>
					{skills.map((s) => (
						<StickerSheet
							key={s}
							title={s.title}
							skills={s.skills}
							photos={s.photos}
						/>
					))}
				</HStack>
			</VStack>
		</Box>
	);
};

export default Skills;
