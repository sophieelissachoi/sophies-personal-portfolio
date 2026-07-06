import React, { useMemo } from "react";
import Sticker from "../Components/Sticker";
import Sheet from "../assets/sticker-sheet.png";
import { Card, CardHeader, CardBody, Heading, Box } from "@chakra-ui/react";

const CARD_WIDTH = 288;
const CARD_HEIGHT = 384;
const STICKER_SIZE = 90;
const HEADER_HEIGHT = 70;
const PADDING = 12;

const generatePositions = (count) => {
	const positions = [];

	for (let i = 0; i < count; i++) {
		let candidate;
		let attempts = 0;
		let validPosition = false;

		while (!validPosition && attempts < 200) {
			candidate = {
				x: PADDING + Math.random() * (CARD_WIDTH - STICKER_SIZE - PADDING * 2),
				y:
					HEADER_HEIGHT +
					Math.random() *
						(CARD_HEIGHT - HEADER_HEIGHT - STICKER_SIZE - PADDING),
			};

			validPosition = positions.every((p) => {
				const dx = Math.abs(p.x - candidate.x);
				const dy = Math.abs(p.y - candidate.y);
				return dx >= STICKER_SIZE || dy >= STICKER_SIZE;
			});

			attempts++;
		}

		positions.push({
			...candidate,
			rotate: Math.random() * 20 - 10,
		});
	}

	return positions;
};

const StickerSheet = ({ title, skills, photos, tilt, mt }) => {
	const positions = useMemo(() => generatePositions(skills.length), [skills]);

	return (
		<Card
			bgImage={Sheet}
			bgSize="cover"
			bgRepeat="no-repeat"
			bgPosition="center"
			width={`${CARD_WIDTH}px`}
			height={`${CARD_HEIGHT}px`}
			transform={`rotate(${tilt}deg)`}
			mt={mt}
			border="none"
			boxShadow="none"
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
				{skills.map((s, i) => (
					<Box
						key={s}
						position="absolute"
						top={`${positions[i].y}px`}
						left={`${positions[i].x}px`}
						transform={`rotate(${positions[i].rotate}deg)`}
					>
						<Sticker
							skill={s}
							photo={photos?.[i]}
						/>
					</Box>
				))}
			</CardBody>
		</Card>
	);
};

export default StickerSheet;
