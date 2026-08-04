import { useState } from "react";

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
import DotNET from "../assets/dotnet.png";
import WPF from "../assets/wpf.png";
import NAS from "../assets/nas.png";
import Git from "../assets/git.png";
import GitLab from "../assets/gitlab.png";

import { Box } from "@chakra-ui/react";

const MainPage = () => {
	const [openProjectTitle, setOpenProjectTitle] = useState(null);

	const scrollToProject = (title) => {
		setOpenProjectTitle(title);
		const el = document.getElementById("portfolio");
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const experiences = [
		{
			role: "Software Developer Intern",
			company: "Naval Air Warfare Center Weapons Division (NAWCWD)",
			description: [
				"Co-authored a bidirectional real-time C#/.NET application (WPF, MVVM) that transmits positioning commands to a $6M Weibel radar system and parses live radar telemetry from 9 targets into human-readable format in real-time, streamlining military range testing operations",
				"Developed a C#/.NET system configuration parser to validate network socket connections at startup and authored OOP data structures that bridge frontend display and backend logic, ensuring the application launches reliably before real-time operations begin",
				"Presented system architecture, UML, and XAML GUI diagrams based on software requirements at critical design reviews, aligning hardware stakeholders on implementation decisions before development milestones",
				"Authored the full unit test suite in C#, covering end-to-end network connectivity, debugged integration failures, and wrote application test procedure documentation to standardize SDLC validation",
			],
			type: "Internship",
			projects: ["Weibel Radar Application"],
			skills: [
				"C#",
				".NET",
				"WPF",
				"MVVM",
				"OOP",
				"UML",
				"XAML",
				"Networking",
				"Unit Testing",
			],
			photo: NAWCWD,
		},
		{
			role: "Co-Infrastructure Lead",
			company: "Cyber @ UCI Infrastructure Team",
			description: [
				"Leading architecture and Figma UI/UX design for 4 internal tools built with React, GitLab, and Docker, including a VM provisioning tool serving 20+ internal club members",
				"Maintained SSO (Authentik), IaC tooling, Proxmox virtualization with Linux, and Docker containerization across a production network serving 100+ club members, ensuring up-time and security for training and workshops",
				"Reduced cluster overhead by 25% and improved operational efficiency by doing routine maintenance on the Proxmox hypervisor server cluster (Linux) and reorganizing NFS storage configurations",
				"Improved storage bandwidth to 40 GB/s by configuring a dedicated storage switch connecting Proxmox hypervisor nodes to a NAS using CLI-based network configuration, isolating storage traffic from the production network",
				"Deployed Proxmox VE high-availability clustering and load balancing, eliminating single points of failure across the cluster to ensure uninterrupted access to club infrastructure",
			],
			type: "Club",
			projects: ["EasyVM"],
			skills: [
				"Docker",
				"Linux",
				"Proxmox",
				"IaC",
				"Networking",
				"Virtualization",
				"Figma",
				"React",
				"GitLab",
				"Authentik",
				"NAS Admin",
			],
			photo: Cyber,
		},
		{
			role: "Full-Stack Developer",
			company: "Commit the Change",
			description: [
				"Programmed a full-stack application using React, Express.js, PostgreSQL, and CSS, enabling scalable data management and real-time program oversight for a global NPO operating in 5 continents",
				"Deployed RESTful APIs in JavaScript with full CRUD functionality and Promise-based concurrent data fetching, optimizing frontend–backend data flow and improving platform performance by ~25%",
				"Collaborated in Agile sprints with pair programming and Git to ship React features against 2-week deadlines with evolving client requirements",
			],
			type: "Club",
			projects: ["GCF Dashboard"],
			skills: [
				"React",
				"Node.js",
				"Express",
				"PostgreSQL",
				"CSS",
				"Agile Methodologies",
				"Git",
			],
			photo: CTC,
		},
		{
			role: "Software Developer",
			company: "Blockchain @ UCI Smart Contract Team",
			description: [
				"Engineered an AI-powered exploit generation engine using Python, RESTful APIs, and Anvil local chain, delivering binary proof-of-concept attacks on live contract state rather than theoretical vulnerability reports",
				"Built a Python Slither static analysis module detecting reentrancy, access control, and logic flaws in a smart contract, structuring findings as JSON to feed a downstream LangGraph agent pipeline",
				"Containerized the platform with Docker and designed a shared Postgres/pgvector database architecture, giving all developers a consistent environment and eliminating data inconsistencies across the team",
			],
			type: "Club",
			projects: ["Smart Contract Security"],
			skills: [
				"Python",
				"Smart Contracts",
				"Docker",
				"PostgreSQL",
				"pgvector",
				"LangGraph",
			],
			photo: Blockchain,
		},
	];

	const skills = [
		{
			title: "Languages",
			skills: [
				"Python",
				"C++",
				"C#",
				"JavaScript",
				"TypeScript",
				"Java",
				"HTML",
				"CSS",
				"XML",
			],
			photos: [Python, CPP, C, JavaScript, TypeScript, Java, HTML, CSS, XML],
		},
		{
			title: "Frameworks/Libraries",
			skills: [
				"React",
				"Node.js",
				"Express",
				"PostgreSQL",
				".NET",
				"WPF",
				"MVVM",
				"Tailwind CSS",
			],
			photos: [
				React,
				Node,
				ExpressJs,
				Postgresql,
				DotNET,
				WPF,
				MVVM,
				TailwindCSS,
			],
		},
		{
			title: "Tools",
			skills: [
				"Docker",
				"Proxmox",
				"IaC",
				"Linux",
				"NAS Admin",
				"Git",
				"GitLab",
				"Figma",
				"Firebase",
				"Unity",
				"Microsoft 365",
			],
			photos: [
				Docker,
				Proxmox,
				IaC,
				Linux,
				NAS,
				Git,
				GitLab,
				Figma,
				Firebase,
				Unity,
				Microsoft365,
			],
		},
		{
			title: "Certifications",
			skills: [
				"Cisco Certified Network Associate (CCNA)",
				"Girls Who Code: Data Science for Good",
			],
			photos: [CCNA, GirlsWhoCode],
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
			title: "Weibel Radar Application",
			skills: "C#, .NET, WPF, MVVM, XAML, UML, Unit Testing",
			description:
				"A bidirectional real-time C#/.NET application (WPF, MVVM) that transmits positioning commands to a $6M Weibel radar system and parses live radar telemetry from 9 targets into human-readable format in real-time, streamlining military range testing operations at NAWCWD Point Mugu.",
			link: null,
			photo: NAWCWD,
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
			link: "https://github.com/ctc-uci/gcf",
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

	return (
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
					onProjectClick={scrollToProject}
				/>
			</Box>
			<Box id="portfolio">
				<Portfolio
					projects={projects}
					openTitle={openProjectTitle}
					setOpenTitle={setOpenProjectTitle}
				/>
			</Box>
			<Box id="skills">
				<Skills skills={skills} />
			</Box>
			<Box id="contact">
				<Contact />
			</Box>
		</Box>
	);
};

export default MainPage;
