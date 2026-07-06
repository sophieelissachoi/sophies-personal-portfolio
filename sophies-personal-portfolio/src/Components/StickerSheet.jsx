import React, { useMemo } from "react";
import Sticker from "../Components/Sticker";
import Sheet from "../assets/sticker-sheet.png";
import {
	Card,
	CardHeader,
	CardBody,
	Heading,
	Box,
	Grid,
	GridItem,
} from "@chakra-ui/react";

const StickerSheet = ({ title, skills, photos, tilt, mt }) => {
	return (
		<Card
			bgImage={Sheet}
			bgSize="cover"
			bgRepeat="no-repeat"
			bgPosition="center"
			width={"300px"}
			height={"400px"}
			transform={`rotate(${tilt}deg)`}
			mt={mt}
			border="none"
			boxShadow="none"
			overflow="hidden"
			mr="13px"
		>
			<CardHeader>
				<Heading
					fontFamily="CaveatBrush"
					fontSize="2xl"
					whiteSpace="nowrap"
				>
					{title}
				</Heading>
			</CardHeader>

			<CardBody
				position="relative"
				height="100%"
				p="0"
			>
				<Grid templateColumns="repeat(3, 1fr)">
					{skills.map((s, i) => (
						<GridItem>
							<Sticker
								skill={s}
								photo={photos?.[i]}
							/>
						</GridItem>
					))}
				</Grid>
			</CardBody>
		</Card>
	);
};

export default StickerSheet;
