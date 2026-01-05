import "./Portfolio.css";

const PortfolioCard = ({ title, description, picture, link }) => {
	return (
		<div className="-translate-x-7">
			<button
				className="portfolio-card"
				onClick={() => window.open(`${link}`, "_blank")}
			>
				<div className="image-bg hidden lg:block">
					<img
						src={picture}
						className="rounded-3xl w-[510px] h-[240px] m-5 hidden lg:block"
					/>
				</div>
				<div className="flex flex-col space-y-5 m-10">
					<h1 className="text-left"> {title} </h1>
					<p className="text-left"> {description} </p>
				</div>
			</button>
		</div>
	);
};

export default PortfolioCard;
