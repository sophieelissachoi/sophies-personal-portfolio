import NavBar from "../Components/NavBar";
import About from "./About";
import Experiences from "./Experiences";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";

import Paper from "../assets/paper.avif";
import NAWCWD from "../assets/nawcwd.png";
import Cyber from "../assets/cyber.png";
import CTC from "../assets/ctc.png";
import Blockchain from "../assets/blockchain.png";
import CCNA from "../assets/ccna.png";
import GCF from "../assets/gcf.webp";
import GCFDashboard from "../assets/gcf-dashboard.png";

import HTML from "../assets/html.webp";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import C from "../assets/c.png";
import CPP from "../assets/c++.webp";
import XML from "../assets/xml.png";
import Java from "../assets/java.webp";
import Python from "../assets/python.png";
import React from "../assets/react.svg";
import Node from "../assets/node.webp";
import TailwindCSS from "../assets/tailwindcss.png";
import MVVM from "../assets/mvvm.png";
import Figma from "../assets/figma.png";
import IaC from "../assets/iac.png";
import Docker from "../assets/docker.png";
import Firebase from "../assets/firebase.png";
import Unity from "../assets/unity.avif";
import GirlsWhoCode from "../assets/girlswhocode.webp";
import Proxmox from "../assets/proxmox.png";
import Authentik from "../assets/authentik.png";
import Postgresql from "../assets/postgresql.png";
import Chakra from "../assets/chakra.png";
import TypeScript from "../assets/typescript.png";
import ExpressJs from "../assets/expressjs.svg";
import Linux from "../assets/linux.png";
import Microsoft365 from "../assets/microsoft365.webp";

import { Box } from "@chakra-ui/react";

const MainPage = () => {
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
			projects: ["EasyVM"],
			skills: [
				"Docker",
				"Linux",
				"Proxmox",
				"Terraform",
				"Networking",
				"Virtualization",
				"Figma",
				"React",
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
			projects: ["GCF Dashboard"],
			skills: [
				"React",
				"Node.js",
				"Express",
				"PostgreSQL",
				"Chakra UI",
				"HTML",
				"CSS",
				"Agile Methodologies",
			],
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
			projects: ["Smart Contract Security"],
			skills: [
				"Python",
				"Smart Contracts",
				"Solidity",
				"Docker",
				"PostgreSQL",
				"OpenAI API",
			],
			photo: Blockchain,
		},
	];

	const projects = [
		{
			title: "Cisco Certified Network Associate (CCNA)",
			skills:
				"Networking, Virtualization, Containerization, Routing, Security, IP, Automation",
			description:
				"Implementing and Administering Cisco Solutions (200-301 CCNA) v1.1 is a 120-minute exam that tests a candidate's knowledge and skills related to network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability.",
			link: "https://www.credly.com/badges/8329bc37-057e-4b79-813d-79f29889ab9e/linked_in_profile",
			photo: CCNA,
			additionalPhoto: null,
		},
		{
			title: "EasyVM",
			skills: "Go, React, TypeScript, Proxmox API, Chakra UI",
			description:
				"A Proxmox management frontend built with a Go backend (huma v2 framework, chi router, luthermonson/go-proxmox) and a React/TypeScript frontend. Includes endpoints for VM CRUD operations, config management, next VMID reservation, node stats, and job listing, paired with a dashboard featuring VM row cards, config drawers, and batch clone modals.",
			link: null,
			photo: Cyber,
			additionalPhoto: null,
		},
		{
			title: "GCF Dashboard",
			skills:
				"React, JavaScript, Axios, Chakra UI, Node.js, Express, REST API, PostgreSQL, AWS SDK, Firebase, Yarn, Agile methodology",
			description:
				"Global Creation Foundation (GCF) is a non-profit organization that expands music education to underserved communities across the globe. We built GCF a dashboard to help streamline organizing their programs, inventory, students, and more. There are unique features that are specifically tailored to their organization, such as role based access control, instrument tracking, program tracking, playlists, visual maps, etc. So far, GCF has donated 150+ instruments and has reached 500+ students in 6 different countries",
			link: null,
			photo: GCF,
			additionalPhoto: GCFDashboard,
		},
		{
			title: "Smart Contract Security",
			skills: "Python, FastAPI, Slither, Solidity, PostgreSQL, Docker",
			description:
				"A smart contract security analysis pipeline using Slither to detect vulnerabilities like reentrancy in Solidity contracts. Successfully identified a reentrancy bug in a vulnerable vault contract, demonstrating automated static analysis for smart contract auditing.",
			link: null,
			photo: Blockchain,
			additionalPhoto: null,
		},
	];

	const skills = [
		{
			title: "Languages",
			skills: [
				"Python",
				"JavaScript",
				"TypeScript",
				"Java",
				"C++",
				"C#",
				"HTML",
				"CSS",
				"XML",
			],
			photos: [Python, JavaScript, TypeScript, Java, CPP, C, HTML, CSS, XML],
		},
		{
			title: "Frameworks/Libraries",
			skills: [
				"React",
				"Node.js",
				"Express",
				"PostgreSQL",
				"MVVM",
				"Chakra UI",
				"Tailwind CSS",
			],
			photos: [React, Node, ExpressJs, Postgresql, MVVM, Chakra, TailwindCSS],
		},
		{
			title: "Infrastructure",
			skills: ["Docker", "Proxmox", "IaC", "Linux"],
			photos: [Docker, Proxmox, IaC, Linux],
		},
		{
			title: "Tools",
			skills: ["Figma", "Firebase", "Unity", "Microsoft 365"],
			photos: [Figma, Firebase, Unity, Microsoft365],
		},
	];

	return (
		<Box
			bgImage={Paper}
			minHeight="100vh"
			width="100%"
			pb="10%"
		>
			<NavBar />

			<Box
				bgImage={Paper}
				minHeight="100vh"
				width="100%"
				pb="10%"
			>
				<NavBar />
				<Box id="about">
					<About />
				</Box>
				<Box id="experiences">
					<Experiences
						experiences={experiences}
						projects={projects}
					/>
				</Box>
				<Box id="portfolio">
					<Portfolio projects={projects} />
				</Box>
				<Box id="skills">
					<Skills skills={skills} />
				</Box>
				<Box id="contact">
					<Contact />
				</Box>
			</Box>
		</Box>
	);
};

export default MainPage;
