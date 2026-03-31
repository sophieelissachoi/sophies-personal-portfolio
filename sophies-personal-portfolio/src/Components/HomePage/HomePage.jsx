import "./HomePage.css";
import NavBar from "../NavBar/Navbar";
import Socials from "../Socials/Socials";
import Sophie from "../../assets/sophie.jpg";
import Resume from "../../../public/resume.pdf";

const HomePage = () => {
	return (
		<div>
			<NavBar />

			{/* Intro Text */}
			<div className="flex flex-col">
				<div className="sm:absolute left-0 top-50 sm:ml-10 max-sm:mr-10 max-sm:mt-20">
					<p id="hello"> Hello! </p>
					<h1 id="name">
						{" "}
						I'm <span className="gradient"> Sophie Choi </span>{" "}
					</h1>
					<h2 id="intro-line"> CS @ UC Irvine </h2>
					<a
						href={Resume}
						target="_blank"
						rel="noopener noreferrer"
					>
						<button id="resume-button">Resume</button>
					</a>

					{/* Socials Icons */}
					<Socials />
				</div>
				<img
					src={Sophie}
					className="h-[400px] ml-100 rounded-xl max-sm:ml-1 max-sm:h-[430px] max-sm:w-[280px]"
				/>
			</div>
		</div>
	);
};

export default HomePage;
