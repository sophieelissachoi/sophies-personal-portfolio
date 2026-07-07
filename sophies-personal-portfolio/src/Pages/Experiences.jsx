import React from "react";
import ExperiencesCard from "../Components/ExperiencesCard";
import { Heading, Box, VStack } from "@chakra-ui/react";

const Experiences = ({ experiences, projects, onProjectClick }) => {
	return (
		<Box
			pt="10%"
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<VStack
				px={{ base: "4%", md: "0" }}
				w="100%"
			>
				<Heading
					fontFamily="AmaticSC"
					fontSize={{ base: "40px", md: "50px", lg: "60px" }}
					mb="5%"
				>
					Experiences
				</Heading>

				{experiences.map((e) => (
					<ExperiencesCard
						key={e}
						role={e.role}
						company={e.company}
						description={e.description}
						type={e.type}
						projects={e.projects}
						skills={e.skills}
						photo={e.photo}
						allProjects={projects}
						onProjectClick={onProjectClick}
					/>
				))}
			</VStack>
		</Box>
	);
};

export default Experiences;
