import NavBar from "../Components/NavBar";
import About from "./About";
import Experiences from "./Experiences";
import Portfolio from "./Portfolio";
import Paper from "../assets/paper.avif";
import NAWCWD from "../assets/nawcwd.png";
import Cyber from "../assets/cyber.png";
import CTC from "../assets/ctc.png";
import Blockchain from "../assets/blockchain.png";
import CCNA from "../assets/ccna.png";
import GCF from "../assets/gcf.webp";
import GCFDashboard from "../assets/gcf-dashboard.png";
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
			projects: ["Global Creation Foundation (GCF) Dashboard"],
			skills: [
				"React",
				"Express.js",
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
			skills: "Go, React, TypeScript, Chakra UI, huma, chi, Proxmox API",
			description:
				"A Proxmox management frontend built with a Go backend (huma v2 framework, chi router, luthermonson/go-proxmox) and a React/TypeScript frontend. Includes endpoints for VM CRUD operations, config management, next VMID reservation, node stats, and job listing, paired with a dashboard featuring VM row cards, config drawers, and batch clone modals.",
			link: "PLACEHOLDER — add GitHub repo or demo link",
			photo: Cyber,
			additionalPhoto: null,
		},
		{
			title: "GCF Dashboard",
			skills: "PLACEHOLDER — add tech stack",
			description: "PLACEHOLDER — add project description",
			link: "PLACEHOLDER — add link",
			photo: GCF,
			additionalPhoto: GCFDashboard,
		},
		{
			title: "Smart Contract Security Analysis",
			skills: "Python, FastAPI, Slither, Solidity",
			description:
				"A smart contract security analysis pipeline using Slither to detect vulnerabilities like reentrancy in Solidity contracts. Successfully identified a reentrancy bug in a vulnerable vault contract, demonstrating automated static analysis for smart contract auditing.",
			link: "PLACEHOLDER — add GitHub repo or demo link",
			photo: Blockchain,
			additionalPhoto: null,
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
			<About />
			<Experiences experiences={experiences} />
			<Portfolio projects={projects} />
		</Box>
	);
};

export default MainPage;
