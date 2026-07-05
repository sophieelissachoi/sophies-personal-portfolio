import React from "react";
import ExperiencesCard from "../Components/ExperiencesCard";
import NAWCWD from "../assets/nawcwd.png";
import Cyber from "../assets/cyber.png";
import CTC from "../assets/ctc.png";
import Blockchain from "../assets/blockchain.png";
import { Heading, Box, VStack } from "@chakra-ui/react";

const Experiences = () => {
	const experiences = [
		{
			role: "Software Developer Intern",
			company: "Naval Air Warfare Center Weapons Division (NAWCWD)",
			description: [
				"Engineered a WPF GUI (MVVM, C#/XML) to transmit positioning and tasking data to a radar system on San Nicolas Island, applying unit testing across the full SDLC to ensure reliable deployment to live hardware",
				"Gained hands-on exposure to radar tasking and command protocols, including detection, tracking, and hand-off of high-altitude objects",
			],
			type: "Internship",
			projects: ["Weibel Radar Application"],
			skills: [
				"XAML",
				"Windows Presentation Foundation (WPF)",
				"Model-view-viewmodel (MVVM)",
				"Object-Oriented Programming (OOP)",
			],
			photo: NAWCWD,
		},
		{
			role: "Infrastructure Lead",
			company: "Cyber @ UCI Infrastructure Team",
			description: [
				"Decommissioned servers and reorganized network topology for clearer operational visibility",
				"Leading and designing UI/UX workflows in Figma for internal tooling (Docker, Kubernetes, CI/CD), such as an internal VM provisioning tool that abstracts complex infrastructure workflows for club members",
				"Deployed Proxmox VE high-availability clustering and load balancing, improving VM failover reliability by 80% and eliminating single points of failure across the cluster",
				"Implemented SSO integration, Infrastructure as Code (IaC) tools, and CCNA networking concepts within a production environment",
			],
			type: "Club",
			projects: ["VM Provisioning Tool"],
			skills: [
				"Figma",
				"Docker",
				"Kubernetes",
				"GitLab CI/CD",
				"Proxmox",
				"IaC",
				"CCNA Networking",
			],
			photo: Cyber,
		},
		{
			role: "Full-Stack Developer",
			company: "Commit the Change",
			description: [
				"Programmed a full-stack application using React, Express.js, PostgreSQL, and Chakra UI, enabling scalable data management and real-time program oversight for a global NPO operating in 5 continents",
				"Deployed RESTful APIs in Express.js with full CRUD functionality and Promise-based concurrent data fetching, streamlining frontend–backend data flow and improving platform performance by 25%",
				"Collaborated in Agile sprints with pair programming and direct client feedback to ship features against a 2-week deadline",
			],
			type: "Club",
			projects: [],
			skills: ["React", "Express.js", "PostgreSQL", "Chakra UI"],
			photo: CTC,
		},
		{
			role: "Software Developer",
			company: "Blockchain @ UCI Smart Contract Team",
			description: [
				"Engineered an AI-powered exploit generation engine using OpenAI APIs and Anvil local chain, delivering binary proof-of-concept attacks on live contract state rather than theoretical vulnerability reports",
				"Built a Python Slither static analysis module detecting reentrancy, access control, and logic flaws, structuring findings as JSON to feed a downstream LangGraph agent pipeline",
				"Containerized the platform with Docker and designed a shared Postgres/pgvector database architecture, enabling consistent multi-developer access to run state and grounding data",
			],
			type: "Club",
			projects: [],
			skills: ["Python", "Docker", "PostgreSQL", "OpenAI API"],
			photo: Blockchain,
		},
	];

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
					/>
				))}
			</VStack>
		</Box>
	);
};

export default Experiences;
