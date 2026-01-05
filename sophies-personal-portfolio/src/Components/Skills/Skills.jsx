import NavBar from "../NavBar/Navbar";
import SkillsCard from "./SkillsCard";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/javascript.png";
import C from "../../assets/c.png";
import Java from "../../assets/java.webp";
import Python from "../../assets/python.png";
import React from "../../assets/react.svg";
import Node from "../../assets/node.png";
import Ionic from "../../assets/ionic.webp";
import Capacitor from "../../assets/capacitor.svg";
import TailwindCSS from "../../assets/tailwindcss.png";
import Figma from "../../assets/figma.png";
import Firebase from "../../assets/firebase.png";
import GoogleCloud from "../../assets/googlecloud.png";
import Cloudflare from "../../assets/cloudflare.png";
import Render from "../../assets/render.png";
import Xcode from "../../assets/xcode.png";
import Unity from "../../assets/unity.avif";
import GirlsWhoCode from "../../assets/girlswhocode.webp";
import CCNA from "../../assets/ccna.png";
import Proxmox from "../../assets/proxmox.png";
import Authentik from "../../assets/authentik.png";
import Postgresql from "../../assets/postgresql.png";
import Chakra from "../../assets/chakra.png";
import TypeScript from "../../assets/typescript.png";
import ExpressJs from "../../assets/expressjs.svg";
import Linux from "../../assets/linux.png";

const Skills = () => {
	const languages = [
		{ skill: "HTML", image: HTML },
		{ skill: "CSS", image: CSS },
		{ skill: "JavaScript", image: JavaScript },
		{ skill: "Python", image: Python },
		{ skill: "Java", image: Java },
		{ skill: "C#", image: C },
	];

	const frameworks = [
		{ skill: "React", image: React },
		{ skill: "TypeScript", image: TypeScript },
		{ skill: "PostgreSQL", image: Postgresql },
		{ skill: "Express.js", image: ExpressJs },
		{ skill: "TailwindCSS", image: TailwindCSS },
		{ skill: "ChakraUI", image: Chakra },
		{ skill: "Ionic", image: Ionic },
		{ skill: "Capacitor", image: Capacitor },
	];

	const tools = [
		{ skill: "Figma", image: Figma },
		{ skill: "Proxmox", image: Proxmox },
		{ skill: "Linux", image: Linux },
		{ skill: "Authentik", image: Authentik },
		{ skill: "Firebase", image: Firebase },
		{ skill: "Google Cloud", image: GoogleCloud },
		{ skill: "Cloudflare", image: Cloudflare },
		{ skill: "Render", image: Render },
		{ skill: "Xcode", image: Xcode },
		{ skill: "Unity", image: Unity },
	];

	const certifications = [
		{ skill: "CCNA", image: CCNA },
		{ skill: "Intuit 1", image: GirlsWhoCode },
		{ skill: "Data Science for Good", image: GirlsWhoCode },
		{ skill: "Intro to Data Science", image: GirlsWhoCode },
	];

	return (
		<div>
			<NavBar />
			<div className="mt-20 max-md:-translate-x-26">
				<h1 className="skills gradient max-md:translate-x-20"> Skills </h1>
				<h4 className="purple-gradient mt-10 max-md:translate-x-20"> Languages </h4>
				<div className="flex max-md:grid-cols-1 grid grid-cols-3 gap-8 max-md:translate-x-40 max-sm:translate-x-20">
					{languages.map(({ skill, image }) => (
						<SkillsCard
							key={skill}
							skill={skill}
							image={image}
						/>
					))}
				</div>

				<h4 className="purple-gradient mt-10 max-md:translate-x-15">
					Frameworks/Libraries
				</h4>
				<div className="flex max-md:grid-cols-1 grid grid-cols-3 gap-8 max-md:translate-x-40 max-sm:translate-x-20">
					{frameworks.map(({ skill, image }) => (
						<SkillsCard
							key={skill}
							skill={skill}
							image={image}
						/>
					))}
				</div>

				<h4 className="purple-gradient mt-10 max-md:translate-x-15"> Tools </h4>
				<div className="flex max-md:grid-cols-1 grid grid-cols-3 gap-8 max-md:translate-x-40 max-sm:translate-x-20">
					{tools.map(({ skill, image }) => (
						<SkillsCard
							key={skill}
							skill={skill}
							image={image}
						/>
					))}
				</div>

				<h4 className="purple-gradient mt-10 max-md:translate-x-15">
					{" "}
					Certifications{" "}
				</h4>
				<div className="flex max-md:grid-cols-1 grid grid-cols-3 gap-8 max-md:translate-x-40 max-sm:translate-x-20">
					{certifications.map(({ skill, image }) => (
						<SkillsCard
							key={skill}
							skill={skill}
							image={image}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
