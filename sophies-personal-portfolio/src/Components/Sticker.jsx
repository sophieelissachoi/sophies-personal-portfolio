import React from "react";
import { VStack, Image, Text } from "@chakra-ui/react";

const Sticker = ({ skill, photo }) => {
	return (
		<VStack>
			<Image
				src={photo}
				boxSize="50px"
				objectFit="cover"
			/>
			<Text fontFamily="CaveatBrush">{skill}</Text>
		</VStack>
	);
};

export default Sticker;
