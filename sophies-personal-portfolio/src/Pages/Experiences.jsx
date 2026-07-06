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
			<VStack>
				<Heading
					fontFamily="AmaticSC"
					fontSize="60px"
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
